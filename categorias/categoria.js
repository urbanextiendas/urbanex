import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://mlkynawsjqmawgxeuvks.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_UyYcTuSIaLDbaD73wvwOfA_TbyFlRNv';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const VISUALS = {
    'alojamiento': {
        title: 'ALOJAMIENTO',
        subtitle: 'HOTELES, HOSTALES Y CABAÑAS PARA DESCANSAR EN LOJA',
        search: '¿Qué hotel, hostal o alojamiento busca?',
        image: '../imagenes/Turismo.png'
    },
    'comercio': {
        title: 'COMERCIO',
        subtitle: 'TIENDAS, PRODUCTOS Y NEGOCIOS COMERCIALES DE LOJA',
        search: '¿Qué tienda, producto o comercio busca?',
        image: '../imagenes/Comercio.png'
    },
    'comida y bebida': {
        title: 'GASTRONOMÍA',
        subtitle: 'RESTAURANTES, CAFETERÍAS Y SABORES DE LOJA EN UN SOLO LUGAR',
        search: '¿Qué restaurante, cafetería o plato busca?',
        image: '../imagenes/Gastronomía.png'
    },
    'entretenimiento': {
        title: 'ENTRETENIMIENTO',
        subtitle: 'DIVERSIÓN, EXPERIENCIAS Y ESPACIOS DE OCIO EN LOJA',
        search: '¿Qué actividad, evento o entretenimiento busca?',
        image: '../imagenes/Entretenimiento.png'
    },
    'salud y bienestar': {
        title: 'SALUD Y BIENESTAR',
        subtitle: 'SALUD, CUIDADO PERSONAL Y BIENESTAR EN LOJA',
        search: '¿Qué servicio de salud o bienestar busca?',
        image: '../imagenes/Salud.png'
    },
    'servicios': {
        title: 'SERVICIOS',
        subtitle: 'SERVICIOS PROFESIONALES Y TÉCNICOS DE LOJA',
        search: '¿Qué servicio profesional o técnico busca?',
        image: '../imagenes/Servicios.png'
    }
};

const BUSINESS_SELECT_INITIAL = `
    id,
    name,
    slug,
    city,
    address,
    cover_image,
    is_featured,
    delivery_available,
    category_id,
    subcategory_id,
    categories!category_id(name,icon),
    subcategories:categories!subcategory_id(name,icon)
`;

let rootCategories = [];
let subCategories = [];
let currentRoot = null;
let currentSubcategories = [];
let allBusinesses = [];
let searchTerm = '';

function normalize(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ');
}

function esc(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function toNum(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
}

function plural(count, singular = 'local', pluralText = 'locales') {
    return `${count} ${count === 1 ? singular : pluralText}`;
}

function isRootCategory(category) {
    return category.parent_id === null ||
           category.parent_id === undefined ||
           category.parent_id === '';
}

function categoryParameter() {
    return new URLSearchParams(location.search).get('categoria');
}

function resolveRootCategory(parameter) {
    if (!parameter) return null;

    const id = toNum(parameter);
    if (id !== null) {
        const byId = rootCategories.find(category => toNum(category.id) === id);
        if (byId) return byId;
    }

    const target = normalize(parameter);
    return rootCategories.find(category => normalize(category.name) === target) ||
           rootCategories.find(category => {
               const name = normalize(category.name);
               return name.includes(target) || target.includes(name);
           }) || null;
}

function visualForRoot(root) {
    const key = normalize(root?.name);
    const preset = VISUALS[key] || {};

    return {
        title: root?.display_title || preset.title || String(root?.name || 'Categoría').toUpperCase(),
        subtitle: root?.subtitle || preset.subtitle || 'TODOS LOS COMERCIOS DE LOJA EN UN SOLO LUGAR',
        search: root?.search_placeholder || preset.search || '¿Qué producto o servicio busca?',
        image: root?.hero_image || root?.image_url || root?.cover_image || root?.banner_image || preset.image || '../imagenes/Boulevard.png'
    };
}

function applyVisual() {
    const visual = visualForRoot(currentRoot);

    document.title = `Urbanex - ${currentRoot.name}`;
    document.documentElement.style.setProperty('--category-background', `url("${visual.image}")`);
    document.getElementById('siteSearch').placeholder = visual.search;
    document.getElementById('categoryHeroTitle').textContent = visual.title;
    document.getElementById('categoryHeroSubtitle').textContent = visual.subtitle;
    document.getElementById('directoryTitle').textContent = `Directorio completo — ${currentRoot.name}`;
}

function isFeatured(business) {
    return business.is_featured === true ||
           business.is_featured === 1 ||
           String(business.is_featured).toLowerCase() === 'true';
}

function getBusinessRootId(business) {
    const directCategoryId = toNum(business.category_id);
    const subcategoryId = toNum(business.subcategory_id);

    if (directCategoryId === toNum(currentRoot?.id)) {
        return directCategoryId;
    }

    const subcategory = subCategories.find(item =>
        toNum(item.id) === subcategoryId ||
        toNum(item.id) === directCategoryId
    );

    return subcategory ? toNum(subcategory.parent_id) : directCategoryId;
}

function belongsToRoot(business) {
    return currentRoot && getBusinessRootId(business) === toNum(currentRoot.id);
}

function belongsToSubcategory(business, subcategory) {
    const subId = toNum(subcategory?.id);
    if (subId === null) return false;

    return toNum(business.subcategory_id) === subId ||
           toNum(business.category_id) === subId;
}

function getApprovedReviews(business) {
    return (business.reviews || []).filter(review => review.is_approved !== false);
}

function getRating(business) {
    const reviews = getApprovedReviews(business);
    if (!reviews.length) return null;

    return reviews.reduce(
        (sum, review) => sum + Number(review.rating || 0),
        0
    ) / reviews.length;
}

function ecuadorNow() {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Guayaquil',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).formatToParts(new Date());

    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    return {
        day: days[values.weekday],
        minutes: Number(values.hour) * 60 + Number(values.minute)
    };
}

function isOpenNow(business) {
    const hours = business.business_hours || [];
    if (!hours.length) return false;

    const now = ecuadorNow();
    const row = hours.find(item =>
        Number(item.day_of_week) === now.day &&
        item.is_closed !== true
    );

    if (!row?.open_time || !row?.close_time) return false;

    const toMinutes = time => {
        const [hour, minute] = String(time).split(':').map(Number);
        return hour * 60 + (minute || 0);
    };

    const open = toMinutes(row.open_time);
    const close = toMinutes(row.close_time);

    if (!Number.isFinite(open) || !Number.isFinite(close)) return false;

    return close >= open
        ? now.minutes >= open && now.minutes <= close
        : now.minutes >= open || now.minutes <= close;
}

function enrichBusiness(business) {
    return {
        ...business,
        _rating: getRating(business),
        _reviewCount: getApprovedReviews(business).length,
        _openNow: isOpenNow(business)
    };
}

function businessMatchesSearch(business) {
    if (!searchTerm) return true;

    const haystack = normalize(`
        ${business.name || ''}
        ${business.address || ''}
        ${business.categories?.name || ''}
        ${business.subcategories?.name || ''}
    `);

    return haystack.includes(searchTerm);
}

function rootBusinesses() {
    return allBusinesses.filter(business =>
        belongsToRoot(business) &&
        businessMatchesSearch(business)
    );
}

function featuredBusinesses() {
    const sort = document.getElementById('sortSelect')?.value || 'rating';
    const list = rootBusinesses().filter(isFeatured);

    if (sort === 'name') {
        list.sort((a, b) =>
            String(a.name || '').localeCompare(String(b.name || ''), 'es')
        );
    } else {
        list.sort((a, b) => (b._rating || 0) - (a._rating || 0));
    }

    return list;
}

function countBySubcategory(subcategory) {
    return allBusinesses.filter(business =>
        belongsToRoot(business) &&
        belongsToSubcategory(business, subcategory)
    ).length;
}

function renderSubcategories() {
    const container = document.getElementById('categoriesList');
    const total = allBusinesses.filter(belongsToRoot).length;
    const rootId = encodeURIComponent(currentRoot.id);

    const allButton = `
        <li class="category-item active">
            <button type="button" class="active"
                    onclick="window.location.href='index.html?categoria=${rootId}'">
                <div class="icon-container">▦</div>
                <div class="category-text-info">
                    <span class="category-name">Todos</span>
                    <span class="category-count">${plural(total)}</span>
                </div>
            </button>
        </li>
    `;

    const subButtons = currentSubcategories.map(subcategory => {
        const count = countBySubcategory(subcategory);
        const url = `subcategoria.html?categoria=${rootId}&subcategoria=${encodeURIComponent(subcategory.id)}`;

        return `
            <li class="category-item">
                <button type="button"
                        onclick="window.location.href='${url}'">
                    <div class="icon-container">${esc(subcategory.icon || '•')}</div>
                    <div class="category-text-info">
                        <span class="category-name">${esc(subcategory.name)}</span>
                        <span class="category-count">${plural(count)}</span>
                    </div>
                </button>
            </li>
        `;
    }).join('');

    container.innerHTML = allButton + subButtons;
}

function businessUrl(business) {
    if (business.slug) {
        return `../business/?slug=${encodeURIComponent(business.slug)}`;
    }

    if (business.id !== null && business.id !== undefined) {
        return `../business/?id=${encodeURIComponent(business.id)}`;
    }

    return '#';
}

function businessThumb(business) {
    if (business.cover_image) {
        return `<img class="shop-thumb" src="${esc(business.cover_image)}"
                     alt="${esc(business.name)}" loading="lazy">`;
    }

    return `<span>${esc(
        business.subcategories?.icon ||
        business.categories?.icon ||
        currentRoot?.icon ||
        '🏪'
    )}</span>`;
}

function businessCard(business) {
    const ratingText = business._rating ? business._rating.toFixed(1) : '—';
    const reviewText = business._reviewCount
        ? `${business._reviewCount}`
        : 'Sin reseñas';

    const segment =
        business.subcategories?.name ||
        business.categories?.name ||
        currentRoot.name;

    const statusClass = business._openNow ? '' : 'closed';
    const statusText = business._openNow ? 'Abierto' : 'Cerrado';

    return `
        <a class="shop-card" href="${businessUrl(business)}">
            <div class="shop-thumb-wrapper">${businessThumb(business)}</div>
            <div class="shop-details">
                <div class="shop-title">${esc(business.name)}</div>
                <div class="shop-segment">${esc(segment)}</div>
                <div class="shop-rating-row">
                    <span class="star-icon">★</span>
                    <span class="rating-value">${ratingText}</span>
                    <span class="rating-count">${esc(reviewText)}</span>
                    <span class="status-indicator ${statusClass}">${statusText}</span>
                </div>
            </div>
        </a>
    `;
}

async function fetchBusinesses() {
    let query = supabase
        .from('businesses')
        .select(BUSINESS_SELECT_INITIAL)
        .eq('is_active', true);

    const rootId = toNum(currentRoot.id);
    const subcategoryIds = currentSubcategories
        .map(item => toNum(item.id))
        .filter(id => id !== null);

    const filters = [`category_id.eq.${rootId}`];

    if (subcategoryIds.length) {
        filters.push(`category_id.in.(${subcategoryIds.join(',')})`);
        filters.push(`subcategory_id.in.(${subcategoryIds.join(',')})`);
    }

    query = query.or(filters.join(','));
    return await query;
}

function groupRowsByBusiness(rows) {
    const map = new Map();

    (rows || []).forEach(row => {
        const key = String(row.business_id);
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(row);
    });

    return map;
}

async function loadBusinessDetails() {
    const ids = allBusinesses
        .map(business => business.id)
        .filter(id => id !== null && id !== undefined);

    if (!ids.length) return;

    try {
        const [hoursResult, reviewsResult] = await Promise.all([
            supabase
                .from('business_hours')
                .select('business_id,day_of_week,open_time,close_time,is_closed')
                .in('business_id', ids),

            supabase
                .from('reviews')
                .select('business_id,is_approved,rating')
                .eq('is_approved', true)
                .in('business_id', ids)
        ]);

        const hoursByBusiness = groupRowsByBusiness(hoursResult.data || []);
        const reviewsByBusiness = groupRowsByBusiness(reviewsResult.data || []);

        allBusinesses = allBusinesses.map(business => {
            const updatedBusiness = {
                ...business,
                business_hours:
                    hoursByBusiness.get(String(business.id)) || [],
                reviews:
                    reviewsByBusiness.get(String(business.id)) || []
            };

            return enrichBusiness(updatedBusiness);
        });

        renderSubcategories();
        renderFeatured();

        const directoryModal = document.getElementById('directoryModal');
        if (directoryModal?.classList.contains('open')) {
            window.openDirectory();
        }
    } catch (error) {
        console.warn('No se pudieron cargar horarios o reseñas:', error);
    }
}

function renderError(message) {
    document.getElementById('categoriesList').innerHTML = '';
    document.getElementById('shopsList').innerHTML =
        `<div class="empty-state">${esc(message)}</div>`;
    document.getElementById('showcaseStats').textContent = 'Error de carga';
}

async function boot() {
    try {
        const parameter = categoryParameter();

        if (!parameter) {
            window.location.replace('../boulevard.html');
            return;
        }

        const categoriesResult = await supabase
            .from('categories')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true })
            .order('name', { ascending: true });

        if (categoriesResult.error) throw categoriesResult.error;

        const categories = categoriesResult.data || [];
        rootCategories = categories.filter(isRootCategory);
        subCategories = categories.filter(category => !isRootCategory(category));
        currentRoot = resolveRootCategory(parameter);

        if (!currentRoot) {
            throw new Error('La categoría no existe o está inactiva.');
        }

        currentSubcategories = subCategories
            .filter(category =>
                toNum(category.parent_id) === toNum(currentRoot.id)
            )
            .sort((a, b) =>
                Number(a.sort_order || 0) - Number(b.sort_order || 0) ||
                String(a.name || '').localeCompare(String(b.name || ''), 'es')
            );

        applyVisual();

        const businessResult = await fetchBusinesses();
        if (businessResult.error) throw businessResult.error;

        allBusinesses = (businessResult.data || []).map(business =>
            enrichBusiness({
                ...business,
                business_hours: business.business_hours || [],
                reviews: business.reviews || []
            })
        );

        renderSubcategories();
        renderFeatured();

        const runLater =
            window.requestIdleCallback ||
            (callback => window.setTimeout(callback, 700));

        runLater(loadBusinessDetails);
    } catch (error) {
        console.error(error);
        renderError(
            error?.message ||
            'No se pudo cargar la información desde Supabase.'
        );
    }
}

function renderFeatured() {
    const list = featuredBusinesses();
    const container = document.getElementById('shopsList');
    const stats = document.getElementById('showcaseStats');

    stats.textContent =
        `${list.length} destacado${list.length !== 1 ? 's' : ''} ` +
        `seleccionado${list.length !== 1 ? 's' : ''}`;

    if (!list.length) {
        container.innerHTML =
            `<div class="empty-state">` +
            `No hay negocios destacados seleccionados en Supabase.` +
            `</div>`;
        return;
    }

    container.innerHTML = list.map(businessCard).join('');
}

window.openDirectory = () => {
    const list = rootBusinesses().sort((a, b) =>
        String(a.name || '').localeCompare(String(b.name || ''), 'es')
    );

    const grid = document.getElementById('directoryGrid');

    grid.innerHTML = list.length
        ? list.map(businessCard).join('')
        : `<div class="empty-state">No hay negocios para mostrar.</div>`;

    document.getElementById('directoryModal').classList.add('open');
};

window.closeDirectory = () => {
    document.getElementById('directoryModal').classList.remove('open');
};

document.getElementById('directoryModal').addEventListener('click', event => {
    if (event.target.id === 'directoryModal') closeDirectory();
});

document.getElementById('siteSearch').addEventListener('input', event => {
    searchTerm = normalize(event.target.value);
    renderFeatured();
});

document.getElementById('sortSelect').addEventListener('change', renderFeatured);

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeDirectory();
});

boot();
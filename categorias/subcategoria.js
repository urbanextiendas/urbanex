import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://mlkynawsjqmawgxeuvks.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_UyYcTuSIaLDbaD73wvwOfA_TbyFlRNv';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const ROOT_IMAGES = {
    'alojamiento': 'Turismo.png',
    'comercio': 'Comercio.png',
    'comida y bebida': 'Gastronomía.png',
    'entretenimiento': 'Boulevard.png',
    'salud y bienestar': 'Salud.png',
    'servicios': 'Boulevard.png'
};

let categories = [];
let allBusinesses = [];
let currentRoot = null;
let currentSub = null;
let businessesHere = [];
let textFilter = '';

const $ = id => document.getElementById(id);

const norm = value =>
    String(value || '')
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ');

const esc = value =>
    String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

const num = value => {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
};

function queryValue(name) {
    return new URLSearchParams(location.search).get(name);
}

function isRootCategory(category) {
    return category.parent_id === null ||
           category.parent_id === undefined ||
           category.parent_id === '';
}

function resolveCategory(parameter, rootOnly = false) {
    if (!parameter) return null;

    const id = num(parameter);
    const pool = rootOnly
        ? categories.filter(isRootCategory)
        : categories;

    if (id !== null) {
        const byId = pool.find(category => num(category.id) === id);
        if (byId) return byId;
    }

    const target = norm(parameter);
    return pool.find(category => norm(category.name) === target) ||
           pool.find(category => {
               const name = norm(category.name);
               return name.includes(target) || target.includes(name);
           }) ||
           null;
}

function assetUrl(value) {
    const source = String(value || '').trim();
    if (!source) return '';

    if (/^https?:\/\//i.test(source) || /^data:/i.test(source)) {
        return source;
    }

    if (source.startsWith('/')) {
        return '..' + source;
    }

    return '../' + source.replace(/^\.\//, '');
}

function logoOf(business) {
    return assetUrl(
        business.logo_url ||
        business.logo ||
        business.logo_image ||
        business.logo_path ||
        business.image_url ||
        business.cover_image ||
        business.banner_image ||
        ''
    );
}

function businessMatchesSub(business) {
    const subId = num(currentSub?.id);

    return subId !== null &&
        (
            num(business.subcategory_id) === subId ||
            num(business.category_id) === subId
        );
}

function isFeatured(business) {
    return business.is_featured === true ||
           business.is_featured === 1 ||
           String(business.is_featured).toLowerCase() === 'true';
}

function statusText(business) {
    if (typeof business.is_open === 'boolean') {
        return business.is_open ? 'Abierto' : 'Cerrado';
    }

    if (typeof business.open_now === 'boolean') {
        return business.open_now ? 'Abierto' : 'Cerrado';
    }

    return 'Ver negocio';
}

function businessLink(business) {
    if (business.slug) {
        return '../business/?slug=' +
            encodeURIComponent(business.slug);
    }

    if (business.id !== null && business.id !== undefined) {
        return '../business/?id=' +
            encodeURIComponent(business.id);
    }

    return '#';
}

function rootBackground() {
    const key = norm(currentRoot?.name);

    const custom =
        currentRoot?.hero_image ||
        currentRoot?.image_url ||
        currentRoot?.cover_image ||
        currentRoot?.banner_image;

    if (custom) return assetUrl(custom);

    return '../imagenes/' +
        (ROOT_IMAGES[key] || 'Boulevard.png');
}

function filteredBusinesses() {
    let list = [...businessesHere];

    if (textFilter) {
        const target = norm(textFilter);

        list = list.filter(business =>
            norm(`
                ${business.name || ''}
                ${business.address || ''}
                ${business.description || ''}
                ${business.city || ''}
            `).includes(target)
        );
    }

    const sort = $('sortBusiness').value;

    if (sort === 'name') {
        list.sort((a, b) =>
            String(a.name || '').localeCompare(
                String(b.name || ''),
                'es'
            )
        );
    } else {
        list.sort((a, b) =>
            Number(isFeatured(b)) -
            Number(isFeatured(a))
        );
    }

    return list;
}

function cardHtml(business) {
    const logo = logoOf(business);

    const logoHtml = logo
        ? `<img src="${esc(logo)}"
                alt="${esc(business.name)}"
                loading="lazy">`
        : esc(currentSub.icon || '🏪');

    const featured = isFeatured(business)
        ? '<span class="ux-featured">Destacado</span>'
        : '<span></span>';

    return `
        <a class="ux-card" href="${esc(businessLink(business))}">
            <div class="ux-logo">${logoHtml}</div>
            <div class="ux-card-body">
                <h3>${esc(business.name || 'Negocio')}</h3>
                <div class="tag">${esc(currentSub.name)}</div>
                <div class="addr">
                    ${business.address
                        ? '📍 ' + esc(business.address)
                        : 'Dirección no registrada'}
                </div>
                <div class="ux-card-bottom">
                    <span class="ux-badge">
                        ${esc(statusText(business))}
                    </span>
                    ${featured}
                </div>
            </div>
        </a>
    `;
}

function renderBusinesses() {
    const list = filteredBusinesses();

    $('businessCount').textContent =
        `${list.length} negocio${list.length === 1 ? '' : 's'} ` +
        `encontrado${list.length === 1 ? '' : 's'}`;

    if (!list.length) {
        $('businessGrid').innerHTML = `
            <div class="ux-empty">
                No hay empresas registradas en
                ${esc(currentSub.name)} por ahora.<br>
                Cuando se carguen en Supabase con esta
                subcategoría, aparecerán aquí.
            </div>
        `;
        return;
    }

    $('businessGrid').innerHTML =
        list.map(cardHtml).join('');
}

function renderFeatured() {
    const featured = businessesHere.filter(isFeatured);

    $('featuredCount').textContent =
        `${featured.length} destacado` +
        `${featured.length === 1 ? '' : 's'} encontrado` +
        `${featured.length === 1 ? '' : 's'}`;

    if (!featured.length) {
        $('featuredList').innerHTML = `
            <div class="ux-note">
                No hay negocios destacados en esta
                sección por ahora.
            </div>
        `;
        return;
    }

    $('featuredList').innerHTML = featured.map(business => {
        const logo = logoOf(business);

        const logoHtml = logo
            ? `<img src="${esc(logo)}"
                    alt="${esc(business.name)}"
                    loading="lazy">`
            : esc(currentSub.icon || '🏪');

        return `
            <a class="ux-mini"
               href="${esc(businessLink(business))}">
                <div class="ux-mini-logo">${logoHtml}</div>
                <div class="ux-mini-body">
                    <strong>${esc(business.name || 'Negocio')}</strong>
                    <span>${esc(currentSub.name)} · Destacado</span>
                    <small>★ — Sin reseñas</small>
                </div>
            </a>
        `;
    }).join('');
}

function renderAll() {
    renderBusinesses();
    renderFeatured();
}

function showLoadError(message) {
    $('businessGrid').innerHTML =
        `<div class="ux-empty">${esc(message)}</div>`;

    $('featuredList').innerHTML =
        `<div class="ux-note">No hay destacados para mostrar.</div>`;
}

async function boot() {
    const rootParameter = queryValue('categoria');
    const subParameter = queryValue('subcategoria');

    if (!rootParameter || !subParameter) {
        window.location.replace('../boulevard.html');
        return;
    }

    const [categoriesResult, businessesResult] = await Promise.all([
        supabase
            .from('categories')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true })
            .order('name', { ascending: true }),

        supabase
            .from('businesses')
            .select('*')
            .eq('is_active', true)
    ]);

    if (categoriesResult.error) {
        console.error(categoriesResult.error);
        showLoadError('No se pudieron cargar las categorías desde Supabase.');
        return;
    }

    if (businessesResult.error) {
        console.error(businessesResult.error);
        showLoadError('No se pudieron cargar los negocios desde Supabase.');
        return;
    }

    categories = categoriesResult.data || [];
    allBusinesses = (businessesResult.data || [])
        .filter(business => business.is_active !== false);

    currentRoot = resolveCategory(rootParameter, true);
    currentSub = resolveCategory(subParameter, false);

    if (
        !currentRoot ||
        !currentSub ||
        num(currentSub.parent_id) !== num(currentRoot.id)
    ) {
        showLoadError(
            'La categoría o subcategoría no existe, está inactiva ' +
            'o no corresponde a la relación indicada.'
        );
        return;
    }

    businessesHere = allBusinesses.filter(businessMatchesSub);

    document.title = `Urbanex - ${currentSub.name}`;

    document.documentElement.style.setProperty(
        '--page-bg',
        `url("${rootBackground()}")`
    );

    $('pageTitle').textContent =
        String(currentSub.name || 'Subcategoría').toUpperCase();

    $('searchInput').placeholder =
        `Buscar en ${currentSub.name}...`;

    $('panelTitle').textContent =
        `Negocios en ${currentSub.name}`;

    const categoryUrl =
        `index.html?categoria=${encodeURIComponent(currentRoot.id)}`;

    document.querySelector('.brand-box').href = categoryUrl;
    $('backLink').href = categoryUrl;
    $('backLink').textContent = `Volver a ${currentRoot.name}`;

    renderAll();
}

$('searchInput').addEventListener('input', event => {
    textFilter = event.target.value;
    $('panelSearch').value = event.target.value;
    renderBusinesses();
});

$('panelSearch').addEventListener('input', event => {
    textFilter = event.target.value;
    $('searchInput').value = event.target.value;
    renderBusinesses();
});

$('sortBusiness').addEventListener('change', renderBusinesses);

boot();
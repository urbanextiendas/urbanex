(function () {
    'use strict';

    const STORAGE_KEY = 'urbanex_location_selection_v1';
    const COMPAT_STORAGE_KEY = 'urbanex_location_v1';
    const LEGACY_PROVINCE_KEY = 'urbanex_active_province';
    const LEGACY_CITY_KEY = 'urbanex_active_location';

    const PROVINCES = {
        'Azuay': ['Cuenca','Camilo Ponce Enríquez','Chordeleg','El Pan','Girón','Guachapala','Gualaceo','Nabón','Oña','Paute','Pucará','San Fernando','Santa Isabel','Sevilla de Oro','Sígsig'],
        'Bolívar': ['Guaranda','Caluma','Chillanes','Chimbo','Echeandía','Las Naves','San Miguel'],
        'Cañar': ['Azogues','Biblián','Cañar','Déleg','El Tambo','La Troncal','Suscal'],
        'Carchi': ['Tulcán','Bolívar','Espejo','Mira','Montúfar','San Pedro de Huaca'],
        'Chimborazo': ['Riobamba','Alausí','Chambo','Chunchi','Colta','Cumandá','Guamote','Guano','Pallatanga','Penipe'],
        'Cotopaxi': ['Latacunga','La Maná','Pangua','Pujilí','Salcedo','Saquisilí','Sigchos'],
        'El Oro': ['Machala','Arenillas','Atahualpa','Balsas','Chilla','El Guabo','Huaquillas','Las Lajas','Marcabelí','Pasaje','Piñas','Portovelo','Santa Rosa','Zaruma'],
        'Esmeraldas': ['Esmeraldas','Atacames','Eloy Alfaro','Muisne','Quinindé','Rioverde','San Lorenzo'],
        'Galápagos': ['San Cristóbal','Isabela','Santa Cruz'],
        'Guayas': ['Guayaquil','Alfredo Baquerizo Moreno','Balao','Balzar','Colimes','Coronel Marcelino Maridueña','Daule','Durán','El Empalme','El Triunfo','General Antonio Elizalde','Isidro Ayora','Lomas de Sargentillo','Milagro','Naranjal','Naranjito','Nobol','Palestina','Pedro Carbo','Playas','Salitre','Samborondón','Santa Lucía','Simón Bolívar','Yaguachi'],
        'Imbabura': ['Ibarra','Antonio Ante','Cotacachi','Otavalo','Pimampiro','San Miguel de Urcuquí'],
        'Loja': ['Loja','Calvas','Catamayo','Celica','Chaguarpamba','Espíndola','Gonzanamá','Macará','Olmedo','Paltas','Pindal','Puyango','Quilanga','Saraguro','Sozoranga','Zapotillo'],
        'Los Ríos': ['Babahoyo','Baba','Buena Fe','Mocache','Montalvo','Palenque','Pueblo Viejo','Quevedo','Quinsaloma','Urdaneta','Valencia','Ventanas','Vinces'],
        'Manabí': ['Portoviejo','24 de Mayo','Bolívar','Chone','El Carmen','Flavio Alfaro','Jama','Jaramijó','Jipijapa','Junín','Manta','Montecristi','Olmedo','Paján','Pedernales','Pichincha','Puerto López','Rocafuerte','San Vicente','Santa Ana','Sucre','Tosagua'],
        'Morona Santiago': ['Morona','Gualaquiza','Huamboya','Limón Indanza','Logroño','Pablo Sexto','Palora','San Juan Bosco','Santiago','Sucúa','Taisha','Tiwintza'],
        'Napo': ['Tena','Archidona','Carlos Julio Arosemena Tola','El Chaco','Quijos'],
        'Orellana': ['Francisco de Orellana','Aguarico','La Joya de los Sachas','Loreto'],
        'Pastaza': ['Pastaza','Arajuno','Mera','Santa Clara'],
        'Pichincha': ['Quito','Cayambe','Mejía','Pedro Moncayo','Pedro Vicente Maldonado','Puerto Quito','Rumiñahui','San Miguel de los Bancos'],
        'Santa Elena': ['Santa Elena','La Libertad','Salinas'],
        'Santo Domingo de los Tsáchilas': ['Santo Domingo','La Concordia'],
        'Sucumbíos': ['Lago Agrio','Cascales','Cuyabeno','Gonzalo Pizarro','Putumayo','Shushufindi','Sucumbíos'],
        'Tungurahua': ['Ambato','Baños de Agua Santa','Cevallos','Mocha','Patate','Quero','San Pedro de Pelileo','Santiago de Píllaro','Tisaleo'],
        'Zamora Chinchipe': ['Zamora','Centinela del Cóndor','Chinchipe','El Pangui','Nangaritza','Palanda','Paquisha','Yacuambi','Yantzaza']
    };

    const ALIASES = {
        'macas': 'Morona Santiago',
        'nueva loja': 'Sucumbíos',
        'coca': 'Orellana',
        'puerto francisco de orellana': 'Orellana',
        'puyo': 'Pastaza',
        'quito distrito metropolitano': 'Pichincha',
        'santo domingo de los colorados': 'Santo Domingo de los Tsáchilas'
    };

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function normalize(value) {
        return String(value || '')
            .trim()
            .replace(/\s+/g, ' ')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase('es-EC');
    }

    const cityProvince = new Map();
    Object.entries(PROVINCES).forEach(([province, cities]) => {
        cities.forEach(city => cityProvince.set(normalize(city), province));
    });
    Object.entries(ALIASES).forEach(([city, province]) => cityProvince.set(normalize(city), province));

    function normalizeSelection(value) {
        const province = String(value?.province || '__all__');
        const city = String(value?.city || (province === '__all__' ? '__all__' : '__province__'));

        if (province === '__all__' || !Object.prototype.hasOwnProperty.call(PROVINCES, province)) {
            return { province: '__all__', city: '__all__' };
        }

        if (city === '__province__' || (PROVINCES[province] || []).includes(city)) {
            return { province, city };
        }

        return { province, city: '__province__' };
    }

    function readSelection() {
        try {
            const stored = JSON.parse(
                localStorage.getItem(STORAGE_KEY) ||
                localStorage.getItem(COMPAT_STORAGE_KEY) ||
                'null'
            );

            if (stored) return normalizeSelection(stored);

            return normalizeSelection({
                province: localStorage.getItem(LEGACY_PROVINCE_KEY) || '__all__',
                city: localStorage.getItem(LEGACY_CITY_KEY) || '__all__'
            });
        } catch (_) {
            return { province: '__all__', city: '__all__' };
        }
    }

    function writeSelection(selection) {
        const normalized = normalizeSelection(selection);
        const payload = { ...normalized, updatedAt: Date.now() };

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
            localStorage.setItem(COMPAT_STORAGE_KEY, JSON.stringify(payload));
            localStorage.setItem(LEGACY_PROVINCE_KEY, normalized.province);
            localStorage.setItem(LEGACY_CITY_KEY, normalized.city);
        } catch (error) {
            console.warn('Urbanex: no se pudo guardar la ubicación seleccionada.', error);
        }

        return normalized;
    }

    function labelFor(selection) {
        if (!selection || selection.province === '__all__') return 'Todo Ecuador';
        if (!selection.city || selection.city === '__province__') return selection.province;
        if (selection.city === selection.province) return `${selection.city}, Ecuador`;
        return `${selection.city}, ${selection.province}`;
    }

    function provinceForCity(city) {
        return cityProvince.get(normalize(city)) || '';
    }

    function matchesBusiness(business) {
        const selection = readSelection();
        if (selection.province === '__all__') return true;

        const city = String(business && business.city || '').trim();
        if (!city) return false;

        if (selection.city && selection.city !== '__province__') {
            return normalize(city) === normalize(selection.city);
        }

        return provinceForCity(city) === selection.province;
    }

    window.UrbanexLocation = Object.freeze({
        storageKey: STORAGE_KEY,
        compatibleStorageKeys: Object.freeze([STORAGE_KEY, COMPAT_STORAGE_KEY, LEGACY_PROVINCE_KEY, LEGACY_CITY_KEY]),
        provinces: PROVINCES,
        get: readSelection,
        label: function () { return labelFor(readSelection()); },
        matchesBusiness,
        provinceForCity
    });

    const desktopInstances = new Map();

    function closeDesktopLists(exceptSelect) {
        desktopInstances.forEach((instance, select) => {
            if (select === exceptSelect) return;
            instance.list.classList.remove('open');
            instance.button.setAttribute('aria-expanded', 'false');
        });
    }

    function syncDesktopSelect(select) {
        const instance = desktopInstances.get(select);
        if (!instance) return;

        const selectedOption = select.options[select.selectedIndex] || select.options[0];
        instance.value.textContent = selectedOption ? selectedOption.textContent : '';
        instance.button.disabled = select.disabled;
        instance.list.innerHTML = Array.from(select.options).map(option => {
            const selectedClass = option.value === select.value ? ' selected' : '';
            return `<button type="button" class="urbanex-desktop-select-option${selectedClass}" data-value="${escapeHtml(option.value)}">${escapeHtml(option.textContent)}</button>`;
        }).join('');

        instance.list.querySelectorAll('.urbanex-desktop-select-option').forEach(optionButton => {
            optionButton.addEventListener('click', event => {
                event.stopPropagation();
                select.value = optionButton.dataset.value || '';
                select.dispatchEvent(new Event('change', { bubbles: true }));
                syncDesktopSelect(select);
                closeDesktopLists();
            });
        });
    }

    function initDesktopSelect(select) {
        if (!select || desktopInstances.has(select)) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'urbanex-desktop-select';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'urbanex-desktop-select-button';
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-haspopup', 'listbox');
        button.setAttribute('aria-label', select.getAttribute('aria-label') || 'Seleccionar ubicación');

        const value = document.createElement('span');
        value.className = 'urbanex-desktop-select-value';

        const chevron = document.createElement('span');
        chevron.className = 'urbanex-desktop-select-chevron';
        chevron.setAttribute('aria-hidden', 'true');
        chevron.textContent = '⌄';

        const list = document.createElement('div');
        list.className = 'urbanex-desktop-select-list';
        list.setAttribute('role', 'listbox');

        button.append(value, chevron);
        wrapper.append(button, list);
        select.insertAdjacentElement('afterend', wrapper);
        desktopInstances.set(select, { button, value, list });

        button.addEventListener('click', event => {
            event.stopPropagation();
            if (button.disabled) return;
            const willOpen = !list.classList.contains('open');
            closeDesktopLists(select);
            list.classList.toggle('open', willOpen);
            button.setAttribute('aria-expanded', String(willOpen));
        });

        wrapper.addEventListener('click', event => event.stopPropagation());
        syncDesktopSelect(select);
    }

    function findHeader() {
        return document.querySelector('.header-top, .site-header, .ux-home-header, header.header');
    }

    function createHost(header) {
        const existingIndicator = header.querySelector('.location-indicator');
        const existingTools = header.querySelector('.user-tools');
        let tools = existingTools;

        if (existingIndicator) existingIndicator.remove();

        if (!tools) {
            tools = document.createElement('div');
            tools.className = 'urbanex-location-tools';

            const anchor = header.querySelector('.breadcrumb, .back-link, .site-nav, .ux-btn[href*="registro"], .header-links, .nav');
            if (anchor) header.insertBefore(tools, anchor);
            else header.appendChild(tools);
        } else {
            tools.classList.add('urbanex-location-tools');
        }

        const host = document.createElement('div');
        host.className = 'urbanex-global-location';
        tools.prepend(host);
        return host;
    }

    function initializePicker() {
        if (document.querySelector('.urbanex-global-location')) return;
        const header = findHeader();
        if (!header) return;

        const host = createHost(header);
        const current = readSelection();

        host.innerHTML = `
            <button class="urbanex-location-trigger" type="button" aria-expanded="false" aria-haspopup="dialog">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span class="urbanex-location-value">${escapeHtml(labelFor(current))}</span>
                <span class="urbanex-location-chevron" aria-hidden="true">⌄</span>
            </button>
            <div class="urbanex-location-panel" role="dialog" aria-label="Seleccionar lugar" hidden>
                <div class="urbanex-location-title">¿Dónde desea buscar?</div>
                <label class="urbanex-location-field">
                    <span>Provincia</span>
                    <select class="urbanex-province-select" aria-label="Seleccionar provincia"></select>
                </label>
                <label class="urbanex-location-field">
                    <span>Ciudad / cantón</span>
                    <select class="urbanex-city-select" aria-label="Seleccionar ciudad o cantón"></select>
                </label>
                <div class="urbanex-location-actions">
                    <button type="button" class="urbanex-location-cancel">Cancelar</button>
                    <button type="button" class="urbanex-location-apply">Buscar aquí</button>
                </div>
            </div>`;

        const trigger = host.querySelector('.urbanex-location-trigger');
        const value = host.querySelector('.urbanex-location-value');
        const panel = host.querySelector('.urbanex-location-panel');
        const provinceSelect = host.querySelector('.urbanex-province-select');
        const citySelect = host.querySelector('.urbanex-city-select');
        const cancelButton = host.querySelector('.urbanex-location-cancel');
        const applyButton = host.querySelector('.urbanex-location-apply');

        function populateProvinces(selection) {
            const provinces = Object.keys(PROVINCES).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
            provinceSelect.innerHTML = '<option value="__all__">Todo Ecuador</option>' + provinces
                .map(province => `<option value="${escapeHtml(province)}">${escapeHtml(province)}</option>`)
                .join('');
            provinceSelect.value = selection.province;
            syncDesktopSelect(provinceSelect);
        }

        function populateCities(province, selectedCity) {
            if (province === '__all__') {
                citySelect.innerHTML = '<option value="__all__">Todo Ecuador</option>';
                citySelect.value = '__all__';
                citySelect.disabled = true;
                syncDesktopSelect(citySelect);
                return;
            }

            citySelect.disabled = false;
            const cities = PROVINCES[province] || [];
            citySelect.innerHTML = `<option value="__province__">Toda la provincia de ${escapeHtml(province)}</option>` + cities
                .map(city => `<option value="${escapeHtml(city)}">${escapeHtml(city)}</option>`)
                .join('');

            citySelect.value = Array.from(citySelect.options).some(option => option.value === selectedCity)
                ? selectedCity
                : '__province__';
            syncDesktopSelect(citySelect);
        }

        function setOpen(open) {
            panel.hidden = !open;
            trigger.setAttribute('aria-expanded', String(open));
            if (!open) closeDesktopLists();
        }

        populateProvinces(current);
        populateCities(current.province, current.city);
        initDesktopSelect(provinceSelect);
        initDesktopSelect(citySelect);
        syncDesktopSelect(provinceSelect);
        syncDesktopSelect(citySelect);

        trigger.addEventListener('click', event => {
            event.stopPropagation();
            const willOpen = panel.hidden;
            if (willOpen) {
                const stored = readSelection();
                populateProvinces(stored);
                populateCities(stored.province, stored.city);
            }
            setOpen(willOpen);
        });

        provinceSelect.addEventListener('change', () => {
            const stored = readSelection();
            populateCities(provinceSelect.value, provinceSelect.value === stored.province ? stored.city : '__province__');
        });

        cancelButton.addEventListener('click', () => setOpen(false));

        applyButton.addEventListener('click', () => {
            const selection = provinceSelect.value === '__all__'
                ? { province: '__all__', city: '__all__' }
                : { province: provinceSelect.value, city: citySelect.value || '__province__' };

            const savedSelection = writeSelection(selection);
            value.textContent = labelFor(savedSelection);
            setOpen(false);
            window.dispatchEvent(new CustomEvent('urbanex-location-change', { detail: savedSelection }));
            window.dispatchEvent(new CustomEvent('urbanex:locationchange', { detail: savedSelection }));
            window.location.reload();
        });

        panel.addEventListener('click', event => event.stopPropagation());
        document.addEventListener('click', () => setOpen(false));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') setOpen(false);
        });
    }

    window.addEventListener('storage', event => {
        if (![STORAGE_KEY, COMPAT_STORAGE_KEY, LEGACY_PROVINCE_KEY, LEGACY_CITY_KEY].includes(event.key)) return;
        const value = document.querySelector('.urbanex-location-value');
        if (value) value.textContent = labelFor(readSelection());
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePicker, { once: true });
    } else {
        initializePicker();
    }
}());

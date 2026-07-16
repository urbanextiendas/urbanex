// ============================================================
// URBANEX — Service Worker PWA
// Estrategia: Network First con fallback a cache
// ============================================================

const CACHE_NAME    = 'urbanex-v12';
const CACHE_STATIC  = 'urbanex-static-v12';

// Archivos que se cachean al instalar (shell de la app)
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/boulevard.html',
    '/business/index.html',
    '/imagenes/Urba4.png',
    '/imagenes/Boulevard.png',
    '/manifest.json',
    // Fuentes Google (se cachean en runtime)
];

// Páginas que tienen fallback offline
const OFFLINE_PAGES = [
    '/boulevard.html',
    '/business/index.html',
];

// ── INSTALL: pre-cachear shell ────────────────────────────────
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_STATIC)
            .then(cache => cache.addAll(STATIC_ASSETS.filter(url => {
                // Ignorar errores en archivos opcionales
                return true;
            })))
            .then(() => self.skipWaiting())
            .catch(err => {
                console.warn('[SW] Install cache parcial:', err);
                return self.skipWaiting();
            })
    );
});

// ── ACTIVATE: limpiar caches viejos ──────────────────────────
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(k => k !== CACHE_NAME && k !== CACHE_STATIC)
                    .map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// ── FETCH: estrategia según tipo de recurso ───────────────────
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Ignorar requests que no son GET
    if (request.method !== 'GET') return;

    // El formulario de registro siempre debe solicitar la versión más reciente.
    if (
        url.origin === self.location.origin &&
        (url.pathname === '/registro.html' || url.pathname === '/registro-v12.html')
    ) {
        event.respondWith(networkFresh(request));
        return;
    }


    // Ignorar Supabase y CDNs externos (siempre red)
    if (
        url.hostname.includes('supabase.co') ||
        url.hostname.includes('supabase.io') ||
        url.hostname.includes('esm.sh') ||
        url.hostname.includes('maps.google') ||
        url.hostname.includes('fonts.googleapis') && !url.pathname.includes('css')
    ) return;

    // Fuentes de Google: Cache First (no cambian)
    if (
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com')
    ) {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Imágenes locales: Cache First
    if (request.destination === 'image') {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Páginas HTML: Network First con fallback offline
    if (request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
        event.respondWith(networkFirstWithOfflineFallback(request));
        return;
    }

    // JS, CSS, otros: Network First
    event.respondWith(networkFirst(request));
});

// ── Estrategias ───────────────────────────────

// Network Fresh: evita entregar una versión anterior del formulario.
async function networkFresh(request) {
    try {
        return await fetch(request, { cache: 'no-store' });
    } catch {
        const cached = await caches.match(request);
        return cached || new Response('', { status: 408 });
    }
}

// Cache First: devuelve cache, si no existe va a red y guarda
async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        return new Response('', { status: 408 });
    }
}

// Network First: intenta red, si falla devuelve cache
async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        const cached = await caches.match(request);
        return cached || new Response('', { status: 408 });
    }
}

// Network First para HTML con página offline de fallback
async function networkFirstWithOfflineFallback(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        // Intentar cache exacto
        const cached = await caches.match(request);
        if (cached) return cached;

        // Fallback: si pide una página de negocio, devolver la shell
        const url = new URL(request.url);
        if (url.pathname.startsWith('/business')) {
            const shell = await caches.match('/business/index.html');
            if (shell) return shell;
        }

        // Fallback final: boulevard
        const boulevard = await caches.match('/boulevard.html');
        if (boulevard) return boulevard;

        // Sin caché: página offline inline
        return new Response(offlinePage(), {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
    }
}

// Página offline mínima
function offlinePage() {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Urbanex — Sin conexión</title>
    <style>
        body { margin:0; background:#020202; color:#fff; font-family:'Montserrat',sans-serif;
               display:flex; flex-direction:column; align-items:center; justify-content:center;
               min-height:100vh; text-align:center; padding:24px; }
        h1 { font-size:22px; color:#e5c158; margin-bottom:12px; }
        p  { font-size:14px; color:#888; margin-bottom:28px; line-height:1.6; }
        a  { display:inline-block; background:#e5c158; color:#000; padding:12px 28px;
             border-radius:8px; font-weight:700; font-size:13px; text-decoration:none; }
        svg { width:64px; height:64px; fill:#e5c158; opacity:.4; margin-bottom:20px; }
    </style>
</head>
<body>
    <svg viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
    <h1>Sin conexión</h1>
    <p>No hay conexión a internet.<br>Algunas páginas visitadas antes<br>pueden estar disponibles.</p>
    <a href="/boulevard.html">Ir al Boulevard</a>
</body>
</html>`;
}

(() => {
const ECUADOR_PROVINCE_CANTONS = {
    "Azuay": [
        "Cuenca",
        "Camilo Ponce Enríquez",
        "Chordeleg",
        "El Pan",
        "Girón",
        "Guachapala",
        "Gualaceo",
        "Nabón",
        "Oña",
        "Paute",
        "Pucará",
        "San Fernando",
        "Santa Isabel",
        "Sevilla de Oro",
        "Sígsig"
    ],
    "Bolívar": [
        "Guaranda",
        "Caluma",
        "Chillanes",
        "Chimbo",
        "Echeandía",
        "Las Naves",
        "San Miguel"
    ],
    "Cañar": [
        "Azogues",
        "Biblián",
        "Cañar",
        "Déleg",
        "El Tambo",
        "La Troncal",
        "Suscal"
    ],
    "Carchi": [
        "Tulcán",
        "Bolívar",
        "Espejo",
        "Mira",
        "Montúfar",
        "San Pedro de Huaca"
    ],
    "Chimborazo": [
        "Riobamba",
        "Alausí",
        "Chambo",
        "Chunchi",
        "Colta",
        "Cumandá",
        "Guamote",
        "Guano",
        "Pallatanga",
        "Penipe"
    ],
    "Cotopaxi": [
        "Latacunga",
        "La Maná",
        "Pangua",
        "Pujilí",
        "Salcedo",
        "Saquisilí",
        "Sigchos"
    ],
    "El Oro": [
        "Machala",
        "Arenillas",
        "Atahualpa",
        "Balsas",
        "Chilla",
        "El Guabo",
        "Huaquillas",
        "Las Lajas",
        "Marcabelí",
        "Pasaje",
        "Piñas",
        "Portovelo",
        "Santa Rosa",
        "Zaruma"
    ],
    "Esmeraldas": [
        "Esmeraldas",
        "Atacames",
        "Eloy Alfaro",
        "Muisne",
        "Quinindé",
        "Rioverde",
        "San Lorenzo"
    ],
    "Galápagos": [
        "San Cristóbal",
        "Isabela",
        "Santa Cruz"
    ],
    "Guayas": [
        "Guayaquil",
        "Alfredo Baquerizo Moreno",
        "Balao",
        "Balzar",
        "Colimes",
        "Coronel Marcelino Maridueña",
        "Daule",
        "Durán",
        "El Empalme",
        "El Triunfo",
        "General Antonio Elizalde",
        "Isidro Ayora",
        "Lomas de Sargentillo",
        "Milagro",
        "Naranjal",
        "Naranjito",
        "Nobol",
        "Palestina",
        "Pedro Carbo",
        "Playas",
        "Salitre",
        "Samborondón",
        "Santa Lucía",
        "Simón Bolívar",
        "Yaguachi"
    ],
    "Imbabura": [
        "Ibarra",
        "Antonio Ante",
        "Cotacachi",
        "Otavalo",
        "Pimampiro",
        "San Miguel de Urcuquí"
    ],
    "Loja": [
        "Loja",
        "Calvas",
        "Catamayo",
        "Celica",
        "Chaguarpamba",
        "Espíndola",
        "Gonzanamá",
        "Macará",
        "Olmedo",
        "Paltas",
        "Pindal",
        "Puyango",
        "Quilanga",
        "Saraguro",
        "Sozoranga",
        "Zapotillo"
    ],
    "Los Ríos": [
        "Babahoyo",
        "Baba",
        "Buena Fe",
        "Mocache",
        "Montalvo",
        "Palenque",
        "Pueblo Viejo",
        "Quevedo",
        "Quinsaloma",
        "Urdaneta",
        "Valencia",
        "Ventanas",
        "Vinces"
    ],
    "Manabí": [
        "Portoviejo",
        "24 de Mayo",
        "Bolívar",
        "Chone",
        "El Carmen",
        "Flavio Alfaro",
        "Jama",
        "Jaramijó",
        "Jipijapa",
        "Junín",
        "Manta",
        "Montecristi",
        "Olmedo",
        "Paján",
        "Pedernales",
        "Pichincha",
        "Puerto López",
        "Rocafuerte",
        "San Vicente",
        "Santa Ana",
        "Sucre",
        "Tosagua"
    ],
    "Morona Santiago": [
        "Morona",
        "Gualaquiza",
        "Huamboya",
        "Limón Indanza",
        "Logroño",
        "Pablo Sexto",
        "Palora",
        "San Juan Bosco",
        "Santiago",
        "Sucúa",
        "Taisha",
        "Tiwintza"
    ],
    "Napo": [
        "Tena",
        "Archidona",
        "Carlos Julio Arosemena Tola",
        "El Chaco",
        "Quijos"
    ],
    "Orellana": [
        "Francisco de Orellana",
        "Aguarico",
        "La Joya de los Sachas",
        "Loreto"
    ],
    "Pastaza": [
        "Pastaza",
        "Arajuno",
        "Mera",
        "Santa Clara"
    ],
    "Pichincha": [
        "Quito",
        "Cayambe",
        "Mejía",
        "Pedro Moncayo",
        "Pedro Vicente Maldonado",
        "Puerto Quito",
        "Rumiñahui",
        "San Miguel de los Bancos"
    ],
    "Santa Elena": [
        "Santa Elena",
        "La Libertad",
        "Salinas"
    ],
    "Santo Domingo de los Tsáchilas": [
        "Santo Domingo",
        "La Concordia"
    ],
    "Sucumbíos": [
        "Lago Agrio",
        "Cascales",
        "Cuyabeno",
        "Gonzalo Pizarro",
        "Putumayo",
        "Shushufindi",
        "Sucumbíos"
    ],
    "Tungurahua": [
        "Ambato",
        "Baños de Agua Santa",
        "Cevallos",
        "Mocha",
        "Patate",
        "Quero",
        "San Pedro de Pelileo",
        "Santiago de Píllaro",
        "Tisaleo"
    ],
    "Zamora Chinchipe": [
        "Zamora",
        "Centinela del Cóndor",
        "Chinchipe",
        "El Pangui",
        "Nangaritza",
        "Palanda",
        "Paquisha",
        "Yacuambi",
        "Yantzaza"
    ]
};

const all = '__all__';
const provinceOnly = '__province__';
const key = value => String(value ?? '').trim().normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[\s-]+/g, ' ');
const provinceKey = value => key(value) === 'zamora' ? 'zamora chinchipe' : key(value);
const aliases = new Map([['macas','morona'],['nueva loja','lago agrio'],['coca','orellana'],['puerto francisco de orellana','orellana'],['puyo','pastaza'],['quito distrito metropolitano','quito'],['santo domingo de los colorados','santo domingo']]);
const cantonKey = value => aliases.get(key(value)) || key(value);
const cantonKeysByProvince = new Map(Object.entries(ECUADOR_PROVINCE_CANTONS).map(([province, cantons]) => [provinceKey(province), new Set(cantons.map(cantonKey))]));
function read() {
    try {
        const saved = JSON.parse(localStorage.getItem('urbanex_location_selection_v1') || localStorage.getItem('urbanex_location_v1') || 'null');
        return {
            province: saved?.province || localStorage.getItem('urbanex_active_province') || all,
            city: saved?.city || localStorage.getItem('urbanex_active_location') || provinceOnly
        };
    } catch { return { province: all, city: all }; }
}
function matches(business, selection = read()) {
    if (!business) return false;
    if (!selection.province || selection.province === all) return true;
    const province = provinceKey(selection.province);
    const storedProvince = provinceKey(business.province || business.provincia);
    const city = cantonKey(business.canton || business['cantón'] || business.city || business.ciudad);
    if (storedProvince && storedProvince !== province) return false;
    if (selection.city && ![all, provinceOnly].includes(selection.city)) return city === cantonKey(selection.city);
    return Boolean(storedProvince || (city && cantonKeysByProvince.get(province)?.has(city)));
}
const addressConnectors = new Set(['a', 'al', 'con', 'de', 'del', 'e', 'el', 'en', 'entre', 'la', 'las', 'los', 'o', 'y']);
function formatAddress(value) {
    const address = String(value ?? '').trim().replace(/\s+/g, ' ')
        .replace(/(^|\s)e\/\s*/gi, '$1entre ').replace(/\bs\s*\/\s*n\b/gi, 's/n');
    return address.replace(/s\/n|[\p{L}\p{N}]+/gu, (token, offset) => {
        if (token === 's/n' || /\p{N}/u.test(token)) return token;
        const word = token.toLocaleLowerCase('es-EC');
        if (word === 'km') return 'km';
        if (offset && addressConnectors.has(word)) return word;
        return word.charAt(0).toLocaleUpperCase('es-EC') + word.slice(1);
    });
}
window.urbanexLocation = { matches, read, formatAddress };
})();

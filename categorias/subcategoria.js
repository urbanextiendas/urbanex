<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Urbanex - Subcategoría</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Montserrat:wght@400;500;700;800;900&display=swap" rel="stylesheet">
<style>
/* URBANEX REAL SUBCATEGORY PAGE FIX 2026-07-08 */

:root{--gold:#e5c158;--gold2:#f4d675;--line:rgba(229,193,88,.24);--muted:#b9b9b9}
*{box-sizing:border-box}html,body{margin:0;height:100%;background:#000;color:#fff;font-family:Montserrat,Arial,sans-serif;overflow:hidden}a{text-decoration:none;color:inherit}button,input,select{font-family:inherit}
.ux-header{position:fixed;left:0;right:0;top:0;height:58px;z-index:50;display:grid;grid-template-columns:240px 1fr 330px;align-items:center;gap:14px;padding:0 18px;background:linear-gradient(90deg,#050505,rgba(10,8,6,.97),#050505);border-bottom:1px solid var(--line)}
.ux-brand img{height:50px;display:block}.ux-search{position:relative;max-width:440px;width:100%;justify-self:center}.ux-search input{width:100%;height:34px;border-radius:999px;border:1px solid rgba(255,255,255,.13);background:rgba(0,0,0,.55);color:#fff;text-align:center;padding:0 42px 0 18px;outline:none;font-size:12px}.ux-search span{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:var(--gold)}
.ux-tools{display:flex;align-items:center;justify-content:flex-end;gap:14px;font-size:12px;font-weight:800}.ux-tools .pin{color:var(--gold)}.ux-round{width:32px;height:32px;display:grid;place-items:center;border:1px solid var(--gold);border-radius:50%;color:var(--gold);background:rgba(0,0,0,.36)}
.ux-footer{position:fixed;left:0;right:0;bottom:0;height:24px;z-index:60;display:grid;place-items:center;background:#000;border-top:1px solid #1b1b1b;color:#8d8d8d;font-size:11px}
.ux-app{position:fixed;left:0;right:0;top:58px;bottom:24px;display:grid;grid-template-columns:240px minmax(0,1fr) 292px;min-height:0;background:#000}
.ux-left{min-height:0;overflow-y:auto;padding:17px 12px;background:linear-gradient(180deg,rgba(10,7,4,.92),rgba(0,0,0,.92));border-right:1px solid var(--line)}.ux-label{margin:0 0 15px 6px;color:var(--gold);font-size:10px;font-weight:900;letter-spacing:2.4px;text-transform:uppercase}.ux-subnav{display:grid;gap:7px}.ux-subitem{min-height:52px;display:flex;align-items:center;gap:11px;padding:8px 10px;border:1px solid rgba(229,193,88,.22);border-radius:12px;background:rgba(6,6,6,.68);transition:.18s ease}.ux-subitem:hover{border-color:var(--gold);background:rgba(229,193,88,.10);transform:translateX(2px)}.ux-subitem.active{border-color:var(--gold);background:linear-gradient(90deg,rgba(229,193,88,.28),rgba(12,8,0,.72))}.ux-ico{width:32px;height:32px;display:grid;place-items:center;flex:0 0 32px;border-radius:11px;background:rgba(255,255,255,.08);font-size:16px}.active .ux-ico{background:var(--gold);color:#111}.ux-subtxt{min-width:0}.ux-subtxt strong{display:block;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ux-subtxt span{display:block;margin-top:2px;color:var(--muted);font-size:10px}.ux-subitem.active strong{color:var(--gold2)}
.ux-main{position:relative;min-width:0;min-height:0;overflow:hidden;background:#050505}.ux-main::before{content:"";position:absolute;inset:0;background-image:linear-gradient(180deg,rgba(0,0,0,.22),rgba(0,0,0,.66)),var(--page-bg);background-size:cover;background-position:center;background-repeat:no-repeat;z-index:0}.ux-main::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 16%,rgba(229,193,88,.16),transparent 24%),linear-gradient(90deg,rgba(0,0,0,.40),transparent 35%,rgba(0,0,0,.40));z-index:1;pointer-events:none}.ux-main-inner{position:relative;z-index:2;height:100%;padding:38px 34px 26px;display:grid;grid-template-rows:auto minmax(0,1fr);gap:18px}.ux-hero{text-align:center}.ux-hero h1{margin:0;font-family:Cinzel,Georgia,serif;font-size:clamp(32px,4vw,56px);letter-spacing:11px;line-height:1;color:#fff;text-shadow:0 7px 26px #000}.ux-hero p{margin:12px auto 0;color:var(--gold);font-size:11px;font-weight:900;letter-spacing:2.5px;text-transform:uppercase}.ux-pill{margin:17px auto 0;width:max-content;max-width:95%;display:inline-flex;align-items:center;gap:9px;padding:8px 18px;border:1px solid var(--gold);border-radius:999px;background:rgba(0,0,0,.62);font-size:13px;font-weight:900;color:var(--gold2)}
.ux-business-panel{min-height:0;align-self:end;width:min(980px,96%);margin:0 auto;padding:16px;border:1px solid rgba(229,193,88,.28);border-radius:20px;background:rgba(3,3,3,.72);backdrop-filter:blur(16px);box-shadow:0 24px 70px rgba(0,0,0,.75)}.ux-panel-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;padding:2px 4px 12px;border-bottom:1px solid rgba(229,193,88,.14)}.ux-panel-head h2{margin:0;font-family:Cinzel,Georgia,serif;color:var(--gold);font-size:19px;letter-spacing:2px;text-transform:uppercase}.ux-panel-head p{margin:4px 0 0;color:var(--muted);font-size:11px}.ux-panel-actions{display:flex;gap:8px;align-items:center}.ux-panel-actions input,.ux-panel-actions select{height:34px;border:1px solid rgba(255,255,255,.13);border-radius:10px;background:rgba(0,0,0,.65);color:#fff;padding:0 11px;font-size:11px;outline:none}.ux-grid{margin-top:13px;max-height:calc(100vh - 280px);overflow-y:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px;padding-right:4px}.ux-card{display:grid;grid-template-columns:74px 1fr;min-height:104px;overflow:hidden;border:1px solid rgba(255,255,255,.10);border-radius:14px;background:linear-gradient(135deg,rgba(18,18,18,.92),rgba(6,6,6,.88));transition:.18s ease}.ux-card:hover{transform:translateY(-3px);border-color:rgba(229,193,88,.54);background:rgba(229,193,88,.10)}.ux-logo{width:74px;height:104px;display:grid;place-items:center;background:linear-gradient(135deg,rgba(229,193,88,.18),rgba(0,0,0,.65));color:var(--gold);font-size:24px;font-weight:900;overflow:hidden}.ux-logo img{width:100%;height:100%;object-fit:cover}.ux-card-body{min-width:0;padding:11px 12px;display:flex;flex-direction:column;justify-content:center}.ux-card-body h3{margin:0;color:#fff;font-size:14px;line-height:1.25}.ux-card-body .tag{margin-top:5px;color:var(--gold);font-size:10px;font-weight:800}.ux-card-body .addr{margin-top:6px;color:#bcbcbc;font-size:10px;line-height:1.35}.ux-card-bottom{margin-top:9px;display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px}.ux-badge{color:#000;background:var(--gold);border-radius:999px;padding:3px 8px;font-weight:900}.ux-featured{color:var(--gold);font-weight:900}.ux-empty{grid-column:1/-1;min-height:160px;display:grid;place-items:center;text-align:center;border:1px dashed rgba(229,193,88,.32);border-radius:15px;background:rgba(0,0,0,.46);color:#d0d0d0;padding:24px;font-size:13px;line-height:1.5}
.ux-right{min-height:0;display:flex;flex-direction:column;background:linear-gradient(180deg,rgba(10,7,4,.92),rgba(0,0,0,.94));border-left:1px solid var(--line);overflow:hidden}.ux-right-head{padding:21px 14px 10px}.ux-right-head h2{margin:0;font-family:Cinzel,Georgia,serif;color:var(--gold);font-size:16px;letter-spacing:1.5px;text-transform:uppercase}.ux-right-head p{margin:4px 0 0;font-size:11px;color:#fff}.ux-sort{padding:0 14px 12px}.ux-sort select{width:100%;height:36px;border:1px solid rgba(255,255,255,.13);border-radius:8px;background:#080808;color:#fff;padding:0 9px;font-size:11px}.ux-featured-list{min-height:0;flex:1;overflow-y:auto;padding:10px 14px;display:flex;flex-direction:column;gap:8px}.ux-mini{display:grid;grid-template-columns:58px 1fr;min-height:64px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:rgba(16,16,16,.74)}.ux-mini-logo{width:58px;height:64px;display:grid;place-items:center;background:#101010;color:var(--gold);overflow:hidden}.ux-mini-logo img{width:100%;height:100%;object-fit:cover}.ux-mini-body{min-width:0;padding:8px 9px;display:flex;flex-direction:column;justify-content:center}.ux-mini-body strong{font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ux-mini-body span{margin-top:3px;color:var(--gold);font-size:9px}.ux-mini-body small{margin-top:3px;color:#aaa;font-size:9px}.ux-back{margin:12px 14px 10px;height:36px;border-radius:8px;background:var(--gold);color:#111;display:grid;place-items:center;font-size:12px;font-weight:900}.ux-note{padding:16px;border:1px dashed rgba(229,193,88,.25);border-radius:12px;color:#cfcfcf;text-align:center;font-size:12px;line-height:1.45}
@media(max-width:900px){.ux-header{height:104px;grid-template-columns:1fr auto;grid-template-rows:52px 38px;grid-template-areas:"brand tools" "search search";padding:7px 12px}.ux-brand{grid-area:brand}.ux-brand img{height:48px}.ux-search{grid-area:search;max-width:none}.ux-tools{grid-area:tools}.ux-tools .loc-text,.ux-tools .heart{display:none}.ux-app{top:104px;bottom:24px;grid-template-columns:1fr;grid-template-rows:58px minmax(0,1fr);overflow:hidden}.ux-left{height:58px;overflow-x:auto;overflow-y:hidden;border-right:none;border-bottom:1px solid var(--line);padding:8px 10px}.ux-label{display:none}.ux-subnav{display:flex;gap:8px}.ux-subitem{min-width:148px;height:42px;min-height:42px;padding:6px 9px}.ux-ico{width:28px;height:28px;flex-basis:28px}.ux-subtxt strong{font-size:11px}.ux-subtxt span{font-size:9px}.ux-main-inner{padding:18px 12px 16px;gap:12px;overflow-y:auto}.ux-hero h1{font-size:24px;letter-spacing:5px}.ux-hero p{font-size:8.5px;letter-spacing:1.4px}.ux-pill{margin-top:10px;padding:6px 13px;font-size:11px}.ux-business-panel{width:100%;align-self:start;padding:12px;border-radius:16px}.ux-panel-head{align-items:flex-start;flex-direction:column}.ux-panel-actions{width:100%;display:grid;grid-template-columns:1fr}.ux-grid{max-height:none;grid-template-columns:1fr;overflow:visible}.ux-right{display:none}.ux-footer{font-size:10px}.ux-card{grid-template-columns:70px 1fr}.ux-logo{width:70px}}


/* === URBANEX PATCH MINIMO: LOGO INSTALACION CLARO === */
[id*="install" i] img,
[class*="install" i] img,
[id*="pwa" i] img,
[class*="pwa" i] img {
  object-fit: contain !important;
  background: #000 !important;
  border-radius: 10px !important;
}
/* === FIN URBANEX PATCH MINIMO === */



/* === URBANEX HEADER Y PIE COMO CATEGORIAS === */
.header-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    z-index: 9999;
    background: rgba(6, 6, 6, 0.96);
    border-bottom: 1px solid var(--line);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.brand-box {
    display: flex;
    align-items: center;
    min-width: 170px;
}
.brand-box img {
    height: 60px;
    width: auto;
    display: block;
    filter: drop-shadow(0 8px 18px rgba(0,0,0,.72));
}
.search-wrapper {
    flex: 1;
    max-width: 430px;
    margin: 0 20px;
    position: relative;
}
.search-input {
    width: 100%;
    height: 36px;
    background: rgba(0, 0, 0, 0.48);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 20px;
    padding: 8px 40px 8px 16px;
    color: #fff;
    font-size: 12px;
    outline: none;
    text-align: center;
}
.search-input:focus {
    border-color: var(--gold);
    background: rgba(0, 0, 0, 0.64);
}
.search-icon {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    fill: var(--gold);
}
.user-tools {
    display: flex;
    align-items: center;
    gap: 24px;
}
.location-indicator {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
}
.location-indicator svg,
.tool-icon svg {
    width: 18px;
    height: 18px;
    fill: var(--gold);
}
.profile-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-avatar svg {
    width: 13px;
    height: 13px;
    fill: var(--gold);
}
.pie-pagina {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 24px;
    z-index: 9999;
    background: #000;
    color: #8c8c8c;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #1a1a1a;
    font-family: Arial, Helvetica, sans-serif;
}
.pie-pagina p {
    margin: 0;
}
.ux-app {
    top: 60px !important;
    bottom: 24px !important;
}
@media(max-width:900px) {
    .header-top {
        height: 112px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 58px 38px;
        gap: 8px;
        padding: 8px 12px 10px;
    }
    .brand-box {
        width: 100%;
        min-width: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .brand-box img {
        height: 56px;
        margin: 0 auto;
    }
    .search-wrapper {
        width: 100%;
        max-width: none;
        margin: 0;
    }
    .search-input {
        height: 38px;
        font-size: 12px;
    }
    .user-tools {
        display: none;
    }
    .ux-app {
        top: 112px !important;
    }
}
/* === FIN URBANEX HEADER Y PIE COMO CATEGORIAS === */


/* === URBANEX PATCH: SUBCATEGORIA SIN BARRA DE SUBCATEGORIAS === */
.ux-left {
    display: none !important;
}
.ux-app {
    grid-template-columns: minmax(0, 1fr) 292px !important;
}
@media(max-width:900px) {
    .ux-app {
        grid-template-columns: 1fr !important;
        grid-template-rows: minmax(0, 1fr) !important;
    }
}
/* === FIN URBANEX PATCH: SUBCATEGORIA SIN BARRA DE SUBCATEGORIAS === */


/* === URBANEX AJUSTE FINAL SUBCATEGORIA === */
.ux-panel-head {
    padding-bottom: 18px !important;
}
.ux-panel-actions {
    margin-bottom: 4px !important;
}
@media(max-width:900px) {
    .ux-panel-head {
        padding-bottom: 16px !important;
    }
    .ux-panel-actions {
        margin-bottom: 2px !important;
    }
}
/* === FIN URBANEX AJUSTE FINAL SUBCATEGORIA === */


/* === URBANEX AJUSTE: SEPARAR BUSCADOR DE LINEA INFERIOR === */
@media(max-width:900px) {
    .header-top {
        height: 124px !important;
        min-height: 124px !important;
        padding: 8px 12px 18px 12px !important;
    }

    .ux-app {
        top: 124px !important;
    }
}
/* === FIN URBANEX AJUSTE: SEPARAR BUSCADOR DE LINEA INFERIOR === */


/* === URBANEX PATCH: PERMITIR ACTUALIZAR AL BAJAR EN CELULAR === */
@media(max-width:900px) {
    html {
        height: auto !important;
        min-height: 100% !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        overscroll-behavior-y: auto !important;
    }

    body {
        height: auto !important;
        min-height: calc(100svh + 2px) !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        overscroll-behavior-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
    }

    .ux-main-inner {
        overscroll-behavior-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
    }
}
/* === FIN URBANEX PATCH: PERMITIR ACTUALIZAR AL BAJAR EN CELULAR === */

</style>

<style id="urbanex-marketplace-redesign">
:root{
  --market-bg:#f4f5f7;
  --market-surface:#ffffff;
  --market-text:#171717;
  --market-muted:#6b7280;
  --market-line:#e4e6eb;
  --market-gold:#e5c158;
  --market-gold-deep:#9a7415;
  --market-black:#080808;
  --market-green:#178a45;
  --market-shadow:0 10px 30px rgba(15,23,42,.08);
}
html{background:var(--market-bg);}
body{
  background:var(--market-bg)!important;
  color:var(--market-text)!important;
  min-height:100vh;
}
.header-top{
  height:76px!important;
  padding:0 28px!important;
  background:rgba(7,7,7,.97)!important;
  border-bottom:1px solid rgba(229,193,88,.32)!important;
  box-shadow:0 6px 24px rgba(0,0,0,.18);
  position:sticky!important;
  top:0;
  z-index:100;
}
.brand-box img{height:60px!important;width:auto!important;}
.search-wrapper{max-width:640px!important;margin:0 28px!important;}
.search-input{
  height:44px!important;
  border-radius:999px!important;
  border:1px solid rgba(255,255,255,.18)!important;
  background:#1b1b1b!important;
  color:#fff!important;
  padding:0 48px 0 20px!important;
  font-size:13px!important;
  text-align:left!important;
}
.search-input:focus{
  border-color:var(--market-gold)!important;
  box-shadow:0 0 0 4px rgba(229,193,88,.14)!important;
}
.search-icon{right:18px!important;fill:var(--market-gold)!important;}
.location-indicator,.tool-icon,.profile-avatar{color:#fff!important;}
.ux-app{
  min-height:calc(100vh - 104px)!important;
  display:grid!important;
  grid-template-columns:245px minmax(0,1fr) 285px!important;
  background:var(--market-bg)!important;
}
.ux-left,.ux-right{
  background:var(--market-surface)!important;
  color:var(--market-text)!important;
  border-color:var(--market-line)!important;
}
.ux-left{
  padding:28px 18px!important;
  position:sticky;
  top:76px;
  height:calc(100vh - 104px);
  overflow:auto;
}
.ux-label,.ux-right-head h2{
  color:var(--market-text)!important;
  font-size:18px!important;
  letter-spacing:0!important;
  text-transform:none!important;
  font-family:Montserrat,Arial,sans-serif!important;
  font-weight:800!important;
}
.ux-subnav{gap:8px!important;}
.ux-subnav a,.ux-subnav button{
  min-height:44px!important;
  padding:10px 13px!important;
  border:1px solid transparent!important;
  border-radius:12px!important;
  background:#f5f6f7!important;
  color:#303030!important;
  font-size:12px!important;
  font-weight:650!important;
  transition:.2s ease!important;
}
.ux-subnav a:hover,.ux-subnav button:hover,
.ux-subnav .active,.ux-subnav [aria-current="page"]{
  background:linear-gradient(135deg,#f1d779,var(--market-gold))!important;
  color:#111!important;
  border-color:#d5ae37!important;
  transform:translateX(2px);
}
.ux-main{
  background:var(--market-bg)!important;
  min-width:0;
  overflow:visible!important;
}
.ux-main-inner{padding:28px!important;max-width:1500px;margin:0 auto;}
.ux-hero{
  min-height:152px!important;
  border-radius:22px!important;
  overflow:hidden!important;
  margin-bottom:20px!important;
  position:relative!important;
  border:1px solid rgba(229,193,88,.32)!important;
  box-shadow:var(--market-shadow)!important;
}
.ux-hero:after{
  content:"Descubra negocios, productos y servicios cerca de usted";
  position:absolute;
  left:30px;
  bottom:22px;
  color:rgba(255,255,255,.9);
  font:500 13px/1.4 Montserrat,Arial,sans-serif;
  letter-spacing:.2px;
}
.ux-hero h1{
  font-size:clamp(32px,5vw,64px)!important;
  letter-spacing:5px!important;
  text-shadow:0 4px 18px rgba(0,0,0,.55)!important;
  transform:translateY(-12px);
}
.ux-business-panel{
  background:transparent!important;
  border:0!important;
  box-shadow:none!important;
  padding:0!important;
}
.ux-panel-head{
  padding:0 0 18px!important;
  border-bottom:1px solid var(--market-line)!important;
  align-items:flex-end!important;
}
.ux-panel-head h2{
  color:var(--market-text)!important;
  font:800 clamp(22px,3vw,30px)/1.2 Montserrat,Arial,sans-serif!important;
  letter-spacing:-.5px!important;
  text-transform:none!important;
}
.ux-panel-head p{color:var(--market-muted)!important;margin-top:5px!important;}
.ux-panel-actions{gap:10px!important;}
.ux-panel-actions input,.ux-panel-actions select,.ux-sort select{
  height:42px!important;
  background:#fff!important;
  color:#222!important;
  border:1px solid #d8dbe0!important;
  border-radius:12px!important;
  padding:0 14px!important;
  outline:none!important;
}
.ux-panel-actions input:focus,.ux-panel-actions select:focus,.ux-sort select:focus{
  border-color:var(--market-gold-deep)!important;
  box-shadow:0 0 0 3px rgba(229,193,88,.2)!important;
}
.ux-grid{
  display:grid!important;
  grid-template-columns:repeat(3,minmax(210px,1fr))!important;
  gap:18px!important;
  padding:20px 0 8px!important;
}
.ux-card{
  display:flex!important;
  flex-direction:column!important;
  min-height:360px!important;
  border:1px solid var(--market-line)!important;
  border-radius:18px!important;
  background:var(--market-surface)!important;
  color:var(--market-text)!important;
  overflow:hidden!important;
  box-shadow:0 4px 14px rgba(15,23,42,.06)!important;
  transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease!important;
  text-decoration:none!important;
}
.ux-card:hover{
  transform:translateY(-5px)!important;
  border-color:rgba(154,116,21,.55)!important;
  box-shadow:0 16px 34px rgba(15,23,42,.13)!important;
}
.ux-card-media{
  position:relative;
  width:100%;
  aspect-ratio:16/10;
  overflow:hidden;
  background:linear-gradient(135deg,#191919,#303030);
}
.ux-card-cover{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s ease;}
.ux-card:hover .ux-card-cover{transform:scale(1.035);}
.ux-card-cover-placeholder{
  width:100%;height:100%;display:grid;place-items:center;
  color:var(--market-gold);font-size:52px;
  background:radial-gradient(circle at 30% 20%,rgba(229,193,88,.18),transparent 36%),#171717;
}
.ux-card-logo{
  position:absolute;
  left:16px;
  bottom:-26px;
  width:58px;
  height:58px;
  display:grid;
  place-items:center;
  border-radius:50%;
  overflow:hidden;
  background:#fff;
  color:#111;
  border:3px solid #fff;
  box-shadow:0 5px 16px rgba(0,0,0,.25);
  font-size:24px;
}
.ux-card-logo img{width:100%;height:100%;object-fit:contain;display:block;}
.ux-card-featured{
  position:absolute;right:12px;top:12px;
  padding:6px 10px;border-radius:999px;
  background:rgba(7,7,7,.86);color:#f6d56c;
  border:1px solid rgba(229,193,88,.55);
  font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;
}
.ux-card-body{
  padding:38px 16px 16px!important;
  flex:1!important;
  display:flex!important;
  flex-direction:column!important;
  min-width:0!important;
}
.ux-card-body h3{
  color:var(--market-text)!important;
  font:800 17px/1.25 Montserrat,Arial,sans-serif!important;
  margin:0 0 6px!important;
}
.ux-card-body .tag{color:var(--market-gold-deep)!important;font-weight:750!important;font-size:11px!important;}
.ux-card-body .addr{
  color:var(--market-muted)!important;
  font-size:11px!important;
  line-height:1.45!important;
  margin-top:8px!important;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
}
.ux-card-bottom{
  margin-top:auto!important;
  padding-top:14px!important;
  border-top:1px solid #eef0f2!important;
  align-items:center!important;
}
.ux-badge{
  background:#e8f7ed!important;
  color:var(--market-green)!important;
  border:1px solid #bce7c8!important;
  border-radius:999px!important;
  padding:5px 9px!important;
  font-size:9px!important;
  font-weight:800!important;
}
.ux-card-cta{margin-left:auto;color:var(--market-gold-deep);font-size:10px;font-weight:800;}
.ux-right{
  padding:28px 16px 18px!important;
  position:sticky;
  top:76px;
  height:calc(100vh - 104px);
  overflow:auto;
  border-left:1px solid var(--market-line)!important;
}
.ux-right-head p,.ux-note{color:var(--market-muted)!important;}
.ux-mini{
  background:#fff!important;
  border:1px solid var(--market-line)!important;
  border-radius:14px!important;
  color:var(--market-text)!important;
  padding:8px!important;
  box-shadow:0 4px 14px rgba(15,23,42,.05)!important;
}
.ux-mini:hover{border-color:var(--market-gold-deep)!important;transform:translateY(-2px);}
.ux-mini-body strong{color:var(--market-text)!important;}
.ux-mini-body span{color:var(--market-gold-deep)!important;}
.ux-mini-body small{color:var(--market-muted)!important;}
.ux-back{
  background:var(--market-black)!important;
  color:#fff!important;
  border:1px solid var(--market-gold)!important;
  border-radius:12px!important;
}
.ux-empty{
  grid-column:1/-1;
  background:#fff!important;color:var(--market-muted)!important;
  border:1px dashed #ccd0d5!important;border-radius:16px!important;
}
.pie-pagina{background:#080808!important;color:#aeb1b7!important;border-top:1px solid #222!important;}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{
  outline:3px solid var(--market-gold)!important;
  outline-offset:3px!important;
}
@media(max-width:1180px){
  .ux-app{grid-template-columns:220px minmax(0,1fr)!important;}
  .ux-right{display:none!important;}
  .ux-grid{grid-template-columns:repeat(3,minmax(190px,1fr))!important;}
}
@media(max-width:900px){
  .header-top{height:auto!important;min-height:72px!important;padding:10px 16px!important;flex-wrap:wrap!important;}
  .search-wrapper{order:3;width:100%;max-width:none!important;margin:8px 0 0!important;}
  .ux-app{display:block!important;}
  .ux-left{position:relative;top:auto;height:auto;padding:14px 16px!important;border-bottom:1px solid var(--market-line)!important;}
  .ux-label{display:none;}
  .ux-subnav{display:flex!important;flex-direction:row!important;overflow-x:auto!important;padding-bottom:4px!important;}
  .ux-subnav a,.ux-subnav button{white-space:nowrap!important;flex:0 0 auto!important;}
  .ux-main-inner{padding:18px!important;}
  .ux-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
}
@media(max-width:620px){
  .user-tools .location-indicator{display:none!important;}
  .brand-box img{height:48px!important;}
  .ux-hero{min-height:118px!important;}
  .ux-hero h1{font-size:32px!important;letter-spacing:3px!important;}
  .ux-hero:after{left:18px;bottom:14px;font-size:10px;}
  .ux-panel-head{display:block!important;}
  .ux-panel-actions{display:grid!important;grid-template-columns:1fr!important;margin-top:14px!important;}
  .ux-grid{grid-template-columns:1fr!important;gap:14px!important;}
  .ux-card{min-height:345px!important;}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important;}
}
</style>

<style id="urbanex-marketplace-layout-fix">
/* Corrección definitiva: elimina las restricciones del layout original. */
html,body{
  width:100%!important;
  min-height:100%!important;
  overflow-x:hidden!important;
  overflow-y:auto!important;
}
body{padding:0!important;}
.ux-app{
  position:relative!important;
  inset:auto!important;
  top:auto!important;
  right:auto!important;
  bottom:auto!important;
  left:auto!important;
  width:100%!important;
  min-height:calc(100vh - 100px)!important;
  display:block!important;
  overflow:visible!important;
  background:#f4f5f7!important;
}
.ux-left,.ux-right{display:none!important;}
.ux-main{
  position:relative!important;
  width:100%!important;
  min-height:calc(100vh - 100px)!important;
  overflow:visible!important;
  background:#f4f5f7!important;
}
.ux-main::before,.ux-main::after{display:none!important;content:none!important;}
.ux-main-inner{
  position:relative!important;
  width:min(1440px,100%)!important;
  height:auto!important;
  min-height:0!important;
  margin:0 auto!important;
  padding:24px clamp(18px,3vw,46px) 48px!important;
  display:block!important;
  overflow:visible!important;
}
.ux-hero{
  width:100%!important;
  min-height:180px!important;
  margin:0 0 26px!important;
  padding:32px!important;
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  text-align:center!important;
  border-radius:24px!important;
  background:
    linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.35)),
    var(--page-bg) center/cover no-repeat!important;
}
.ux-hero h1{
  margin:0!important;
  transform:none!important;
  color:#fff!important;
  font-size:clamp(34px,6vw,72px)!important;
  line-height:1!important;
  letter-spacing:clamp(3px,1vw,10px)!important;
}
.ux-hero::after{
  left:50%!important;
  bottom:25px!important;
  transform:translateX(-50%)!important;
  width:calc(100% - 36px)!important;
  text-align:center!important;
  color:#f1f1f1!important;
}
.ux-business-panel{
  width:100%!important;
  min-height:0!important;
  margin:0!important;
  padding:0!important;
  align-self:auto!important;
  background:transparent!important;
  backdrop-filter:none!important;
  overflow:visible!important;
}
.ux-panel-head{
  width:100%!important;
  display:flex!important;
  align-items:flex-end!important;
  justify-content:space-between!important;
  gap:20px!important;
  padding:0 0 18px!important;
}
.ux-panel-head>div:first-child{min-width:0!important;}
.ux-panel-actions{
  display:flex!important;
  flex:0 0 auto!important;
  width:auto!important;
  margin:0!important;
}
.ux-panel-actions input{width:230px!important;}
.ux-panel-actions select{width:190px!important;}
.ux-grid{
  width:100%!important;
  max-width:none!important;
  max-height:none!important;
  margin:0!important;
  padding:22px 0 0!important;
  overflow:visible!important;
  display:grid!important;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr))!important;
  gap:22px!important;
  align-items:stretch!important;
}
/* Compatibilidad con el HTML de tarjetas anterior que puede quedar en caché. */
.ux-grid>.ux-card{
  width:100%!important;
  min-width:0!important;
  min-height:370px!important;
  display:flex!important;
  flex-direction:column!important;
  grid-template-columns:none!important;
  overflow:hidden!important;
  border-radius:20px!important;
  border:1px solid #e1e4e8!important;
  background:#fff!important;
  box-shadow:0 8px 24px rgba(15,23,42,.08)!important;
}
.ux-grid>.ux-card:hover{
  transform:translateY(-6px)!important;
  box-shadow:0 20px 42px rgba(15,23,42,.15)!important;
}
.ux-grid>.ux-card>.ux-logo{
  width:100%!important;
  height:210px!important;
  flex:0 0 210px!important;
  display:grid!important;
  place-items:center!important;
  background:
    radial-gradient(circle at 50% 35%,rgba(229,193,88,.20),transparent 38%),
    #151515!important;
  border-bottom:1px solid #e8eaed!important;
}
.ux-grid>.ux-card>.ux-logo img{
  width:100%!important;
  height:100%!important;
  padding:22px!important;
  object-fit:contain!important;
  background:#fff!important;
}
.ux-grid>.ux-card>.ux-card-body{
  width:100%!important;
  min-height:160px!important;
  padding:20px!important;
  justify-content:flex-start!important;
}
.ux-grid>.ux-card>.ux-card-body h3{
  color:#171717!important;
  font-size:18px!important;
  line-height:1.25!important;
}
.ux-grid>.ux-card>.ux-card-body .tag{font-size:11px!important;}
.ux-grid>.ux-card>.ux-card-body .addr{
  color:#69717d!important;
  font-size:11px!important;
  min-height:31px!important;
}
.ux-grid>.ux-card>.ux-card-body .ux-card-bottom{
  margin-top:auto!important;
  width:100%!important;
}
.ux-grid>.ux-card .ux-featured{color:#9a7415!important;}
.pie-pagina{
  position:relative!important;
  left:auto!important;
  right:auto!important;
  bottom:auto!important;
  height:28px!important;
}
@media(max-width:760px){
  .header-top{position:relative!important;top:auto!important;}
  .ux-main-inner{padding:16px 14px 34px!important;}
  .ux-hero{min-height:142px!important;padding:22px 16px!important;margin-bottom:20px!important;}
  .ux-hero h1{font-size:clamp(30px,11vw,48px)!important;letter-spacing:3px!important;}
  .ux-hero::after{font-size:10px!important;bottom:17px!important;}
  .ux-panel-head{display:block!important;}
  .ux-panel-actions{
    width:100%!important;
    margin-top:16px!important;
    display:grid!important;
    grid-template-columns:1fr!important;
  }
  .ux-panel-actions input,.ux-panel-actions select{width:100%!important;}
  .ux-grid{grid-template-columns:1fr!important;gap:16px!important;padding-top:18px!important;}
  .ux-grid>.ux-card{min-height:340px!important;}
  .ux-grid>.ux-card>.ux-logo{height:190px!important;flex-basis:190px!important;}
}
</style>

<style id="urbanex-marketplace-proportions-v3">
/* Tarjetas compactas y logotipos proporcionales. */
.ux-grid{
  grid-template-columns:repeat(auto-fill,minmax(220px,280px))!important;
  justify-content:start!important;
  gap:18px!important;
}
.ux-grid>.ux-card,
.ux-card{
  min-height:300px!important;
  max-height:none!important;
  border-radius:16px!important;
}
.ux-card-media{
  height:148px!important;
  min-height:148px!important;
  aspect-ratio:auto!important;
  display:grid!important;
  place-items:center!important;
  padding:14px!important;
  background:
    radial-gradient(circle at 50% 35%,rgba(229,193,88,.14),transparent 42%),
    #f8f8f8!important;
}
.ux-card-primary-logo{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:74%!important;
  max-height:112px!important;
  object-fit:contain!important;
  object-position:center!important;
}
.ux-card-primary-placeholder{
  width:70px!important;
  height:70px!important;
  display:grid!important;
  place-items:center!important;
  border-radius:18px!important;
  background:#111!important;
  color:#e5c158!important;
  font-size:30px!important;
}
.ux-card-logo{display:none!important;}
.ux-card-body{
  min-height:150px!important;
  padding:16px!important;
}
.ux-card-body h3{
  font-size:15px!important;
  line-height:1.25!important;
}
.ux-card-bottom{padding-top:10px!important;}
/* Compatibilidad si el navegador conserva el marcado anterior. */
.ux-grid>.ux-card>.ux-logo{
  height:148px!important;
  flex:0 0 148px!important;
  padding:14px!important;
  background:#f8f8f8!important;
}
.ux-grid>.ux-card>.ux-logo img{
  width:auto!important;
  height:auto!important;
  max-width:74%!important;
  max-height:112px!important;
  padding:0!important;
  object-fit:contain!important;
  background:transparent!important;
}
.ux-grid>.ux-card>.ux-card-body{
  min-height:150px!important;
  padding:16px!important;
}
@media(max-width:760px){
  .ux-grid{
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:12px!important;
  }
  .ux-grid>.ux-card,.ux-card{min-height:280px!important;}
  .ux-card-media,.ux-grid>.ux-card>.ux-logo{
    height:132px!important;
    min-height:132px!important;
    flex-basis:132px!important;
  }
  .ux-card-primary-logo,.ux-grid>.ux-card>.ux-logo img{
    max-width:70%!important;
    max-height:96px!important;
  }
}
@media(max-width:460px){
  .ux-grid{grid-template-columns:1fr!important;}
}
</style>
<style id="urbanex-fixed-layout-palette-v6">
:root{
  --urbanex-navy:#162b4e;
  --urbanex-charcoal:#3c3c3c;
  --urbanex-orange:#ffa500;
  --urbanex-black:#20201f;
  --sub-fixed-header:76px;
  --sub-fixed-footer:28px;
}
html,body{
  min-height:100%!important;
  overflow-x:hidden!important;
}
body{
  padding-top:calc(var(--sub-fixed-header) + env(safe-area-inset-top,0px))!important;
  padding-bottom:calc(var(--sub-fixed-footer) + env(safe-area-inset-bottom,0px))!important;
  background:#f3f5f8!important;
}
.header-top{
  position:fixed!important;
  top:0!important;
  right:0!important;
  bottom:auto!important;
  left:0!important;
  width:100%!important;
  height:calc(var(--sub-fixed-header) + env(safe-area-inset-top,0px))!important;
  min-height:calc(var(--sub-fixed-header) + env(safe-area-inset-top,0px))!important;
  padding-top:env(safe-area-inset-top,0px)!important;
  display:flex!important;
  visibility:visible!important;
  opacity:1!important;
  transform:none!important;
  z-index:1000!important;
  background:linear-gradient(90deg,var(--urbanex-black),#252525)!important;
  border-bottom:2px solid var(--urbanex-orange)!important;
  box-shadow:0 8px 24px rgba(22,43,78,.24)!important;
}
.search-input{
  background:#2b2b2a!important;
  border-color:rgba(255,165,0,.55)!important;
}
.search-input:focus{
  border-color:var(--urbanex-orange)!important;
  box-shadow:0 0 0 4px rgba(255,165,0,.16)!important;
}
.search-icon{fill:var(--urbanex-orange)!important;}
.location-indicator svg,.tool-icon svg,.profile-avatar svg{fill:var(--urbanex-orange)!important;}
.profile-avatar{border-color:var(--urbanex-orange)!important;}
.ux-app{
  min-height:calc(100vh - var(--sub-fixed-header) - var(--sub-fixed-footer))!important;
  background:#f3f5f8!important;
}
.ux-main{background:#f3f5f8!important;}
.ux-hero{
  border:2px solid rgba(255,165,0,.72)!important;
  box-shadow:0 16px 38px rgba(22,43,78,.20)!important;
}
.ux-hero h1{text-shadow:0 5px 22px rgba(32,32,31,.75)!important;}
.ux-panel-head{
  border-bottom:2px solid rgba(22,43,78,.12)!important;
}
.ux-panel-head h2{color:var(--urbanex-navy)!important;}
.ux-panel-head p{color:var(--urbanex-charcoal)!important;}
.ux-panel-actions input,.ux-panel-actions select{
  color:var(--urbanex-charcoal)!important;
  border-color:rgba(22,43,78,.25)!important;
}
.ux-panel-actions input:focus,.ux-panel-actions select:focus{
  border-color:var(--urbanex-orange)!important;
  box-shadow:0 0 0 3px rgba(255,165,0,.16)!important;
}
.ux-card{
  border-color:rgba(22,43,78,.16)!important;
  box-shadow:0 8px 22px rgba(22,43,78,.10)!important;
}
.ux-card:hover{
  border-color:var(--urbanex-orange)!important;
  box-shadow:0 18px 36px rgba(22,43,78,.18)!important;
}
.ux-card-media,.ux-grid>.ux-card>.ux-logo{
  background:
    radial-gradient(circle at 50% 35%,rgba(255,165,0,.13),transparent 42%),
    #f7f8fa!important;
  border-bottom:3px solid var(--urbanex-navy)!important;
}
.ux-card-body h3{color:var(--urbanex-navy)!important;}
.ux-card-body .tag{color:#b36f00!important;}
.ux-badge{
  background:rgba(22,43,78,.09)!important;
  color:var(--urbanex-navy)!important;
  border-color:rgba(22,43,78,.22)!important;
}
.ux-card-cta,.ux-featured{color:#b36f00!important;}
.ux-card-featured{
  color:var(--urbanex-black)!important;
  background:var(--urbanex-orange)!important;
  border-color:#e28f00!important;
}
.pie-pagina{
  position:fixed!important;
  top:auto!important;
  right:0!important;
  bottom:0!important;
  left:0!important;
  width:100%!important;
  height:calc(var(--sub-fixed-footer) + env(safe-area-inset-bottom,0px))!important;
  min-height:calc(var(--sub-fixed-footer) + env(safe-area-inset-bottom,0px))!important;
  padding-bottom:env(safe-area-inset-bottom,0px)!important;
  display:flex!important;
  visibility:visible!important;
  opacity:1!important;
  transform:none!important;
  z-index:1000!important;
  background:var(--urbanex-black)!important;
  border-top:2px solid var(--urbanex-orange)!important;
  color:#e6e8ec!important;
  box-shadow:0 -7px 20px rgba(22,43,78,.20)!important;
}
@media(max-width:900px){
  :root{--sub-fixed-header:124px;}
  .header-top{
    display:grid!important;
    grid-template-columns:1fr!important;
    grid-template-rows:58px 42px!important;
    gap:8px!important;
    padding:calc(8px + env(safe-area-inset-top,0px)) 12px 8px!important;
  }
  .brand-box{
    width:100%!important;
    display:flex!important;
    justify-content:center!important;
    align-items:center!important;
  }
  .brand-box img{
    width:auto!important;
    max-width:150px!important;
    height:52px!important;
  }
  .search-wrapper{
    order:initial!important;
    width:100%!important;
    max-width:none!important;
    margin:0!important;
  }
  .search-input{height:42px!important;}
  .user-tools{display:none!important;}
}
@media(max-width:520px){
  :root{--sub-fixed-header:116px;}
  .header-top{
    grid-template-rows:52px 40px!important;
    padding-right:9px!important;
    padding-left:9px!important;
  }
  .brand-box img{height:46px!important;max-width:135px!important;}
  .search-input{height:40px!important;font-size:11px!important;}
}
</style>
</head>
<body>
<header class="header-top">
  <a class="brand-box" href="index.html" title="Volver a la categoría">
    <img src="../imagenes/logo.png" alt="Logo Urbanex">
  </a>
  <div class="search-wrapper">
    <input autocomplete="off" class="search-input" id="searchInput" placeholder="Buscar en la subcategoría..." type="search">
    <svg class="search-icon" viewBox="0 0 24 24" aria-label="Buscar">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    </svg>
  </div>
  <div class="user-tools">
    <div class="location-indicator">
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
      <span>Loja, Ecuador</span>
    </div>
    <a class="tool-icon" href="../boulevard.html" title="Volver al Boulevard">
      <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
    </a>
    <a class="profile-avatar" href="../admin/index.html" title="Administración">
      <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
    </a>
  </div>
</header>
<div class="ux-app">
  <aside class="ux-left"><h2 class="ux-label">Subcategorías</h2><nav id="subNav" class="ux-subnav"></nav></aside>
  <main class="ux-main">
    <div class="ux-main-inner">
      <section class="ux-hero"><h1 id="pageTitle">SUBCATEGORÍA</h1></section>
      <section class="ux-business-panel">
        <div class="ux-panel-head"><div><h2 id="panelTitle">Negocios</h2><p id="businessCount">Cargando negocios...</p></div><div class="ux-panel-actions"><input id="panelSearch" type="search" placeholder="Buscar negocio"><select id="sortBusiness"><option value="featured">Destacados primero</option><option value="name">Nombre A–Z</option></select></div></div>
        <div id="businessGrid" class="ux-grid"><div class="ux-empty">Cargando información desde Supabase...</div></div>
      </section>
    </div>
  </main>
  <aside class="ux-right"><div class="ux-right-head"><h2>Destacados</h2><p id="featuredCount">Cargando...</p></div><div class="ux-sort"><select><option>Ordenar por: Destacados</option></select></div><div id="featuredList" class="ux-featured-list"><div class="ux-note">Cargando destacados...</div></div><a id="backLink" class="ux-back" href="index.html">Volver</a></aside>
</div>
<footer class="pie-pagina"><p>© 2026 Urbanex. Desarrollado por NeoDat Consultores.</p></footer>
<script type="module" src="subcategoria.js?v=20260721-2"></script>

<script>
/* === URBANEX PATCH MINIMO: PWA SIN TUTEO Y LOGO URBA4 === */
document.addEventListener('DOMContentLoaded', function () {
  const depth = location.pathname.split('/').filter(Boolean).length;

  let logoPath = 'imagenes/Urba4.png';

  if (location.pathname.includes('/categorias/') && depth >= 2) {
    logoPath = '../imagenes/Urba4.png';
  }

  

  const installNodes = document.querySelectorAll('[id*="install" i], [class*="install" i], [id*="pwa" i], [class*="pwa" i]');

  installNodes.forEach(function (el) {
    if (el.innerHTML) {
      el.innerHTML = el.innerHTML
        .replaceAll('Acceda rápido desde su pantalla de inicio', 'Acceda rápido desde su pantalla de inicio')
        .replaceAll('Acceda rápido desde su pantalla de inicio', 'Acceda rápido desde su pantalla de inicio')
        .replaceAll('desde su pantalla', 'desde su pantalla');
    }
  });

  document.querySelectorAll('[id*="install" i] img, [class*="install" i] img, [id*="pwa" i] img, [class*="pwa" i] img').forEach(function (img) {
    img.src = logoPath;
    img.style.objectFit = 'contain';
    img.style.background = '#000';
    img.style.borderRadius = '10px';
  });
});
/* === FIN URBANEX PATCH MINIMO === */
</script>




</body>
</html>

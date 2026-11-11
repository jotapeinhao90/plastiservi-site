/* Configuración editable — completar antes de publicar */
const PS_CONFIG = {
  waNumber: '56972885960',  // WhatsApp de ventas. Vacío = oculta el botón
  leadEndpoint: 'https://plastiservi-leads.bp-juanpix.workers.dev/api/lead', // URL del Worker que recibe el formulario. Vacío = abre el correo prellenado
  email: 'comunicaciones@plastiservi.cl',
  emailCc: '',             // copia (se agrega en el servidor por el Worker, no en el sitio público)
  gaId: ''                  // ID de Google Analytics 4 (G-XXXXXXXXXX). Vacío = sin analítica
};
function psOpenQuoteFallback() {}

/* =====================
   Nav scroll shadow
   ===================== */
const nav = document.getElementById('nav');
const tick = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', tick, { passive: true });
tick();

/* =====================
   Nav search
   ===================== */
function handleSearch(e) {
  e.preventDefault();
  window.location.href = 'productos.html';
}

/* =====================
   Mobile burger
   ===================== */
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('drawer').classList.toggle('open');
});
document.getElementById('drawer').querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('drawer').classList.remove('open'));
});

/* =====================
   Smooth scroll (offset nav)
   ===================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    }
  });
});

/* =====================
   Intersection reveal
   ===================== */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-3d').forEach(el => io.observe(el));

/* =====================
   Counter animation
   ===================== */
const cio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const end = +el.dataset.to;
    const dur = 1200;
    const step = end / (dur / 16);
    let cur = 0;
    const run = () => { cur = Math.min(cur + step, end); el.textContent = Math.floor(cur); if (cur < end) requestAnimationFrame(run); };
    requestAnimationFrame(run);
    cio.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.count').forEach(c => cio.observe(c));

/* =====================
   3D tilt on cards
   ===================== */
document.querySelectorAll('.prod, .ind, .nos-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-5px) perspective(600px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});


/* =====================
   Nav cart badge (all pages)
   ===================== */
(function navCart() {
  function getCount() {
    try { return (JSON.parse(localStorage.getItem('plastiservi_cart'))||[]).length; } catch { return 0; }
  }
  function render() {
    const count = getCount();
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = '';
    } else {
      badge.style.display = 'none';
    }
  }
  render();
  window.addEventListener('storage', render);
  setInterval(render, 1500);
})();

/* =====================
   Contact form
   ===================== */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Enviando…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('cform').style.display = 'none';
    document.getElementById('form-ok').style.display = 'block';
  }, 1100);
}

/* =====================
   Catalog filter bar (shared by conduit/schedule/hidraulico pages)
   ===================== */
const PLF_ICONS = {
  all:        '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
  tuberia:    '<rect x="3" y="9" width="18" height="6" rx="1"/><path d="M7 9V7a2 2 0 012-2M17 9V7a2 2 0 00-2-2"/>',
  curvas:     '<path d="M4 20V10a6 6 0 016-6h10"/>',
  coplas:     '<path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07L10 6"/><path d="M14 11a5 5 0 00-7.07 0l-1.41 1.41a5 5 0 007.07 7.07L14 18"/>',
  terminales: '<path d="M5 21V4a1 1 0 011-1h13l-4 5 4 5H6"/>',
  reducciones:'<path d="M4 4h16l-6 8v8h-4v-8z"/>',
  tapagorros: '<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>',
  adaptadores:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/>',
  espigas:    '<path d="M12 2l4 13H8z"/><path d="M8 15h8l-1 6H9z"/>',
  layflat:    '<path d="M4 9h16"/><path d="M4 15h16"/>',
  salidas:    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',
  camaras:    '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12a8 3 0 0016 0V6"/>'
};

const PLF_TYPE_ICONS = {
  hidraulica: '<path d="M12 2C6 9.5 4 13 4 16a8 8 0 0016 0c0-3-2-6.5-8-14z"/>',
  electrica:  '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'
};

function initCatalogFilters(opts) {
  const { lineSlug, lineTitle, accent, accentTint, groups, gridEl, filtersEl } = opts;
  const allIds = LINES[lineSlug].products;
  const title  = lineTitle || (LINES[lineSlug] || {}).title || '';
  const resolved = groups
    .map(g => ({ ...g, ids: allIds.filter(g.match) }))
    .filter(g => g.ids.length);

  if (accent) document.documentElement.style.setProperty('--plf-accent', accent);
  if (accentTint) document.documentElement.style.setProperty('--plf-accent-tint', accentTint);

  let selected = new Set(); // vacío = ver todas las categorías agrupadas; puede tener 1+ ids

  function cardHtml(id) {
    const p = PRODUCTS[id];
    const waMsg = `Hola, quiero cotizar el producto "${p.name}" (${p.line}). Vi el producto en plastiservi.cl`;
    const waHref = (typeof psWaLink === 'function') ? psWaLink(waMsg) : `https://wa.me/${PS_CONFIG.waNumber}?text=${encodeURIComponent(waMsg)}`;
    return `
      <div class="pl-card fade-3d">
        <a href="producto.html?id=${id}" class="pl-card-link" style="display:contents;text-decoration:none;color:inherit">
          <div class="pl-photo">
            <img src="img/products/${id}.png?v=${IMG_V}" alt="${p.name}" loading="lazy"
              onerror="if(this.src.indexOf('.png')>-1){this.src=this.src.replace('.png','.jpg')}else{this.style.display='none';var ph=this.parentElement.querySelector('.pl-photo-ph');if(ph)ph.style.display='flex'}" />
            <div class="pl-photo-ph">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span>Foto próximamente</span>
            </div>
          </div>
          <div class="pl-body">
            <div class="pl-name">${p.name}</div>
            <div class="pl-desc">${p.desc.split('.')[0]}.</div>
            <div class="pl-tags">${p.specs.map(s=>`<span class="pl-tag">${s}</span>`).join('')}</div>
            <div class="pl-cta">
              <span>Ver medidas y cotizar</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </a>
        <a href="${waHref}" target="_blank" rel="noopener" class="pl-wa-quick" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.5.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.9 14.8 3.5 13.4 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/></svg>
          Cotizar por WhatsApp
        </a>
      </div>`;
  }

  function groupBlockHtml(g) {
    return `
      <div id="${g.id}" class="plf-group-head">
        <span class="plf-group-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">${PLF_ICONS[g.id] || PLF_ICONS.curvas}</svg>
          ${g.label}
        </span>
        <div class="plf-group-line"></div>
      </div>
      <div class="plf-group-grid">${g.ids.map(cardHtml).join('')}</div>`;
  }

  function contextHtml(g) {
    return `
      <div class="plf-context">
        <span class="plf-context-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">${PLF_ICONS[g.id] || PLF_ICONS.curvas}</svg>
        </span>
        <span class="plf-context-text"><strong>${title}</strong> <span class="plf-context-sep">›</span> ${g.label}</span>
        <span class="plf-context-count">${g.ids.length} ${g.ids.length === 1 ? 'producto' : 'productos'}</span>
      </div>`;
  }

  function renderGrid() {
    if (selected.size === 0) {
      gridEl.innerHTML = resolved.map(groupBlockHtml).join('');
    } else {
      const chosen = resolved.filter(g => selected.has(g.id));
      if (chosen.length === 1) {
        const g = chosen[0];
        gridEl.innerHTML = contextHtml(g) + `<div class="plf-group-grid">${g.ids.map(cardHtml).join('')}</div>`;
      } else {
        gridEl.innerHTML = chosen.map(groupBlockHtml).join('');
      }
    }
    gridEl.querySelectorAll('.fade-3d').forEach(el => {
      const io = new IntersectionObserver(e => { if (e[0].isIntersecting) { el.classList.add('in'); io.unobserve(el); } }, { threshold: .1 });
      io.observe(el);
    });
  }

  function tabHtml(g) {
    return `
      <button class="plf-tab" type="button" data-id="${g.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">${PLF_ICONS[g.id] || PLF_ICONS.curvas}</svg>
        <span>${g.label}</span>
        <span class="plf-tab-count">${g.ids.length}</span>
      </button>`;
  }

  function renderTabs() {
    filtersEl.querySelectorAll('.plf-tab').forEach(btn => {
      const id = btn.dataset.id;
      btn.classList.toggle('active', id === 'all' ? selected.size === 0 : selected.has(id));
    });
  }

  function syncHash() {
    if (selected.size === 0) history.replaceState(null, '', location.pathname);
    else history.replaceState(null, '', '#' + [...selected].join(','));
  }

  function scrollToFilters() {
    const navH = document.querySelector('.nav')?.getBoundingClientRect().height || 0;
    const rect = filtersEl.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - navH - 12;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  }

  function lineBtnHtml(slug, line) {
    const active = slug === lineSlug;
    return `
      <a class="plf-line-btn plf-line-btn--${line.type}${active ? ' active' : ''}" href="${line.url}">
        <span class="plf-line-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${PLF_TYPE_ICONS[line.type]}</svg>
        </span>
        <span class="plf-line-text">
          <span class="plf-line-name">${line.short}</span>
          <span class="plf-line-type">${active ? 'Estás aquí' : line.typeLabel}</span>
        </span>
      </a>`;
  }

  const currentLine = LINES[lineSlug];
  const otherTypeLabel = currentLine.type === 'hidraulica' ? 'Eléctrica' : 'Hidráulica';
  const switchTarget = currentLine.type === 'hidraulica' ? LINES['conduit'] : LINES['hidraulico'];

  filtersEl.className = 'pf-side';
  filtersEl.innerHTML = `
    <div class="plf-current plf-current--${currentLine.type}">
      <span class="plf-current-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${PLF_TYPE_ICONS[currentLine.type]}</svg>
      </span>
      <span class="plf-current-text">
        <span class="plf-current-label">Estás viendo la línea</span>
        <span class="plf-current-name">${currentLine.type === 'hidraulica' ? 'Hidráulica' : 'Eléctrica'}</span>
      </span>
    </div>
    <a class="plf-switch" href="${switchTarget.url}">
      <span>¿Buscas fitting ${otherTypeLabel.toLowerCase()}? Ir a ${otherTypeLabel}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
    <div class="plf-lineswitch">
      <div class="plf-side-title">Hidráulica</div>
      ${Object.entries(LINES).filter(([,l]) => l.type === 'hidraulica').map(([slug,l]) => lineBtnHtml(slug,l)).join('')}
      <div class="plf-side-title" style="margin-top:8px">Eléctrica e industrial</div>
      ${Object.entries(LINES).filter(([,l]) => l.type === 'electrica').map(([slug,l]) => lineBtnHtml(slug,l)).join('')}
    </div>
    <div class="plf-tabbar">
      <div class="plf-side-title">Categorías <span class="plf-side-hint">(elige varias)</span></div>
      <button class="plf-tab" type="button" data-id="all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">${PLF_ICONS.all}</svg>
        <span>Todos</span>
        <span class="plf-tab-count">${allIds.length}</span>
      </button>
      ${resolved.map(tabHtml).join('')}
    </div>`;

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.plf-tab');
    if (!btn) return;
    const id = btn.dataset.id;
    const wasEmpty = selected.size === 0;
    if (id === 'all') {
      selected.clear();
    } else if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }
    renderTabs();
    renderGrid();
    syncHash();
    // Solo hacer scroll al elegir el primer filtro; toggles siguientes en
    // multi-selección no deben mover la página (se sentía como recarga).
    if (wasEmpty && selected.size > 0) scrollToFilters();
  });

  const hashIds = location.hash.replace('#', '').split(',').filter(id => resolved.find(g => g.id === id));
  if (hashIds.length) {
    hashIds.forEach(id => selected.add(id));
    renderTabs();
    renderGrid();
    setTimeout(scrollToFilters, 80);
  } else {
    renderTabs();
    renderGrid();
  }
}

/* =====================
   CTAs flotantes sitewide: WhatsApp + Cotizar
   Popup de captura de leads (se abre solo una vez, a los 3s)
   ===================== */
(function psLeads() {
  const WA_NUMBER = PS_CONFIG.waNumber;
  const WA_DEFAULT_MSG = 'Hola, quiero cotizar productos Plastiservi.';
  const LEAD_ENDPOINT = PS_CONFIG.leadEndpoint;

  function waLink(msg) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg || WA_DEFAULT_MSG)}`;
  }
  window.psWaLink = waLink;

  const waIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.5.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.9 14.8 3.5 13.4 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/></svg>`;
  const quoteIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  const closeIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>`;
  const boltIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;

  /* Botones flotantes */
  const fabWrap = document.createElement('div');
  fabWrap.innerHTML = `
    ${WA_NUMBER ? `<a class="cfx-fab cfx-fab-wa" id="cfx-fab-wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
      <span class="cfx-fab-wa-pulse"></span>
      ${waIcon}
      <span class="cfx-fab-label-full">WhatsApp</span>
    </a>` : ''}
    <button class="cfx-fab cfx-fab-quote" id="cfx-fab-quote" type="button" aria-label="Solicitar cotización">
      ${quoteIcon}
      <span class="cfx-fab-label-full">Cotizar</span>
    </button>`;
  document.body.appendChild(fabWrap);

  /* Popup de cotización */
  const popup = document.createElement('div');
  popup.className = 'cfx-popup-overlay';
  popup.id = 'cfx-popup';
  popup.innerHTML = `
    <div class="cfx-popup">
      <button class="cfx-popup-close" id="cfx-popup-close" type="button" aria-label="Cerrar">${closeIcon}</button>
      <div id="cfx-popup-form-wrap">
        <div class="cfx-popup-head">
          <span class="cfx-popup-badge">${boltIcon} Respuesta rápida</span>
          <h3>Solicita tu cotización</h3>
          <p>Cuéntanos qué productos necesitas y te contactamos a la brevedad.</p>
        </div>
        <form class="cfx-popup-body" id="cfx-lead-form">
          <div class="cfx-popup-row">
            <div class="cfx-f"><label>Nombre <span class="req">*</span></label><input type="text" name="nombre" placeholder="Tu nombre" required /></div>
            <div class="cfx-f"><label>Empresa <span class="req">*</span></label><input type="text" name="empresa" placeholder="Razón social" required /></div>
          </div>
          <div class="cfx-f"><label>Email <span class="req">*</span></label><input type="email" name="email" placeholder="tu@empresa.cl" required /></div>
          <div class="cfx-f"><label>¿Qué línea te interesa? <span class="req">*</span></label><select name="linea" required aria-label="Línea que te interesa"><option value="">Elige una opción</option><option value="Tubos y acoples">Tubos, acoples y cañerías</option><option value="Bolsas y mangas">Bolsas, mangas y film</option><option value="Reciclaje">Material reciclado / reciclaje</option></select></div>
          <div class="cfx-popup-row">
            <div class="cfx-f"><label>Producto(s) <span class="req">*</span></label><input type="text" name="producto" placeholder="Ej: Bolsas PEBD 40x60 / Codos PVC 110mm" required /></div>
            <div class="cfx-f"><label>Cantidad <span class="req">*</span></label><input type="text" name="cantidad" placeholder="Ej: 200 unidades" required /></div>
          </div>
          <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off" />
          <input type="hidden" name="pagina" value="" />
          <div class="cfx-trust-mini">
            <div class="cfx-trust-mini-item">${checkIcon} Más de 42 años de experiencia</div>
            <div class="cfx-trust-mini-item">${checkIcon} Certificados ISO 9001, ISO 22000 e ISO-CASCO 5</div>
            <div class="cfx-trust-mini-item">${checkIcon} Despacho a todo Chile</div>
          </div>
          <button type="submit" class="cfx-popup-submit" id="cfx-lead-submit">${quoteIcon} Enviar solicitud</button>
          <div class="cfx-popup-error" id="cfx-lead-error">No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.</div>
        </form>
      </div>
      <div class="cfx-popup-ok" id="cfx-popup-ok">
        <div class="cfx-popup-ok-icon">${checkIcon}</div>
        <h3>¡Solicitud enviada!</h3>
        <p>Gracias, recibimos tu solicitud de cotización.<br>Te contactamos a la brevedad.</p>
      </div>
    </div>`;
  document.body.appendChild(popup);
  const LINEAS = { tubos: 'Tubos y acoples', bolsas: 'Bolsas y mangas' };
  const pageLine = LINEAS[document.body.dataset.line] || (/reciclaje/.test(location.pathname) ? 'Reciclaje' : '');
  popup.querySelector('[name="linea"]').value = pageLine;
  popup.querySelector('[name="pagina"]').value = location.pathname.split('/').pop() || 'index.html';

  function openPopup() { popup.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closePopup() { popup.classList.remove('open'); document.body.style.overflow = ''; }

  document.getElementById('cfx-fab-quote').addEventListener('click', openPopup);
  document.getElementById('cfx-popup-close').addEventListener('click', closePopup);
  popup.addEventListener('click', e => { if (e.target === popup) closePopup(); });

  const leadForm = document.getElementById('cfx-lead-form');
  leadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('cfx-lead-submit');
    const errorEl = document.getElementById('cfx-lead-error');
    errorEl.classList.remove('show');
    btn.disabled = true;
    btn.textContent = 'Enviando…';
    if (!LEAD_ENDPOINT) {
      const d = Object.fromEntries(new FormData(leadForm));
      const body = `Nombre: ${d.nombre}\nEmpresa: ${d.empresa}\nEmail: ${d.email}\nLínea: ${d.linea}\nProducto(s): ${d.producto}\nCantidad: ${d.cantidad}`;
      location.href = `mailto:${PS_CONFIG.email}?cc=${PS_CONFIG.emailCc}&subject=${encodeURIComponent('[' + d.linea + '] Solicitud de cotización — ' + d.empresa)}&body=${encodeURIComponent(body)}`;
      document.getElementById('cfx-popup-form-wrap').style.display = 'none';
      document.getElementById('cfx-popup-ok').classList.add('show');
      return;
    }
    fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(leadForm)))
    })
      .then(res => { if (!res.ok) throw new Error('send failed'); })
      .then(() => {
        document.getElementById('cfx-popup-form-wrap').style.display = 'none';
        document.getElementById('cfx-popup-ok').classList.add('show');
        try { sessionStorage.setItem('ps_lead_sent', '1'); } catch (err) {}
      })
      .catch(() => {
        errorEl.classList.add('show');
        btn.disabled = false;
        btn.innerHTML = `${quoteIcon} Enviar solicitud`;
      });
  });

  /* Auto-apertura a los 3 segundos, una sola vez por sesión */
  try {
    if (!sessionStorage.getItem('ps_popup_shown') && !sessionStorage.getItem('ps_lead_sent')) {
      setTimeout(() => {
        if (window.innerWidth < 760 || document.querySelector('.ps-cookies')) return;
        if (!popup.classList.contains('open')) openPopup();
        sessionStorage.setItem('ps_popup_shown', '1');
      }, 30000);
    }
  } catch (err) {}
})();

/* Hero slider */
(function () {
  const slides = document.querySelectorAll('#hero-slider .hero-slide'); if (!slides.length) return;
  const dots = document.querySelectorAll('#hero-dots .hd'); let cur = 0, timer;
  const go = n => { slides[cur].classList.remove('hs-active'); dots[cur].classList.remove('hs-active'); cur = (n + slides.length) % slides.length; slides[cur].classList.add('hs-active'); dots[cur].classList.add('hs-active'); };
  const start = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 3500); };
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); start(); })); start();
})();

/* Botones "Cotizar este producto": abren el popup con el producto precargado */
window.addEventListener('load', () => {
  document.querySelectorAll('[data-quote]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    const popup = document.getElementById('cfx-popup'); if (!popup) return;
    const f = popup.querySelector('[name="producto"]'); if (f && b.dataset.quote) f.value = b.dataset.quote;
    const ln = { tubos: 'Tubos y acoples', bolsas: 'Bolsas y mangas' }[b.dataset.line]; const sel = popup.querySelector('[name="linea"]'); if (sel && ln) sel.value = ln;
    popup.classList.add('open'); document.body.style.overflow = 'hidden';
  }));
});


/* Inclinación 3D de los mini modelos del hero */
document.querySelectorAll('.hero4-line').forEach(card => {
  const svg = card.querySelector('.model svg'); if (!svg) return;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    svg.style.setProperty('--ry', (x * 50) + 'deg'); svg.style.setProperty('--rx', (-y * 30 + 6) + 'deg');
  });
  card.addEventListener('mouseleave', () => { svg.style.removeProperty('--ry'); svg.style.removeProperty('--rx'); });
});

/* Reproductor de YouTube: se reproduce solo (en silencio) al llegar a la sección; o con clic */
function loadVideo() {
  const thumb = document.getElementById('vp-thumb'), wrap = document.getElementById('vp-iframe'), yt = document.getElementById('yt-iframe');
  if (!yt || yt.getAttribute('src')) return;
  yt.src = 'https://www.youtube-nocookie.com/embed/3n8QQg7Dyl0?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1';
  thumb.style.display = 'none'; wrap.style.display = 'block';
}
(function () {
  const player = document.getElementById('video-player'); if (!player) return;
  const vio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { loadVideo(); vio.disconnect(); } }), { threshold: .6 });
  vio.observe(player);
})();

/* Carrusel de banners */
(function () {
  const root = document.getElementById('banners'); if (!root) return;
  const s = [...root.querySelectorAll('.bn')], d = [...root.querySelectorAll('.bn-dots button')]; let i = 0, t;
  const go = n => { s[i].classList.remove('on'); d[i].classList.remove('on'); i = (n + s.length) % s.length; s[i].classList.add('on'); d[i].classList.add('on'); };
  const run = () => { clearInterval(t); t = setInterval(() => go(i + 1), 5000); };
  d.forEach((b, k) => b.addEventListener('click', () => { go(k); run(); })); run();
})();
/* Filtro Todos / PE / PVC */
(function () {
  const f = document.getElementById('ps-filter'); if (!f) return;
  f.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    f.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    document.querySelectorAll('#ps-tube-cards .ps-card').forEach(c => { c.hidden = b.dataset.f !== 'all' && c.dataset.cat !== b.dataset.f; });
  });
})();
/* Formularios genéricos (.ps-form): envían al endpoint o abren correo prellenado */
document.querySelectorAll('form.ps-form').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form)); const to = form.dataset.to || PS_CONFIG.email;
  const done = () => { form.querySelectorAll('input,textarea,button,select').forEach(x => x.style.display = 'none'); const ok = form.querySelector('.ok'); if (ok) ok.style.display = 'block'; };
  if (PS_CONFIG.leadEndpoint) {
    fetch(PS_CONFIG.leadEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nombre: d.nombre, empresa: '-', email: d.email, linea: form.dataset.linea || d.linea || '', producto: d.mensaje, cantidad: d.telefono || '-', pagina: location.pathname.split('/').pop(), destino: to }) }).then(done).catch(done);
  } else {
    const body = `Nombre: ${d.nombre}\nEmail: ${d.email}\nTeléfono: ${d.telefono || ''}\n\n${d.mensaje}`;
    location.href = `mailto:${to}?subject=${encodeURIComponent((d.linea ? '[' + d.linea + '] ' : '') + (form.dataset.subject || 'Contacto web'))}&body=${encodeURIComponent(body)}`; done();
  }
}));
/* Botón flotante "Llámanos" */
(function () {
  const a = document.createElement('a'); a.className = 'cfx-fab-call'; a.href = 'tel:+56989530167'; a.setAttribute('aria-label', 'Llámanos');
  a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  document.body.appendChild(a);
})();
/* Aviso de cookies con consentimiento (la analítica solo se carga si se acepta) */
function psLoadAnalytics() {
  if (!PS_CONFIG.gaId || window.__psGa) return; window.__psGa = 1;
  const s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + PS_CONFIG.gaId; document.head.appendChild(s);
  window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); }; gtag('js', new Date()); gtag('config', PS_CONFIG.gaId);
}
function psTrack(name, params) { try { if (window.gtag) gtag('event', name, params || {}); } catch (e) {} }
(function () {
  let v = null; try { v = localStorage.getItem('ps_cookies'); } catch (e) {}
  if (v === 'yes') { psLoadAnalytics(); return; }
  if (v) return;
  const b = document.createElement('div'); b.className = 'ps-cookies'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Aviso de cookies');
  b.innerHTML = '<p>Usamos cookies para que el sitio funcione y, si lo permites, para medir su uso. <a href="cookies.html">Más información</a></p><div><button type="button" data-v="no" class="alt">Solo necesarias</button><button type="button" data-v="yes">Aceptar</button></div>';
  document.body.appendChild(b);
  b.addEventListener('click', e => { const x = e.target.closest('button'); if (!x) return; try { localStorage.setItem('ps_cookies', x.dataset.v); } catch (er) {} if (x.dataset.v === 'yes') psLoadAnalytics(); b.remove(); });
})();

/* Eventos de conversión (se envían solo si hay analítica cargada) */
document.addEventListener('click', e => {
  const a = e.target.closest('a,button'); if (!a) return; const h = a.getAttribute('href') || '';
  if (h.includes('wa.me')) psTrack('click_whatsapp', { page: location.pathname });
  else if (h.startsWith('tel:')) psTrack('click_phone', { page: location.pathname });
  else if (h.startsWith('mailto:')) psTrack('click_email', { page: location.pathname });
  else if (a.hasAttribute('data-quote')) psTrack('open_quote_form', { page: location.pathname });
}, true);
document.addEventListener('submit', e => psTrack('generate_lead', { form: e.target.id || e.target.className, page: location.pathname }), true);

/* Anti-spam: campo trampa en los formularios de la página */
document.querySelectorAll('form.ps-form').forEach(f => { const i = document.createElement('input'); i.type = 'text'; i.name = '_honey'; i.tabIndex = -1; i.autocomplete = 'off'; i.style.display = 'none'; i.setAttribute('aria-hidden', 'true'); f.appendChild(i); });
document.addEventListener('submit', e => { const h = e.target.querySelector && e.target.querySelector('[name="_honey"]'); if (h && h.value) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);

/* Accesibilidad: Escape cierra el formulario emergente */
document.addEventListener('keydown', e => { if (e.key === 'Escape') { const c = document.getElementById('cfx-popup-close'); if (c && document.getElementById('cfx-popup').classList.contains('open')) c.click(); } });

/* Buscador del encabezado: busca en tubos, bolsas, reciclaje, acoples y páginas */
(function () {
  const form = document.querySelector('.nav-search'); if (!form) return;
  const input = form.querySelector('input'); let data = null, items = [], sel = -1;
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const box = document.createElement('div'); box.className = 'ps-sr'; box.hidden = true; form.appendChild(box); form.style.position = 'relative';
  input.setAttribute('autocomplete', 'off'); input.setAttribute('aria-label', 'Buscar en el sitio');
  const load = () => data ? Promise.resolve() : fetch('search-index.json').then(r => r.json()).then(j => { data = j.map(x => ({ ...x, n: norm(x.t + ' ' + x.k + ' ' + x.d) })); }).catch(() => { data = []; });
  const run = () => {
    const q = norm(input.value).trim().split(/\s+/).filter(Boolean);
    if (!q.length || !data) { box.hidden = true; items = []; return; }
    items = data.map(x => ({ x, s: q.every(t => x.n.includes(t)) ? q.reduce((a, t) => a + (norm(x.t).includes(t) ? 3 : 1), 0) : 0 })).filter(r => r.s).sort((a, b) => b.s - a.s).slice(0, 8).map(r => r.x);
    sel = -1;
    box.innerHTML = items.length ? items.map((x, i) => `<a href="${x.u}" data-i="${i}"><b>${x.t}</b><span>${x.k}</span></a>`).join('') : '<p>Sin resultados. Prueba con otra palabra o <a href="contacto.html">escríbenos</a>.</p>';
    box.hidden = false;
  };
  input.addEventListener('focus', () => load().then(run)); input.addEventListener('input', () => load().then(run));
  input.addEventListener('keydown', e => {
    const links = [...box.querySelectorAll('a[data-i]')]; if (!links.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % links.length; } else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + links.length) % links.length; } else return;
    links.forEach((l, i) => l.classList.toggle('on', i === sel));
  });
  document.addEventListener('click', e => { if (!form.contains(e.target)) box.hidden = true; });
  window.handleSearch = function (e) {
    e.preventDefault(); const on = box.querySelector('a.on') || box.querySelector('a[data-i]');
    if (on) location.href = on.getAttribute('href'); else load().then(() => { run(); const f = box.querySelector('a[data-i]'); if (f) location.href = f.getAttribute('href'); });
  };
})();

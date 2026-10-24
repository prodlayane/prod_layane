/* СВОИ ДАННЫЕ — измените этот блок. Сайт работает без сборки и интернета. */
const PORTFOLIO = {
  name: 'prod_layane',
  greeting: 'Привет! Я — человек за этим рабочим столом.',
  role: 'Дизайнер, визуальный рассказчик и немного исследователь.',
  bio: 'Люблю находить необычное в повседневном. Собираю впечатления, превращаю идеи в визуальные истории и верю, что хороший дизайн начинается с любопытства.',
  email: '', // Например: 'name@example.com'. Пустое поле не создаёт фиктивный контакт.
  phone: '+79293734072',
  phoneDisplay: '8 (929) 373-40-72',
  telegram: 'https://t.me/prod_layane',
  behance: '', // Полная ссылка на ваше портфолио
  available: true,
  skills: ['Визуальный дизайн', 'Фотография', 'Арт-дирекшн', 'Монтаж', 'Figma', 'Любопытство'],
};

const PROJECTS = [
  { id: 'form', title: 'FORM® Studio', category: 'design', folder: 'identity', type: 'Айдентика', year: '2026', image: 'assets/form.svg', summary: 'Форма. Характер. Новая перспектива.', description: 'Концепт айдентики для независимой дизайн-студии. Мягкая типографика, скульптурная форма и спокойный лавандовый цвет складываются в узнаваемый визуальный язык.', meta: 'Айдентика · Арт-дирекшн', demo: true },
  { id: 'quiet', title: 'Там, где тише', category: 'photos', folder: 'nature', type: 'Визуальные истории', year: '2026', image: 'assets/landscape.svg', summary: 'Места, в которых хочется остаться.', description: 'Иллюстрированный этюд о путешествиях, тишине и умении замечать. Эта работа — пример оформления серии. Здесь можно разместить свои фотографии и историю о том, как они появились.', meta: 'Пейзажи · Визуальный дневник', demo: true },
  { id: 'slow', title: 'Slow Days', category: 'design', folder: 'posters', type: 'Графический дизайн', year: '2026', image: 'assets/orange.svg', summary: 'Меньше шума. Больше настоящего.', description: 'Концептуальная серия постеров о простых удовольствиях. Тёплый оранжевый, большой цветок и немного свободного пространства — напоминание, что иногда можно просто замедлиться.', meta: 'Постер · Типографика', demo: true },
  { id: 'arches', title: 'Геометрия света', category: 'photos', folder: 'city', type: 'Архитектура', year: '2026', image: 'assets/architecture.svg', summary: 'Ритм арок и тёплые тени.', description: 'Иллюстрированный архитектурный этюд. Повторяющиеся арки создают глубину, а солнечный свет превращает привычную геометрию в маленькое открытие. Пример карточки для вашей архитектурной фотографии.', meta: 'Город · Архитектура', demo: true },
  { id: 'blue-hour', title: 'После заката', category: 'photos', folder: 'nature', type: 'Визуальные истории', year: '2026', image: 'assets/night.svg', summary: 'Между последним светом и первой звездой.', description: 'Иллюстрированный вечерний пейзаж. Приглушённая палитра, далёкие горы и тонкий серп луны. Замените этот этюд своей фотографией — оформление уже готово.', meta: 'Пейзажи · Вечерний свет', demo: true },
  { id: 'form-digital', title: 'FORM / Digital', category: 'design', folder: 'digital', type: 'Веб-дизайн', year: '2026', image: 'assets/form.svg', summary: 'Цифровое продолжение характера.', description: 'Концепт цифрового пространства FORM. Крупная типографика, тактильные формы и продуманная сетка помогают рассказать о студии без лишнего шума.', meta: 'Веб-дизайн · Концепт', demo: true },
  { id: 'still-film', title: 'Тишина внутри', category: 'videos', folder: 'motion', type: 'Живой этюд', year: '2026', image: 'assets/landscape.svg', summary: 'Маленькая пауза в большом дне.', description: 'Демонстрационный motion-этюд: медленное движение по иллюстрации с титрами. Управление воспроизведением работает. Чтобы добавить настоящее видео, укажите video: «assets/your-video.mp4» в этой работе.', meta: 'Motion study · 15 секунд', duration: 15, caption: 'somewhere, slower.', demo: true },
  { id: 'night-film', title: 'Когда город уснул', category: 'videos', folder: 'motion', type: 'Живой этюд', year: '2026', image: 'assets/night.svg', summary: 'Время, которое принадлежит только тебе.', description: 'Демонстрационный motion-этюд о синем часе. Спокойное приближение, вечерняя палитра и одна короткая фраза. Карточка поддерживает и настоящий MP4 — добавьте поле video с путём к файлу.', meta: 'Motion study · 15 секунд', duration: 15, caption: 'a little closer to yourself.', demo: true },
];

(() => {
  'use strict';
  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => [...p.querySelectorAll(s)];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const folderIcon = '<svg aria-hidden="true"><use href="#i-folder"/></svg>';
  const win = $('#finder-window');
  const content = $('#window-content');
  const sections = {
    home: { title: 'Портфолио', subtitle: 'Все работы в одном месте', icon: 'grid' },
    about: { title: 'Обо мне', subtitle: 'Человек за этим рабочим столом', icon: 'user' },
    photos: { title: 'Фото', subtitle: 'Мой взгляд на мир', icon: 'photo' },
    videos: { title: 'Видео', subtitle: 'Истории в движении', icon: 'video' },
    design: { title: 'Дизайн', subtitle: 'Идеи, у которых появилась форма', icon: 'design' },
    contact: { title: 'Контакты', subtitle: 'Давай создадим что-нибудь вместе', icon: 'mail' },
    note: { title: 'прочитай меня.txt', subtitle: 'Маленькая записка для тебя', icon: 'mail' },
    trash: { title: 'Корзина', subtitle: 'Ничего лишнего', icon: 'grid' },
  };
  let currentPage = 'home';
  let currentFilter = 'all';
  let navigation = ['home'];
  let navigationIndex = 0;
  let toastTimeout, minimizeTimeout, previousFocus, activeOverlay, audioContext;
  let filmFrame = null;
  let soundOn = false;
  let sessionLocked = true;
  let sessionTransition = null;
  let firstLogin = true;
  let pendingPage = null;
  try { soundOn = localStorage.getItem('portfolio-sound') === 'true'; if (localStorage.getItem('portfolio-wallpaper') === 'cool') $('.wallpaper').classList.add('cool'); } catch {}

  function unlockSession() {
    if (!sessionLocked || sessionTransition !== null) return;
    $('#login-button').disabled = true;
    $('#login-button-label').textContent = 'Входим…';
    $('#login-status').textContent = 'Открываю рабочий стол';
    document.body.classList.add('is-unlocking');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sessionTransition = setTimeout(() => {
      sessionTransition = null;
      sessionLocked = false;
      $('#lock-screen').hidden = true;
      document.body.classList.remove('is-locked', 'is-unlocking');
      document.body.classList.add('session-entered');
      $$('.desktop, .dock, .menu-bar').forEach(el => el.inert = false);
      if (firstLogin || pendingPage) {
        const requestedPage = pendingPage || location.hash.slice(1);
        if (sections[requestedPage] && (requestedPage !== 'home' || pendingPage)) openWindow(requestedPage, false);
        pendingPage = null;
        firstLogin = false;
      }
      $('.desktop').focus({preventScroll:true});
    }, reducedMotion ? 0 : 650);
  }
  function lockSession() {
    if (sessionLocked) return;
    hideOverlay(false); closeMenus();
    clearTimeout(toastTimeout); $('#toast').classList.remove('visible');
    sessionLocked = true;
    document.body.classList.remove('session-entered');
    document.body.classList.add('is-locked');
    $('#lock-screen').hidden = false;
    $('#login-button').disabled = false;
    $('#login-button-label').textContent = 'Войти в сессию';
    $('#login-status').textContent = 'Нажми Enter или кнопку, чтобы войти';
    $$('.desktop, .dock, .menu-bar').forEach(el => el.inert = true);
    updateClock();
    $('#login-button').focus({preventScroll:true});
  }

  function notify(message) {
    clearTimeout(toastTimeout);
    $('#toast').textContent = message;
    $('#toast').classList.add('visible');
    toastTimeout = setTimeout(() => $('#toast').classList.remove('visible'), 3300);
  }
  function clickSound() {
    if (!soundOn) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator(), gain = audioContext.createGain();
      oscillator.connect(gain); gain.connect(audioContext.destination);
      oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(700, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + .07);
      gain.gain.setValueAtTime(.035, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .08);
      oscillator.start(); oscillator.stop(audioContext.currentTime + .09);
    } catch {}
  }
  function toggleSound() {
    soundOn = !soundOn;
    try { localStorage.setItem('portfolio-sound', String(soundOn)); } catch {}
    updateSound(); clickSound();
  }
  function updateSound() {
    $('#sound-status').textContent = soundOn ? 'вкл.' : 'выкл.';
    $('#control-sound-status').textContent = soundOn ? 'Включены' : 'Выключены';
    $('#sound-switch').classList.toggle('on', soundOn);
    $('#sound-control').setAttribute('aria-pressed', String(soundOn));
  }
  function toggleWallpaper() {
    const cool = $('.wallpaper').classList.toggle('cool');
    try { localStorage.setItem('portfolio-wallpaper', cool ? 'cool' : 'warm'); } catch {}
  }
  function card(project) {
    return `<button class="project-card ${project.category === 'videos' ? 'video-card' : ''}" data-project="${project.id}" aria-label="Открыть работу: ${escapeHTML(project.title)}">
      <div class="project-art"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}" loading="lazy" draggable="false"><span class="project-label">${escapeHTML(project.type)}</span>${project.category === 'videos' ? `<span class="video-play">▶</span><span class="video-duration">0:${String(project.duration).padStart(2,'0')}</span>` : `<span class="open-project-icon">${icon('arrow')}</span>`}</div>
      <div class="project-card-title">${escapeHTML(project.title)}<span>${project.year}</span></div><p class="project-card-description">${escapeHTML(project.summary)}</p></button>`;
  }
  function homePage() {
    return `<div class="page-intro"><div class="eyebrow"><span class="tiny-star"><svg aria-hidden="true"><use href="#i-spark"/></svg></span> ${escapeHTML(PORTFOLIO.name)} / 2026</div>${PORTFOLIO.available ? '<span class="availability"><i></i> Открыт к предложениям</span>' : ''}</div>
      <div class="hero"><h1>Делаю цифровое<br>чуть <em>человечнее.</em></h1><p class="hero-description">Дизайн, фотографии и истории в движении.<br>Всё, что я люблю делать, — <b>в нескольких папках.</b></p><span class="hero-flower" aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span></div>
      <div class="section-heading"><h2>Избранное, с любовью</h2><span>2025 — 2026</span></div>
      <div class="project-grid">${PROJECTS.slice(0,3).map(card).join('')}</div>
      <div class="home-divider"></div><div class="home-bottom"><div class="home-note"><span class="note-star" aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><p>За каждым проектом — человек.<br><small>За этим рабочим столом тоже. Давай знакомиться.</small></p></div><button class="contact-button" data-open="about">Немного обо мне ${icon('arrow')}</button></div>
      <p class="demo-footnote">Сейчас здесь примеры работ. Скоро — твои собственные истории.</p>`;
  }
  const categories = {
    photos: { heading: 'Замечать. Сохранять.', description: 'Свет, места и маленькие моменты, которые хочется забрать с собой. Пока здесь иллюстрированные этюды — место для твоих фотографий.', filters: [['all','Всё'],['nature','Природа'],['city','Город']] },
    design: { heading: 'Идеям нужна форма.', description: 'Визуальные системы, цифровые пространства и немного смелых экспериментов. Коллекция демонстрационных концептов.', filters: [['all','Всё'],['identity','Айдентика'],['posters','Постеры'],['digital','Веб-дизайн']] },
    videos: { heading: 'Почувствовать движение.', description: 'Истории, которые не помещаются в один кадр. Открой живой этюд — или добавь сюда собственные видео.', filters: [['all','Всё'],['motion','Motion-этюды']] },
  };
  function categoryPage(page) {
    const c = categories[page];
    const projects = PROJECTS.filter(p => p.category === page && (currentFilter === 'all' || p.folder === currentFilter));
    return `<div class="page-header"><div class="eyebrow">Портфолио / ${sections[page].title}</div><h1>${c.heading}</h1><p>${c.description}</p></div>
      <nav class="subfolder-row" aria-label="Подпапки">${c.filters.map(([key,label]) => `<button class="subfolder ${currentFilter === key ? 'active' : ''}" data-filter="${key}" aria-pressed="${currentFilter === key}">${folderIcon}${label}</button>`).join('')}</nav>
      <div class="section-heading"><h2>${c.filters.find(f => f[0] === currentFilter)?.[1] || 'Работы'}</h2><span>${projects.length} ${plural(projects.length, ['работа','работы','работ'])}</span></div>
      <div class="gallery-grid">${projects.map(card).join('')}</div>`;
  }
  function aboutPage() {
    return `<div class="eyebrow">Портфолио / Обо мне</div><div class="about-layout"><div class="about-portrait"><span aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><small>ALWAYS A WORK IN PROGRESS</small></div><div class="about-text"><h2>${escapeHTML(PORTFOLIO.greeting)}</h2><p>${escapeHTML(PORTFOLIO.role)}</p><p>${escapeHTML(PORTFOLIO.bio)}</p><div class="skill-tags">${PORTFOLIO.skills.map(s => `<span>${escapeHTML(s)}</span>`).join('')}</div></div></div>
      <div class="about-facts"><div><strong>С вниманием</strong><span>к маленьким деталям</span></div><div><strong>С любопытством</strong><span>к большим идеям</span></div><div><strong>С удовольствием</strong><span>к совместной работе</span></div></div>
      <div class="home-divider"></div><div class="home-bottom"><div class="home-note"><span class="note-star"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><p>Хорошие вещи начинаются<br><small>с простого «привет».</small></p></div><button class="contact-button" data-open="contact">Давай поговорим ${icon('arrow')}</button></div>`;
  }
  function safeLink(value) {
    try { const url = new URL(value); return url.protocol === 'https:' ? escapeHTML(url.href) : ''; } catch { return ''; }
  }
  function contactPage() {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(PORTFOLIO.email) ? PORTFOLIO.email : '';
    const phone = /^\+?[\d\s()-]{7,20}$/.test(PORTFOLIO.phone || '') ? PORTFOLIO.phone.replace(/[^\d+]/g,'') : '';
    const links = [['Telegram',PORTFOLIO.telegram],['Behance',PORTFOLIO.behance]].filter(([,url]) => safeLink(url));
    return `<div class="eyebrow">Остаёмся на связи</div><div class="contact-hero"><span class="big-flower" aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><h1>Всё начинается<br>с простого <em>«привет».</em></h1><p>Есть идея, интересная задача или просто хочется познакомиться?<br>Буду рад хорошему разговору.</p>
      ${phone ? `<div class="contact-email"><a href="tel:${escapeHTML(phone)}">${escapeHTML(PORTFOLIO.phoneDisplay || phone)}</a><button class="copy-button" id="copy-phone">Скопировать ↗</button></div>` : ''}
      ${mail ? `<div class="contact-email"><a href="mailto:${escapeHTML(mail)}">${escapeHTML(mail)}</a><button class="copy-button" id="copy-email">Скопировать ↗</button></div>` : ''}
      ${links.length ? `<div class="contact-links">${links.map(([label,url]) => `<a href="${safeLink(url)}" target="_blank" rel="noopener noreferrer">${label}${icon('arrow')}</a>`).join('')}</div>` : ''}
      ${!mail && !phone && !links.length ? '<p class="contact-placeholder">Это твоё портфолио. Добавь контакты в начале script.js — они появятся здесь автоматически.</p>' : ''}</div>`;
  }
  function notePage() {
    return `<div class="eyebrow">Личная заметка · прочитай меня.txt</div><h1>О, привет. Ты здесь :)</h1><p>Этот сайт — мой маленький цифровой дом. Тут можно заглянуть в папки, рассмотреть работы и немного узнать меня.</p><p>Мне нравится мысль, что портфолио может быть не просто списком проектов. Оно может быть пространством, в котором хочется задержаться.</p><p>Так что располагайся. Открывай всё, что хочется. Даже корзину — там всё безопасно.</p><p>Спасибо, что заглянул.</p><div class="note-sign">с теплом, ${escapeHTML(PORTFOLIO.name)} ✳︎</div>`;
  }
  function plural(n, words) { return n % 10 === 1 && n % 100 !== 11 ? words[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? words[1] : words[2]; }
  function renderPage() {
    content.classList.toggle('note-page', currentPage === 'note');
    content.innerHTML = currentPage === 'home' ? homePage() : categories[currentPage] ? categoryPage(currentPage) : currentPage === 'about' ? aboutPage() : currentPage === 'contact' ? contactPage() : currentPage === 'note' ? notePage() : '<div class="empty-state"><span>♧</span><h2>Здесь ничего нет.</h2><p>Все хорошие идеи я сохранил.<br>А плохие пока просто не придумал.</p><button class="contact-button" data-open="home" style="margin:22px auto">Вернуться к хорошему ↗</button></div>';
    content.scrollTop = 0;
    content.classList.remove('content-enter');
    void content.offsetWidth;
    content.classList.add('content-enter');
    $('#window-title').textContent = sections[currentPage].title;
    $$('.sidebar-item').forEach(b => b.classList.toggle('active', b.dataset.open === currentPage));
    $('#go-back').disabled = navigationIndex === 0;
    $('#go-forward').disabled = navigationIndex === navigation.length - 1;
    const count = PROJECTS.filter(p => p.category === currentPage && (currentFilter === 'all' || p.folder === currentFilter)).length;
    $('#status-label').textContent = categories[currentPage] ? `${count} ${plural(count,['объект','объекта','объектов'])} · ${currentFilter === 'all' ? 'все папки' : 'подпапка'}` : currentPage === 'home' ? '4 папки · бесконечно идей' : currentPage === 'trash' ? '0 объектов · всё важное сохранено' : '1 объект · немного личного';
    const avatar = $('.sidebar-bottom strong'); if (avatar) avatar.textContent = PORTFOLIO.name;
    document.title = `${sections[currentPage].title} — ${PORTFOLIO.name}`;
  }
  function openWindow(page = currentPage, push = true) {
    if (sessionLocked) return;
    if (!sections[page]) page = 'home';
    clearTimeout(minimizeTimeout);
    win.classList.remove('is-closed','is-minimizing');
    $('.dock-item[data-open="home"]').classList.add('is-running');
    if (push && (page !== currentPage || navigation.length === 0)) {
      navigation = navigation.slice(0, navigationIndex + 1); navigation.push(page); navigationIndex++;
    }
    if (page !== currentPage) currentFilter = 'all';
    currentPage = page; renderPage(); closeMenus();
    try { history.replaceState(null, '', `#${page}`); } catch {}
  }
  function closeWindow(minimize = false) {
    if (minimize && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      win.classList.add('is-minimizing');
      minimizeTimeout = setTimeout(() => win.classList.add('is-closed'), 240);
    } else win.classList.add('is-closed');
    if (!minimize) $('.dock-item[data-open="home"]').classList.remove('is-running');
    $('.dock-item[data-open="home"]').focus({preventScroll:true});
  }
  function resetWindow() {
    win.classList.remove('is-maximized'); win.style.left = ''; win.style.top = '';
    if (win.classList.contains('is-closed')) openWindow();
  }

  function closeMenus() {
    $$('.dropdown, .control-panel').forEach(m => m.classList.add('hidden'));
    $('#file-menu-button').setAttribute('aria-expanded','false');
    $('#view-menu-button').setAttribute('aria-expanded','false');
    $('#control-button').setAttribute('aria-expanded','false');
  }
  function toggleMenu(button, panel) {
    const wasHidden = panel.classList.contains('hidden'); closeMenus();
    panel.classList.toggle('hidden', !wasHidden); button.setAttribute('aria-expanded', String(wasHidden));
  }
  function showOverlay(id) {
    if (activeOverlay) hideOverlay(false);
    previousFocus = document.activeElement;
    activeOverlay = $(id); activeOverlay.classList.remove('hidden');
    $$('.desktop, .dock, .menu-bar').forEach(el => el.inert = true);
    closeMenus();
    requestAnimationFrame(() => activeOverlay?.querySelector('input, button')?.focus());
  }
  function hideOverlay(restoreFocus = true) {
    if (!activeOverlay) return;
    activeOverlay.classList.add('hidden'); activeOverlay = null;
    if (filmFrame) cancelAnimationFrame(filmFrame); filmFrame = null;
    const video = $('#preview-content video'); if (video) video.pause();
    $$('.desktop, .dock, .menu-bar').forEach(el => el.inert = false);
    if (restoreFocus && previousFocus?.isConnected) previousFocus.focus({preventScroll:true});
  }
  function openProject(id) {
    const project = PROJECTS.find(p => p.id === id); if (!project) return;
    $('#preview-title').textContent = project.title;
    let media = `<img class="preview-image" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}">`;
    if (project.category === 'videos') {
      media = project.video ? `<video class="preview-image" controls playsinline preload="metadata" poster="${escapeHTML(project.image)}"><source src="${escapeHTML(project.video)}" type="video/mp4">Ваш браузер не поддерживает видео.</video>` : `<div class="preview-video playing" id="motion-player"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}"><div class="film-letterbox top"></div><div class="film-letterbox bottom"></div><div class="film-caption">${escapeHTML(project.caption)}</div><div class="film-controls"><button id="film-toggle" aria-label="Пауза">Ⅱ</button><div class="film-progress" role="progressbar" aria-label="Воспроизведение этюда" aria-valuemin="0" aria-valuemax="${project.duration}" aria-valuenow="0"><span></span></div><span class="film-time">0:00 / 0:${project.duration}</span></div></div>`;
    }
    $('#preview-content').innerHTML = `${media}<div class="preview-description"><div class="eyebrow">${escapeHTML(project.type)} / ${project.year}${project.demo ? ' / Демо-концепт' : ''}</div><h2>${escapeHTML(project.title)}</h2><p>${escapeHTML(project.description)}</p><div class="preview-meta"><span>${escapeHTML(project.meta)}</span><span>© ${escapeHTML(PORTFOLIO.name)}</span></div></div>`;
    showOverlay('#preview-overlay');
    if (project.category === 'videos' && !project.video) startMotion(project);
  }
  function startMotion(project) {
    let elapsed = 0, last = performance.now(), playing = true;
    const player = $('#motion-player'), toggle = $('#film-toggle'), image = $('img', player);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { playing = false; toggle.textContent = '▶'; toggle.setAttribute('aria-label', 'Воспроизвести'); image.style.animationPlayState = 'paused'; }
    toggle.addEventListener('click', () => {
      if (elapsed >= project.duration) elapsed = 0;
      playing = !playing;
      toggle.textContent = playing ? 'Ⅱ' : '▶'; toggle.setAttribute('aria-label', playing ? 'Пауза' : 'Воспроизвести');
      image.style.animationPlayState = playing ? 'running' : 'paused'; player.classList.toggle('playing', playing);
    });
    function frame(now) {
      if (playing) elapsed = Math.min(project.duration, elapsed + Math.min((now-last)/1000, .1));
      last = now;
      $('.film-progress>span', player).style.width = `${elapsed/project.duration*100}%`;
      $('.film-progress', player).setAttribute('aria-valuenow', String(Math.floor(elapsed)));
      $('.film-time',player).textContent = `0:${String(Math.floor(elapsed)).padStart(2,'0')} / 0:${project.duration}`;
      if (elapsed >= project.duration) { playing = false; toggle.textContent = '↻'; toggle.setAttribute('aria-label','Повторить'); image.style.animationPlayState = 'paused'; }
      filmFrame = requestAnimationFrame(frame);
    }
    filmFrame = requestAnimationFrame(frame);
  }

  let searchIndex = 0;
  let searchMatches = [];
  const searchItems = [
    ...Object.entries(sections).filter(([id]) => id !== 'trash').map(([id,s]) => ({id,type:'section',title:s.title,subtitle:s.subtitle,icon:s.icon})),
    ...PROJECTS.map(p => ({id:p.id,type:'project',title:p.title,subtitle:`${sections[p.category].title} · ${p.type}`,icon:sections[p.category].icon})),
  ];
  function openSearch() { $('#search-input').value = ''; showOverlay('#search-overlay'); renderSearch(); }
  function renderSearch() {
    const term = $('#search-input').value.trim().toLocaleLowerCase('ru'); searchIndex = 0;
    searchMatches = searchItems.filter(p => `${p.title} ${p.subtitle}`.toLocaleLowerCase('ru').includes(term));
    if (!term) searchMatches = searchMatches.slice(0,6);
    $('#search-results').innerHTML = searchMatches.length ? searchMatches.map((p,index) => `<button class="search-result ${index === 0 ? 'selected' : ''}" data-result="${index}">${icon(p.icon)}<span>${escapeHTML(p.title)}<small>${escapeHTML(p.subtitle)}</small></span></button>`).join('') : '<div class="search-empty">Ничего не нашлось. Попробуем другое слово?</div>';
  }
  function selectResult(index) {
    const result = searchMatches[index]; if (!result) return;
    hideOverlay();
    if (result.type === 'section') openWindow(result.id); else openProject(result.id);
  }
  async function copyContact(value, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const input = document.createElement('textarea'); input.value = value; input.style.cssText = 'position:fixed;opacity:0'; document.body.append(input); input.select();
        const copied = document.execCommand('copy'); input.remove(); if (!copied) throw new Error('Copy unavailable');
      }
      notify(`${label} скопирован${label === 'Почта' ? 'а' : ''}. Осталось сказать «привет» ✳︎`);
    } catch { notify('Не удалось скопировать. Контакт можно выделить и скопировать вручную.'); }
  }

  document.addEventListener('click', event => {
    const target = event.target.closest('button, a');
    if (!target) { if (!event.target.closest('.dropdown, .control-panel')) closeMenus(); return; }
    if (target.matches('button') && !target.disabled) clickSound();
    if (target.dataset.open) { hideOverlay(false); openWindow(target.dataset.open); }
    if (target.dataset.project) openProject(target.dataset.project);
    if (target.dataset.filter) { currentFilter = target.dataset.filter; renderPage(); }
    if (target.dataset.result !== undefined) selectResult(Number(target.dataset.result));
    if (target.id === 'copy-email') copyContact(PORTFOLIO.email, 'Почта');
    if (target.id === 'copy-phone') copyContact(PORTFOLIO.phone, 'Телефон');
    if (!target.closest('.dropdown, .control-panel') && !['file-menu-button','view-menu-button','control-button'].includes(target.id)) closeMenus();
  });
  $('#window-close').addEventListener('click', () => closeWindow());
  $('#login-button').addEventListener('click', unlockSession);
  $('#lock-session').addEventListener('click', lockSession);
  $('#lock-control').addEventListener('click', lockSession);
  $('#lock-wallpaper').addEventListener('click', toggleWallpaper);
  $('#window-minimize').addEventListener('click', () => closeWindow(true));
  $('#window-maximize').addEventListener('click', () => { win.classList.toggle('is-maximized'); $('#window-maximize').setAttribute('aria-label', win.classList.contains('is-maximized') ? 'Восстановить размер' : 'Развернуть окно'); });
  $('#go-back').addEventListener('click', () => { if (navigationIndex > 0) openWindow(navigation[--navigationIndex],false); });
  $('#go-forward').addEventListener('click', () => { if (navigationIndex < navigation.length-1) openWindow(navigation[++navigationIndex],false); });
  $('#file-menu-button').addEventListener('click', () => toggleMenu($('#file-menu-button'),$('#file-menu')));
  $('#view-menu-button').addEventListener('click', () => toggleMenu($('#view-menu-button'),$('#view-menu')));
  $('#control-button').addEventListener('click', () => toggleMenu($('#control-button'),$('#control-panel')));
  $('#close-menu-window').addEventListener('click', () => closeWindow());
  $('#reset-layout').addEventListener('click', () => { resetWindow(); closeMenus(); });
  $('#toggle-wallpaper').addEventListener('click', () => { toggleWallpaper(); closeMenus(); });
  $('#wallpaper-control').addEventListener('click', toggleWallpaper);
  $('#toggle-sound').addEventListener('click', () => { toggleSound(); closeMenus(); });
  $('#sound-control').addEventListener('click', toggleSound);
  $('#spotlight-button').addEventListener('click', openSearch);
  $('#window-search').addEventListener('click', openSearch);
  $('#search-close').addEventListener('click', () => hideOverlay());
  $('#preview-close').addEventListener('click', () => hideOverlay());
  $('#trash-button').addEventListener('click', () => openWindow('trash'));
  $$('.overlay').forEach(overlay => overlay.addEventListener('click', e => { if (e.target === overlay) hideOverlay(); }));
  $('#search-input').addEventListener('input', renderSearch);
  $('#search-input').addEventListener('keydown', event => {
    if (event.key === 'Enter') { event.preventDefault(); selectResult(searchIndex); }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault(); if (!searchMatches.length) return;
      searchIndex = (searchIndex + (event.key === 'ArrowDown' ? 1 : -1) + searchMatches.length) % searchMatches.length;
      $$('.search-result').forEach((r,i) => r.classList.toggle('selected', i === searchIndex));
      $$('.search-result')[searchIndex]?.scrollIntoView({block:'nearest'});
    }
  });
  document.addEventListener('keydown', event => {
    if (sessionLocked) {
      if (event.key === 'Enter' && !event.target.closest('#lock-wallpaper')) {
        event.preventDefault(); unlockSession();
      }
      if (event.key === 'Tab') {
        const first = $('#login-button'), last = $('#lock-wallpaper');
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
      return;
    }
    if (event.key === 'Escape') {
      if (activeOverlay) hideOverlay();
      else if ($$('.dropdown, .control-panel').some(el => !el.classList.contains('hidden'))) closeMenus();
      else if (!win.classList.contains('is-closed')) closeWindow();
    }
    if ((event.metaKey || event.ctrlKey) && (event.key.toLowerCase() === 'k' || event.code === 'Space')) { event.preventDefault(); activeOverlay ? hideOverlay() : openSearch(); }
    if ((event.metaKey || event.ctrlKey) && ['1','2','3'].includes(event.key)) { event.preventDefault(); hideOverlay(false); openWindow({1:'home',2:'about',3:'contact'}[event.key]); }
    if (event.key === 'Tab' && activeOverlay) {
      const focusable = $$('button:not(:disabled), input, a[href], video[controls]', activeOverlay);
      const first = focusable[0], last = focusable[focusable.length-1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  });

  const dragHandle = $('#window-drag-handle');
  let drag = null;
  dragHandle.addEventListener('pointerdown', event => {
    if (event.target.closest('button') || win.classList.contains('is-maximized') || event.button !== 0 || window.innerWidth <= 800) return;
    const rect = win.getBoundingClientRect(), parentRect = $('.desktop').getBoundingClientRect();
    drag = {x:event.clientX,y:event.clientY,left:rect.left-parentRect.left,top:rect.top-parentRect.top};
    dragHandle.setPointerCapture(event.pointerId); dragHandle.classList.add('dragging');
    event.preventDefault();
  });
  dragHandle.addEventListener('pointermove', event => {
    if (!drag) return;
    const maxLeft = Math.max(0, window.innerWidth-win.offsetWidth);
    const maxTop = Math.max(0, $('.desktop').clientHeight-win.offsetHeight-90);
    win.style.left = `${Math.min(maxLeft, Math.max(0, drag.left+event.clientX-drag.x))}px`;
    win.style.top = `${Math.min(maxTop, Math.max(0, drag.top+event.clientY-drag.y))}px`;
  });
  function stopDrag() { drag = null; dragHandle.classList.remove('dragging'); }
  dragHandle.addEventListener('pointerup', stopDrag); dragHandle.addEventListener('pointercancel',stopDrag);
  dragHandle.addEventListener('dblclick', event => { if (!event.target.closest('button')) $('#window-maximize').click(); });
  window.addEventListener('resize', () => { win.style.left=''; win.style.top=''; });
  window.addEventListener('hashchange', () => {
    const page = location.hash.slice(1);
    if (!sections[page]) return;
    if (sessionLocked) { pendingPage = page; return; }
    if (page !== currentPage) openWindow(page);
  });

  function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString('ru-RU',{weekday:'short',day:'numeric',month:'short'}).replaceAll('.','');
    const time = now.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
    $('#clock').textContent = `${date.charAt(0).toUpperCase()+date.slice(1)}  ${time}`;
    $('#clock').dateTime = now.toISOString();
    $('#lock-time').textContent = time;
    $('#lock-time').dateTime = now.toISOString();
    const lockDate = now.toLocaleDateString('ru-RU', {weekday:'long', day:'numeric', month:'long'});
    $('#lock-date').textContent = lockDate.charAt(0).toUpperCase() + lockDate.slice(1);
  }
  updateClock(); setInterval(updateClock,15000); updateSound();
  $$('[data-open]').forEach(button => {
    if (!button.hasAttribute('aria-label')) button.setAttribute('aria-label', sections[button.dataset.open]?.title || button.textContent.trim());
  });
  const initialPage = location.hash.slice(1);
  if (sections[initialPage]) { currentPage = initialPage; navigation = [initialPage]; }
  renderPage();
  $('#login-name').textContent = PORTFOLIO.name;
  $('#login-button').focus({preventScroll:true});
})();

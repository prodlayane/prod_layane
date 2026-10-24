/* СВОИ ДАННЫЕ — измените этот блок. Сайт работает без сборки и интернета. */
const PORTFOLIO = {
  name: 'prod_layane',
  greeting: 'prod_layane — визуальная практика.',
  role: 'Графический дизайн, изображение и короткая форма.',
  bio: 'Мне близки независимая музыкальная сцена, цифровой андеграунд и журнальная графика. В работах ищу точное соотношение характера и структуры: чтобы образ цеплял сразу, а детали раскрывались при втором взгляде.',
  email: '', // Например: 'name@example.com'. Пустое поле не создаёт фиктивный контакт.
  phone: '+79293734072',
  phoneDisplay: '8 (929) 373-40-72',
  telegram: 'https://t.me/prod_layane',
  behance: '', // Полная ссылка на ваше портфолио
  available: true,
  skills: ['Визуальные системы', 'Обложки и постеры', 'Типографика', 'Арт-дирекшн', 'Монтаж', 'Motion'],
};

const PROJECTS = [
  { id: 'form', title: 'FORM® Studio', category: 'design', folder: 'identity', type: 'Айдентика', year: '2026', image: 'assets/form.svg?v=chrome-2', summary: 'Контрастная типографика и пластичный хром.', description: 'Независимый концепт айдентики для дизайн-студии. В основе — контраст строгой типографики и подвижной хромовой формы. Модульная композиция позволяет сохранять характер системы в постере, обложке и цифровом носителе.', meta: 'Айдентика · Арт-дирекшн', demo: true },
  { id: 'quiet', title: 'Там, где тише', category: 'photos', folder: 'nature', type: 'Визуальные истории', year: '2026', image: 'assets/landscape.svg', summary: 'Ландшафт как работа с масштабом и паузой.', description: 'Иллюстрированный ландшафтный этюд. Здесь важны три плана, смещённая точка внимания и спокойная цветовая дистанция. Работа исследует, как масштаб и свободное пространство создают ощущение тишины без буквального сюжета.', meta: 'Пейзажи · Визуальный дневник', demo: true },
  { id: 'slow', title: 'NO SIGNAL', category: 'design', folder: 'posters', type: 'Графический дизайн', year: '2026', image: 'assets/signal.svg', summary: 'Сигнальный красный и типографический напор.', description: 'Независимый концепт постера для музыкальной сцены. Крупная типографика задаёт напор, красный работает как сигнал, а хромовый знак нарушает плоскость. Задача этюда — передать энергию события до того, как зритель прочитает детали.', meta: 'Постер · Типографика', demo: true },
  { id: 'arches', title: 'Геометрия света', category: 'photos', folder: 'city', type: 'Архитектура', year: '2026', image: 'assets/architecture.svg', summary: 'Повтор, глубина и жёсткий дневной свет.', description: 'Иллюстрированное исследование архитектурного ритма. Повтор арок собирает перспективу, а жёсткий свет разделяет пространство на плоскости. В центре внимания — пропорция, глубина и то, как меняется восприятие пространства.', meta: 'Город · Архитектура', demo: true },
  { id: 'blue-hour', title: 'После заката', category: 'photos', folder: 'nature', type: 'Визуальные истории', year: '2026', image: 'assets/night.svg', summary: 'Сдержанная палитра на границе дня и ночи.', description: 'Вечерний пейзажный этюд с ограниченной палитрой. Несколько тональных слоёв, небольшой источник света и почти пустое небо. Здесь проверяю, сколько информации можно убрать из изображения, сохранив его атмосферу.', meta: 'Пейзажи · Вечерний свет', demo: true },
  { id: 'form-digital', title: 'FORM / Digital', category: 'design', folder: 'digital', type: 'Веб-дизайн', year: '2026', image: 'assets/offgrid.svg', summary: 'Экранная система для независимой студии.', description: 'Концепт цифрового продолжения FORM. Терминальная эстетика и контрастная сетка становятся основой для типографической иерархии. Фокус — на переходе от выразительного первого экрана к понятной системе навигации.', meta: 'Веб-дизайн · Концепт', demo: true },
  { id: 'still-film', title: 'Тишина внутри', category: 'videos', folder: 'motion', type: 'Живой этюд', year: '2026', image: 'assets/landscape.svg', summary: 'Медленное приближение и один точный титр.', description: 'Пятнадцатисекундный motion-этюд на основе иллюстрации. Медленное приближение меняет масштаб кадра, а короткий титр задаёт интонацию. Темп, дистанция и длительность взгляда задают ощущение от этой короткой сцены.', meta: 'Motion study · 15 секунд', duration: 15, caption: 'somewhere, slower.', demo: true },
  { id: 'night-film', title: 'Когда город уснул', category: 'videos', folder: 'motion', type: 'Живой этюд', year: '2026', image: 'assets/night.svg', summary: 'Ночной кадр, собранный вокруг ощущения времени.', description: 'Короткий motion-этюд о переходном свете. Приглушённая палитра и плавное движение работают как единый ритм. Титр остаётся частью композиции и не перетягивает на себя изображение.', meta: 'Motion study · 15 секунд', duration: 15, caption: 'a little closer to yourself.', demo: true },
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
    home: { title: 'Портфолио', subtitle: 'Избранные концепты и визуальные исследования', icon: 'grid' },
    about: { title: 'Обо мне', subtitle: 'Подход, интересы и направления работы', icon: 'user' },
    photos: { title: 'Фото', subtitle: 'Свет, пространство и визуальные наблюдения', icon: 'photo' },
    videos: { title: 'Видео', subtitle: 'Короткая форма, монтаж и атмосфера', icon: 'video' },
    design: { title: 'Дизайн', subtitle: 'Айдентика, постеры и цифровая графика', icon: 'design' },
    contact: { title: 'Контакты', subtitle: 'Обсудить задачу, формат и сроки', icon: 'mail' },
    note: { title: 'прочитай меня.txt', subtitle: 'О том, как устроен этот архив', icon: 'mail' },
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
    $('#login-button-label').textContent = 'Войти';
    $('#login-status').textContent = 'Нажмите для входа';
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
      <div class="project-card-title">${escapeHTML(project.title)}<span>${String(PROJECTS.indexOf(project)+1).padStart(2,'0')} / ${project.year.slice(-2)}</span></div><p class="project-card-description">${escapeHTML(project.summary)}</p></button>`;
  }
  function homePage() {
    return `<div class="page-intro"><div class="eyebrow"><span class="tiny-star"><svg aria-hidden="true"><use href="#i-spark"/></svg></span> ${escapeHTML(PORTFOLIO.name)} / INDEX</div>${PORTFOLIO.available ? '<span class="availability"><i></i> Открыт к коллаборациям</span>' : ''}</div>
      <div class="hero"><h1>Графика.<br><em>Кадр. Ритм.</em></h1><p class="hero-description">Визуальная практика на пересечении музыкальной культуры,<br><b>цифровой среды и редакционного дизайна.</b></p><span class="hero-flower" aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span></div>
      <div class="section-heading"><h2>Избранное</h2><span>SELECTED / 01—03</span></div>
      <div class="project-grid">${PROJECTS.slice(0,3).map(card).join('')}</div>
      <div class="home-divider"></div><div class="home-bottom"><div class="home-note"><span class="note-star" aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><p>Сначала — идея и контекст.<br><small>Потом — система, которая держит характер во всех форматах.</small></p></div><button class="contact-button" data-open="contact">Обсудить проект ${icon('arrow')}</button></div>
      <p class="demo-footnote">Независимые концепты и визуальные исследования / 2026</p>`;
  }
  const categories = {
    photos: { label: 'PHOTOGRAPHY', heading: 'Наблюдать внимательнее.', description: 'Городская геометрия, пустые пространства и меняющийся свет. Пока здесь — иллюстрированные наблюдения; со временем они станут отправной точкой для фотографических серий.', filters: [['all','Всё'],['nature','Природа'],['city','Город']] },
    design: { label: 'ART & DESIGN', heading: 'Графика с позицией.', description: 'Обложки, постеры и айдентика для культурных проектов. Исследую, как типографика, материал и контраст складываются в язык, который узнаётся без подписи.', filters: [['all','Всё'],['identity','Айдентика'],['posters','Постеры'],['digital','Веб-дизайн']] },
    videos: { label: 'MOTION PICTURE', heading: 'Движение задаёт тон.', description: 'Короткие формы о темпе и атмосфере. Плавное движение, выверенная пауза и титр, который работает вместе с кадром, — здесь даже небольшая деталь меняет ощущение от истории.', filters: [['all','Всё'],['motion','Motion-этюды']] },
  };
  function categoryPage(page) {
    const c = categories[page];
    const projects = PROJECTS.filter(p => p.category === page && (currentFilter === 'all' || p.folder === currentFilter));
    return `<div class="page-header"><div class="eyebrow"><span class="archive-led"></span> VISUAL ARCHIVE / ${c.label}<span class="archive-year">2026</span></div><h1>${c.heading}</h1><p>${c.description}</p></div>
      <nav class="subfolder-row" aria-label="Подпапки">${c.filters.map(([key,label]) => `<button class="subfolder ${currentFilter === key ? 'active' : ''}" data-filter="${key}" aria-pressed="${currentFilter === key}">${folderIcon}${label}</button>`).join('')}</nav>
      <div class="section-heading"><h2>${currentFilter === 'all' ? 'Все объекты' : c.filters.find(f => f[0] === currentFilter)?.[1] || 'Работы'}</h2><span>${String(projects.length).padStart(2,'0')} ${plural(projects.length, ['работа','работы','работ'])}</span></div>
      <div class="gallery-grid">${projects.map(card).join('')}</div>`;
  }
  function aboutPage() {
    return `<div class="eyebrow">Портфолио / Обо мне</div><div class="about-layout"><div class="about-portrait"><span aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><small>INDEPENDENT VISUAL PRACTICE</small></div><div class="about-text"><h2>${escapeHTML(PORTFOLIO.greeting)}</h2><p>${escapeHTML(PORTFOLIO.role)}</p><p>${escapeHTML(PORTFOLIO.bio)}</p><div class="skill-tags">${PORTFOLIO.skills.map(s => `<span>${escapeHTML(s)}</span>`).join('')}</div></div></div>
      <div class="about-facts"><div><strong>Контекст</strong><span>От задачи и среды — к визуальной идее.</span></div><div><strong>Система</strong><span>От ключевого образа — к серии носителей.</span></div><div><strong>Характер</strong><span>Деталь, по которой работу можно узнать.</span></div></div>
      <div class="home-divider"></div><div class="home-bottom"><div class="home-note"><span class="note-star"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><p>Ближе всего — культурные и независимые проекты.<br><small>Музыка, события, издательские и цифровые форматы.</small></p></div><button class="contact-button" data-open="contact">Обсудить задачу ${icon('arrow')}</button></div>`;
  }
  function safeLink(value) {
    try { const url = new URL(value); return url.protocol === 'https:' ? escapeHTML(url.href) : ''; } catch { return ''; }
  }
  function contactPage() {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(PORTFOLIO.email) ? PORTFOLIO.email : '';
    const phone = /^\+?[\d\s()-]{7,20}$/.test(PORTFOLIO.phone || '') ? PORTFOLIO.phone.replace(/[^\d+]/g,'') : '';
    const links = [['Telegram',PORTFOLIO.telegram],['Behance',PORTFOLIO.behance]].filter(([,url]) => safeLink(url));
    return `<div class="eyebrow">DIRECT CONTACT / PROD_LAYANE</div><div class="contact-hero"><span class="big-flower" aria-hidden="true"><svg aria-hidden="true"><use href="#i-spark"/></svg></span><h1>Есть задача?<br><em>Начнём с неё.</em></h1><p>Пришли контекст проекта, нужные форматы и сроки.<br>Если есть референсы — приложи их. Обсудим направление и объём работы.</p>
      ${phone ? `<div class="contact-email"><a href="tel:${escapeHTML(phone)}">${escapeHTML(PORTFOLIO.phoneDisplay || phone)}</a><button class="copy-button" id="copy-phone">Скопировать ${icon('arrow')}</button></div>` : ''}
      ${mail ? `<div class="contact-email"><a href="mailto:${escapeHTML(mail)}">${escapeHTML(mail)}</a><button class="copy-button" id="copy-email">Скопировать ${icon('arrow')}</button></div>` : ''}
      ${links.length ? `<div class="contact-links">${links.map(([label,url]) => `<a href="${safeLink(url)}" target="_blank" rel="noopener noreferrer">${label}${icon('arrow')}</a>`).join('')}</div>` : ''}
      ${!mail && !phone && !links.length ? '<p class="contact-placeholder">Это твоё портфолио. Добавь контакты в начале script.js — они появятся здесь автоматически.</p>' : ''}</div>`;
  }
  function notePage() {
    return `<div class="eyebrow">Заметка к архиву · прочитай меня.txt</div><h1>Что остаётся за кадром.</h1><p>Меня цепляют вещи с собственным голосом: обложка из маленького музыкального лейбла, случайный кадр на пустой улице, шрифт с неидеальным ритмом. Такие находки часто оказываются началом работы.</p><p>Этот архив — способ держать их рядом и проверять идеи на практике. Сейчас в папках — независимые концепты и визуальные этюды. Здесь можно проследить ход идеи, композиционные решения и поиск своего языка.</p><p>В дизайне мне интересен переход от одного сильного образа к системе: как он живёт на постере, в движении и на экране. В изображении — точка, где свет и композиция уже рассказывают историю.</p><p>Если у твоего проекта похожая оптика — пиши. Интереснее всего находить общий язык ещё до первого макета.</p><div class="note-sign">${escapeHTML(PORTFOLIO.name)} / заметки к визуальной практике</div>`;
  }
  function plural(n, words) { return n % 10 === 1 && n % 100 !== 11 ? words[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? words[1] : words[2]; }
  function renderPage() {
    content.classList.toggle('note-page', currentPage === 'note');
    content.dataset.page = currentPage;
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
    $('#status-label').textContent = categories[currentPage] ? `${count} ${plural(count,['объект','объекта','объектов'])} · ${currentFilter === 'all' ? 'все папки' : 'подпапка'}` : currentPage === 'home' ? '4 папки · личный архив' : currentPage === 'trash' ? '0 объектов · всё важное сохранено' : '1 объект · личный архив';
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
      notify(`${label} скопирован${label === 'Почта' ? 'а' : ''}.`);
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
  $('#login-avatar-button').addEventListener('click', unlockSession);
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
        const first = $('#login-avatar-button'), last = $('#lock-wallpaper');
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

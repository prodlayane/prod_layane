/* Free desktop placement. Stored coordinates are normalized to the usable area. */
(() => {
  'use strict';
  const desktop = document.querySelector('.desktop');
  const folders = desktop.querySelector('.desktop-folders');
  const items = [...folders.querySelectorAll('.desktop-item')];
  const media = matchMedia('(min-width: 801px) and (pointer: fine)');
  const storageKey = 'portfolio-desktop-layout-v1';
  const defaults = {
    about: {x: .09, y: .16},
    photos: {x: .76, y: .09},
    videos: {x: .63, y: .49},
    design: {x: .25, y: .67},
    note: {x: .89, y: .78},
  };
  const freshPositions = () => Object.fromEntries(Object.entries(defaults).map(([key, value]) => [key, {...value}]));
  let positions = freshPositions();
  let drag = null;
  let suppressClickFor = null;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved?.version === 1 && saved.positions && typeof saved.positions === 'object') {
      for (const key of Object.keys(defaults)) {
        const point = saved.positions[key];
        if (point && Number.isFinite(point.x) && Number.isFinite(point.y) && point.x >= 0 && point.x <= 1 && point.y >= 0 && point.y <= 1) {
          positions[key] = {x: point.x, y: point.y};
        }
      }
    }
  } catch { /* A denied or damaged storage entry does not prevent using the desktop. */ }

  function workArea(item) {
    const dockClearance = Math.max(104, document.querySelector('.dock').offsetHeight + 32);
    return {
      minX: 18,
      maxX: Math.max(18, desktop.clientWidth - item.offsetWidth - 18),
      minY: 18,
      maxY: Math.max(18, desktop.clientHeight - item.offsetHeight - dockClearance),
    };
  }
  function place(item, x, y, area = workArea(item)) {
    const point = {x: clamp(x, area.minX, area.maxX), y: clamp(y, area.minY, area.maxY)};
    item.style.left = `${point.x}px`;
    item.style.top = `${point.y}px`;
    return point;
  }
  function applyPosition(item) {
    const area = workArea(item);
    const point = positions[item.dataset.open];
    place(item, area.minX + point.x * (area.maxX - area.minX), area.minY + point.y * (area.maxY - area.minY), area);
  }
  function announce(message) {
    document.querySelector('#folder-layout-status').textContent = message;
  }
  function savePosition(item) {
    const area = workArea(item);
    positions[item.dataset.open] = {
      x: area.maxX === area.minX ? 0 : clamp((parseFloat(item.style.left) - area.minX) / (area.maxX - area.minX), 0, 1),
      y: area.maxY === area.minY ? 0 : clamp((parseFloat(item.style.top) - area.minY) / (area.maxY - area.minY), 0, 1),
    };
    try {
      localStorage.setItem(storageKey, JSON.stringify({version: 1, positions}));
    } catch {
      announce('Папка перемещена. Сохранение расположения недоступно в этом браузере.');
      return;
    }
    announce(`Расположение папки «${item.getAttribute('aria-label') || item.textContent.trim()}» сохранено.`);
  }
  function suppressNextClick(item) {
    suppressClickFor = item;
  }
  function finishDrag(cancelled = false) {
    if (!drag) return;
    const finished = drag;
    drag = null;
    finished.item.classList.remove('is-folder-dragging');
    if (finished.moved) {
      suppressNextClick(finished.item);
      if (cancelled) applyPosition(finished.item);
      else savePosition(finished.item);
    }
    if (finished.item.hasPointerCapture(finished.pointerId)) finished.item.releasePointerCapture(finished.pointerId);
  }
  function layout() {
    finishDrag(true);
    for (const item of items) {
      if (media.matches) {
        applyPosition(item);
        item.setAttribute('aria-describedby', 'folder-move-help');
        item.title = 'Переместить мышью или Alt + стрелками';
      } else {
        item.style.left = '';
        item.style.top = '';
        item.removeAttribute('aria-describedby');
        item.removeAttribute('title');
      }
    }
  }

  // Consume only the click produced by releasing a drag; ordinary clicks still open folders.
  folders.addEventListener('click', event => {
    const item = event.target.closest('.desktop-item');
    if (item && item === suppressClickFor && event.detail > 0) {
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressClickFor = null;
    }
  }, true);

  for (const item of items) {
    item.draggable = false;
    item.addEventListener('dragstart', event => event.preventDefault());
    item.addEventListener('pointerdown', event => {
      if (!media.matches || desktop.inert || event.button !== 0 || !event.isPrimary || event.pointerType === 'touch') return;
      finishDrag(true);
      suppressClickFor = null;
      drag = {
        item, pointerId: event.pointerId,
        pointerX: event.clientX, pointerY: event.clientY,
        left: parseFloat(item.style.left), top: parseFloat(item.style.top),
        area: workArea(item), moved: false,
      };
      item.setPointerCapture(event.pointerId);
    });
    item.addEventListener('pointermove', event => {
      if (!drag || drag.item !== item || event.pointerId !== drag.pointerId) return;
      const dx = event.clientX - drag.pointerX;
      const dy = event.clientY - drag.pointerY;
      if (!drag.moved && Math.hypot(dx, dy) < 6) return;
      drag.moved = true;
      item.classList.add('is-folder-dragging');
      place(item, drag.left + dx, drag.top + dy, drag.area);
      event.preventDefault();
    });
    item.addEventListener('pointerup', event => { if (drag?.pointerId === event.pointerId) finishDrag(); });
    item.addEventListener('pointercancel', event => { if (drag?.pointerId === event.pointerId) finishDrag(true); });
    item.addEventListener('lostpointercapture', event => { if (drag?.pointerId === event.pointerId) finishDrag(true); });
    item.addEventListener('keydown', event => {
      const direction = {ArrowLeft: [-1,0], ArrowRight: [1,0], ArrowUp: [0,-1], ArrowDown: [0,1]}[event.key];
      if (!media.matches || desktop.inert || !event.altKey || !direction) return;
      event.preventDefault();
      event.stopPropagation();
      finishDrag(true);
      const step = event.shiftKey ? 32 : 16;
      place(item, parseFloat(item.style.left) + direction[0] * step, parseFloat(item.style.top) + direction[1] * step);
      savePosition(item);
    });
  }
  document.addEventListener('keydown', event => {
    if (!drag) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      finishDrag(true);
    } else if (event.metaKey || event.ctrlKey) finishDrag(true);
  }, true);
  document.querySelector('#reset-folders').addEventListener('click', () => {
    finishDrag(true);
    positions = freshPositions();
    try { localStorage.removeItem(storageKey); } catch {}
    layout();
    document.querySelector('#view-menu').classList.add('hidden');
    document.querySelector('#view-menu-button').setAttribute('aria-expanded', 'false');
    announce('Восстановлено исходное расположение папок.');
    document.querySelector('#view-menu-button').focus({preventScroll: true});
  });
  window.addEventListener('resize', layout);
  window.addEventListener('blur', () => finishDrag(true));
  document.addEventListener('visibilitychange', () => { if (document.hidden) finishDrag(true); });
  media.addEventListener('change', layout);
  layout();
})();

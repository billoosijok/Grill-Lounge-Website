(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initLangPicker();
    initReviewsCarousel();
    initFaq();
    initMenuCategories();
    initCookieConsent();
  });

  /* ---------------------------------------------------------------- */
  /* Header: mobile menu toggle                                        */
  /* ---------------------------------------------------------------- */
  function initMobileMenu() {
    var btn = document.getElementById('mobile-menu-btn');
    var nav = document.getElementById('header-nav');
    if (!btn || !nav) return;

    var iconOpen = btn.querySelector('.icon-open');
    var iconClose = btn.querySelector('.icon-close');

    function setOpen(open) {
      nav.classList.toggle('mobile-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (iconOpen) iconOpen.style.display = open ? 'none' : '';
      if (iconClose) iconClose.style.display = open ? '' : 'none';
    }

    btn.addEventListener('click', function () {
      setOpen(!nav.classList.contains('mobile-open'));
    });

    // Close the menu whenever a nav link is followed
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Header: language picker dropdown                                 */
  /* ---------------------------------------------------------------- */
  function initLangPicker() {
    var picker = document.getElementById('lang-picker');
    var trigger = document.getElementById('lang-picker-trigger');
    var menu = document.getElementById('lang-picker-menu');
    if (!picker || !trigger || !menu) return;

    function close() {
      picker.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = picker.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!picker.contains(e.target)) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------------------------------------------------------------- */
  /* Reviews carousel                                                 */
  /* ---------------------------------------------------------------- */
  function initReviewsCarousel() {
    var grid = document.getElementById('reviews-grid');
    var dataEl = document.getElementById('reviews-data');
    if (!grid || !dataEl) return;

    var reviews;
    try { reviews = JSON.parse(dataEl.textContent); } catch (e) { return; }
    if (!reviews || !reviews.length) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('.review-card'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.reviews-dot'));
    var index = 0;

    function render() {
      cards.forEach(function (card, offset) {
        var rev = reviews[(index + offset) % reviews.length];
        if (!rev) return;
        var stars = card.querySelector('.review-stars');
        var comment = card.querySelector('.review-comment');
        var name = card.querySelector('.review-name');
        var date = card.querySelector('.review-date');
        if (stars) stars.textContent = '★'.repeat(rev.rating);
        if (comment) comment.textContent = '"' + rev.comment + '"';
        if (name) name.textContent = rev.name;
        if (date) date.textContent = rev.date;
      });
      dots.forEach(function (dot) {
        var active = parseInt(dot.getAttribute('data-index'), 10) === index;
        dot.style.backgroundColor = active ? 'var(--accent-red)' : '#ccc';
      });
    }

    function prev() { index = index === 0 ? reviews.length - 1 : index - 1; render(); }
    function next() { index = index === reviews.length - 1 ? 0 : index + 1; render(); }

    bind('reviews-prev', prev);
    bind('reviews-next', next);
    bind('reviews-prev-mobile', prev);
    bind('reviews-next-mobile', next);

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        index = parseInt(dot.getAttribute('data-index'), 10) || 0;
        render();
      });
    });

    function bind(id, fn) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', fn);
    }

    render();
  }

  /* ---------------------------------------------------------------- */
  /* FAQ accordion                                                    */
  /* ---------------------------------------------------------------- */
  function initFaq() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.faq-item'));
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (!btn || !answer) return;

      btn.addEventListener('click', function () {
        var willOpen = !item.classList.contains('open');
        // Close all others (matches single-open accordion behaviour)
        items.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            var a = other.querySelector('.faq-answer');
            if (a) { a.style.maxHeight = '0px'; a.style.opacity = '0'; }
          }
        });
        if (willOpen) {
          item.classList.add('open');
          answer.style.maxHeight = '300px';
          answer.style.opacity = '1';
        } else {
          item.classList.remove('open');
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
        }
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Menu page: collapsible categories + hash scrolling               */
  /* ---------------------------------------------------------------- */
  function initMenuCategories() {
    var icons = Array.prototype.slice.call(document.querySelectorAll('.menu-category .category-toggle-icon'));
    if (!icons.length) return;

    function expand(section, on) {
      var header = section.querySelector('.category-header');
      var content = section.querySelector('.category-content');
      var icon = section.querySelector('.category-toggle-icon');
      if (!header || !content) return;
      if (on) {
        content.hidden = false;
        content.classList.add('animate__animated', 'animate__fadeIn', 'animate__faster');
        header.classList.add('expanded');
        if (icon) icon.textContent = '▲';
      } else {
        content.hidden = true;
        header.classList.remove('expanded');
        if (icon) icon.textContent = '▼';
      }
    }

    icons.forEach(function (icon) {
      var section = icon.closest('.menu-category');
      var header = section ? section.querySelector('.category-header') : null;
      if (!header) return;
      header.addEventListener('click', function () {
        var content = section.querySelector('.category-content');
        expand(section, content ? content.hidden : true);
      });
    });

    // Hash deep-link: open the target category and scroll to it
    if (window.location.hash) {
      var id = window.location.hash.replace('#', '');
      var target = document.getElementById(id);
      if (target && target.classList.contains('menu-category')) {
        expand(target, true);
        setTimeout(function () {
          var y = target.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }

  /* ---------------------------------------------------------------- */
  /* Cookie consent banner                                            */
  /* ---------------------------------------------------------------- */
  function initCookieConsent() {
    var banner = document.getElementById('cookie-consent-banner');
    if (!banner) return;

    function show() {
      banner.hidden = false;
      banner.classList.remove('cookie-consent-exit');
      banner.classList.add('animate-slide-up');
    }

    function hide() {
      banner.classList.add('cookie-consent-exit');
      setTimeout(function () { banner.hidden = true; }, 400);
    }

    function updateConsent(choice) {
      try { localStorage.setItem('cookie-consent-choice', choice); } catch (e) {}
      var state = choice === 'accepted' ? 'granted' : 'denied';
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'ad_storage': state,
          'ad_user_data': state,
          'ad_personalization': state,
          'analytics_storage': state
        });
      }
      hide();
    }

    var choice = null;
    try { choice = localStorage.getItem('cookie-consent-choice'); } catch (e) {}
    if (!choice) show();

    banner.querySelectorAll('[data-consent]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        updateConsent(btn.getAttribute('data-consent'));
      });
    });

    // "Manage cookies" link in the footer re-opens the banner
    document.querySelectorAll('.manage-cookies-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        show();
      });
    });
  }
})();

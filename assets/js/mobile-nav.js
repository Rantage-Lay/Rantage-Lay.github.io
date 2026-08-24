/* ============================================================
   Mobile navigation toggle (hamburger menu)
   Click: menu slides open; click again: menu slides away.
   ============================================================ */
(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('top-navigation');

  if (!toggle || !nav) { return; }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

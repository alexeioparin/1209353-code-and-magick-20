'use strict';

window.debounce = (function () {
  var DEBOUNCE_INTERVAL = 500;

  var lastTimeout;
  var windowDebounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };

  return {
    windowDebounce: windowDebounce,
  };
})();

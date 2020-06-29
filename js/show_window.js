'use strict';

window.showWindow = (function () {

  /* Показ-скрытие окна настроек */

  window.setup.userAvatar.addEventListener('click', function () {
    window.setup.openSetupWindow();
  });

  window.setup.userAvatar.addEventListener('keydown', function (evt) {
    if (evt.key === window.setup.ENTER_KEY) {
      window.setup.openSetupWindow();
    }
  });

  window.setup.closeButton.addEventListener('click', function () {
    window.setup.closeSetupWindow();
  });

  window.setup.closeButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.setup.ENTER_KEY) {
      window.setup.closeSetupWindow();
    }
  });
})();

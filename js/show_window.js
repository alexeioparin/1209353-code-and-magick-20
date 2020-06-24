'use strict';

window.showWindow = (function () {

  /* Отрисовка списка магов */

  window.wizardLoader.wizardList.appendChild(window.wizardLoader.setWizardElement(window.setup.wizards));

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

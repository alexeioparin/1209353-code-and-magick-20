'use strict';

window.wizardLoader = (function () {

  document.querySelector('.setup-similar').classList.remove('hidden');


  // Обновление списка магов

  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.setup.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.setup.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.renderWizard(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  // Отображение окна ошибок

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  // Отправка формы на сервер

  var userForm = window.setup.setupBlock.querySelector('.setup-wizard-form');
  var submitHandler = function (evt) {
    window.backend.save(new FormData(userForm), successHandler, errorHandler);

    evt.preventDefault();
    window.setup.closeSetupWindow();
  };

  userForm.addEventListener('submit', submitHandler);

  return {
    successHandler: successHandler,
    updateWizards: updateWizards,
  };
})();

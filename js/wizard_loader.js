'use strict';

window.wizardLoader = (function () {

  document.querySelector('.setup-similar').classList.remove('hidden');

  // Формирование свойств мага

  var wizardList = document.querySelector('.setup-similar-list');
  var getWizardElement = function (userDescription) {
    var wizardElement = window.setup.template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = userDescription.name;
    wizardElement.querySelector('.wizard-coat').style.fill = userDescription.colorCoat;
    return wizardElement;
  };

  // Отрисовка DOM элемента

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.setup.WIZARD_NUMBER; i++) {
      fragment.appendChild(getWizardElement(wizards[window.setup.getRandom(wizards)]));
    }
    wizardList.appendChild(fragment);

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
    wizardList: wizardList,
    getWizardElement: getWizardElement,
  };
})();

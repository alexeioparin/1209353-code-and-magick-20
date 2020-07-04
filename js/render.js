'use strict';

window.render = (function () {

  // Формирование свойств мага

  var wizardList = document.querySelector('.setup-similar-list');
  var getWizardElement = function (userDescription) {
    var loadedWizard = window.setup.template.cloneNode(true);
    loadedWizard.querySelector('.setup-similar-label').textContent = userDescription.name;
    loadedWizard.querySelector('.wizard-coat').style.fill = userDescription.colorCoat;
    loadedWizard.querySelector('.wizard-eyes').style.fill = userDescription.colorEyes;
    return loadedWizard;
  };

  // Отрисовка DOM элемента

  var renderWizard = function (wizards) {
    var fragment = document.createDocumentFragment();
    var takeNumber = wizards.length > window.setup.WIZARD_NUMBER ? window.setup.WIZARD_NUMBER : wizards.length;
    wizardList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(getWizardElement(wizards[i]));
    }
    wizardList.appendChild(fragment);
  };

  return {
    getWizardElement: getWizardElement,
    renderWizard: renderWizard,
    wizardList: wizardList,
  };
})();

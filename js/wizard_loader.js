'use strict';

window.wizardLoader = (function () {

  /* Формирование списка свойств магов */

  for (var i = 0; i < window.setup.WIZARD_NUMBER; i++) {
    var wizard = {};
    window.setup.randNumOne = window.setup.getRandom(window.setup.USERS_NAMES_COPY);
    window.setup.randNumTwo = window.setup.getRandom(window.setup.USERS_SURNAMES_COPY);
    wizard.name = window.setup.USERS_NAMES_COPY[window.setup.randNumOne] + ' ' + window.setup.USERS_SURNAMES_COPY[window.setup.randNumTwo];
    window.setup.USERS_NAMES_COPY.splice(window.setup.randNumOne, 1);
    window.setup.USERS_SURNAMES_COPY.splice(window.setup.randNumTwo, 1);
    window.setup.randNumOne = window.setup.getRandom(window.setup.COLORS_COPY);
    wizard.coatColor = window.setup.COLORS_COPY[window.setup.randNumOne];
    window.setup.COLORS_COPY.splice(window.setup.randNumOne, 1);
    window.setup.randNumOne = window.setup.getRandom(window.setup.EYES_COPY);
    wizard.eyesColor = window.setup.EYES_COPY[window.setup.randNumOne];
    window.setup.EYES_COPY.splice(window.setup.randNumOne, 1);
    window.setup.wizards[i] = wizard;
  }

  document.querySelector('.setup-similar').classList.remove('hidden');

  return {

    /* Формирование свойств мага */

    wizardList: document.querySelector('.setup-similar-list'),
    getWizardElement: function (userDescription) {
      var wizardElement = window.setup.template.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = userDescription.name;
      wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill: ' + userDescription.coatColor);
      wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: ' + userDescription.eyesColor);
      return wizardElement;
    },

    /* Отрисовка DOM элемента */

    setWizardElement: function (allWizards) {
      var fragment = document.createDocumentFragment();
      for (i = 0; i < allWizards.length; i++) {
        fragment.appendChild(window.wizardLoader.getWizardElement(allWizards[i]));
      }
      return fragment;
    }
  };
})();

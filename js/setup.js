'use strict';

var USERS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var USERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;
var wizards = [];
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandom = function (mass) {
  return Math.floor(Math.random() * mass.length);
};
var b = getRandom(USERS_NAMES);
var c = getRandom(USERS_SURNAMES);

/* Формирование списка свойств магов */

for (var i = 0; i < WIZARD_NUMBER; i++) {
  var wizard = {};
  wizard.name = USERS_NAMES[b] + ' ' + USERS_SURNAMES[c];
  USERS_NAMES.splice(b, 1);
  USERS_SURNAMES.splice(c, 1);
  b = getRandom(COLORS);
  wizard.coatColor = COLORS[b];
  COLORS.splice(b, 1);
  b = getRandom(EYES);
  wizard.eyesColor = EYES[b];
  EYES.splice(b, 1);
  wizards[i] = wizard;
}

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

/* Создание DOM элемента из объекта */

var wizardList = document.querySelector('.setup-similar-list');
var getWizardElement = function (userDescription) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = userDescription.name;
  wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill: ' + userDescription.coatColor);
  wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: ' + userDescription.eyesColor);
  return wizardElement;
};

/* Отрисовка DOM элемента */

var setWizardElement = function (allWizards) {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < allWizards.length; i++) {
    fragment.appendChild(getWizardElement(allWizards[i]));
  }
  return fragment;
};

wizardList.appendChild(setWizardElement(wizards));

document.querySelector('.setup-similar').classList.remove('hidden');

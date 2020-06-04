'use strict';

var USERS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var USERS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

for (var i = 0; i < 4; i++) {
  var wizard = {};
  var getRandom = function (mass) {
    return Math.floor(Math.random() * mass.length);
  };
  var b = getRandom(USERS_NAME);
  var c = getRandom(USERS_SURNAME);
  wizard.name = USERS_NAME[b] + ' ' + USERS_SURNAME[c];
  USERS_NAME.splice(b, 1);
  USERS_SURNAME.splice(c, 1);
  b = getRandom(COLOR);
  wizard.coatColor = COLOR[b];
  COLOR.splice(b, 1);
  b = getRandom(EYES);
  wizard.eyesColor = EYES[b];
  EYES.splice(b, 1);
  wizards[i] = wizard;
}

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');


var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardList = document.querySelector('.setup-similar-list');
var getWizardElement = function (obj) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = obj.name;
  wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill: ' + obj.coatColor);
  wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: ' + obj.eyesColor);
  return wizardElement;
};

var setWizardElement = function (mass) {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < mass.length; i++) {
    fragment.appendChild(getWizardElement(mass[i]));
  }
  return fragment;
};

wizardList.appendChild(setWizardElement(wizards));

document.querySelector('.setup-similar').classList.remove('hidden');

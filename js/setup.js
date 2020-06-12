'use strict';

var USERS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var USERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBER = 4;
var wizards = [];
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupBlock = document.querySelector('.setup');
var userAvatar = document.querySelector('.setup-open');
var closeButton = setupBlock.querySelector('.setup-close');
var userNameInput = setupBlock.querySelector('.setup-user-name');
var wizardCoatColor = document.querySelector('.wizard-coat');
var wizardEyesColor = document.querySelector('.wizard-eyes');
var fireBallColor = document.querySelector('.setup-fireball-wrap');
var setupInputs = document.querySelectorAll('.setup-player input');
var getRandom = function (mass) {
  return Math.floor(Math.random() * mass.length);
};

var getCopyMass = function (mass) {
  var newMass = [];
  for (var i = 0; i < mass.length; i++) {
    newMass[i] = mass[i];
  }
  return newMass;
};
var onSetupWindowEsc = function (evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    setupBlock.classList.add('hidden');
  }
};
var onFocusInputEvent = function () {
  setupBlock.removeEventListener('keydown', onSetupWindowEsc);
};
var outFocusInputEvent = function () {
  setupBlock.addEventListener('keydown', onSetupWindowEsc);
};
var openSetupWindow = function () {
  setupBlock.classList.remove('hidden');
  setupBlock.addEventListener('keydown', onSetupWindowEsc);
  userNameInput.addEventListener('focus', onFocusInputEvent);
  userNameInput.addEventListener('blur', outFocusInputEvent);

};
var closeSetupWindow = function () {
  setupBlock.classList.add('hidden');
  setupBlock.removeEventListener('keydown', onSetupWindowEsc);
  userNameInput.removeEventListener('focus', onFocusInputEvent);
  userNameInput.removeEventListener('blur', outFocusInputEvent);
};

/* Формирование списка свойств магов */

var massOne = getCopyMass(USERS_NAMES);
var massTwo = getCopyMass(USERS_SURNAMES);
var massThree = getCopyMass(COLORS);
var massFour = getCopyMass(EYES);

for (var i = 0; i < WIZARD_NUMBER; i++) {
  var wizard = {};
  var b = getRandom(massOne);
  var c = getRandom(massTwo);
  wizard.name = massOne[b] + ' ' + massTwo[c];
  massOne.splice(b, 1);
  massTwo.splice(c, 1);
  b = getRandom(massThree);
  wizard.coatColor = massThree[b];
  massThree.splice(b, 1);
  b = getRandom(massFour);
  wizard.eyesColor = massFour[b];
  massFour.splice(b, 1);
  wizards[i] = wizard;
}

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

document.querySelector('.setup-similar').classList.remove('hidden');
wizardList.appendChild(setWizardElement(wizards));

/* Показ-скрытие окна настроек */

userAvatar.addEventListener('click', function () {
  openSetupWindow();
});

userAvatar.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openSetupWindow();
  }
});

closeButton.addEventListener('click', function () {
  closeSetupWindow();
});

closeButton.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeSetupWindow();
  }
});

/* Изменение внешнего вида персонажа + запись данных в инпуты */

var setEventAttribute = function (elmnt, attr, massColors, inputNum) {
  elmnt.addEventListener('click', function () {
    c = massColors[getRandom(massColors)];
    elmnt.setAttribute('style', attr + ': ' + c);
    setupInputs[inputNum].value = c;
  });
};

setEventAttribute(wizardCoatColor, 'fill', COLORS, 0);
setEventAttribute(wizardEyesColor, 'fill', EYES, 1);
setEventAttribute(fireBallColor, 'background', FIREBALL_COLORS, 2);

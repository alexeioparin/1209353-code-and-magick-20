'use strict';

window.setup = (function () {
  var USERS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var USERS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBER = 4;
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var USERS_NAMES_COPY = USERS_NAMES.slice();
  var USERS_SURNAMES_COPY = USERS_SURNAMES.slice();
  var COLORS_COPY = COLORS.slice();
  var EYES_COPY = EYES.slice();

  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupBlock = document.querySelector('.setup');
  var userAvatar = document.querySelector('.setup-open-icon');
  var closeButton = document.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var wizardCoatColor = document.querySelector('.wizard-coat');
  var wizardEyesColor = document.querySelector('.wizard-eyes');
  var fireBallColor = document.querySelector('.setup-fireball-wrap');
  var setupInputs = document.querySelectorAll('.setup-player input');
  var wizardList = document.querySelector('.setup-similar-list');
  var randNumOne;
  var randNumTwo;

  var onSetupWindowEsc = function (evt) {
    evt.preventDefault();
    if (evt.key === ESC_KEY) {
      setupBlock.style = 'none';
      closeSetupWindow();
    }
  };

  var openSetupWindow = function () {
    setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', window.setup.onSetupWindowEsc);
    userNameInput.addEventListener('focus', window.setup.onFocusInputEvent);
    userNameInput.addEventListener('blur', window.setup.outFocusInputEvent);
  };

  var closeSetupWindow = function () {
    setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', window.setup.onSetupWindowEsc);
    userNameInput.removeEventListener('focus', window.setup.onFocusInputEvent);
    userNameInput.removeEventListener('blur', window.setup.outFocusInputEvent);
    setupBlock.style = 'none';
  };

  return {
    USERS_NAMES: USERS_NAMES,
    USERS_SURNAMES: USERS_SURNAMES,
    COLORS: COLORS,
    EYES: EYES,
    FIREBALL_COLORS: FIREBALL_COLORS,
    WIZARD_NUMBER: WIZARD_NUMBER,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    setupBlock: setupBlock,
    getRandom: function (mass) {
      return Math.floor(Math.random() * mass.length);
    },
    onSetupWindowEsc: onSetupWindowEsc,
    onFocusInputEvent: function () {
      document.removeEventListener('keydown', window.setup.onSetupWindowEsc);
    },
    outFocusInputEvent: function () {
      document.addEventListener('keydown', window.setup.onSetupWindowEsc);
    },
    openSetupWindow: openSetupWindow,
    closeSetupWindow: closeSetupWindow,
    USERS_NAMES_COPY: USERS_NAMES_COPY,
    USERS_SURNAMES_COPY: USERS_SURNAMES_COPY,
    COLORS_COPY: COLORS_COPY,
    EYES_COPY: EYES_COPY,
    template: template,
    userAvatar: userAvatar,
    closeButton: closeButton,
    userNameInput: userNameInput,
    wizardCoatColor: wizardCoatColor,
    wizardEyesColor: wizardEyesColor,
    setupInputs: setupInputs,
    randNumOne: randNumOne,
    randNumTwo: randNumTwo,
    wizardList: wizardList,
    fireBallColor: fireBallColor,
  };
})();

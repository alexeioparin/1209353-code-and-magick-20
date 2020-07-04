'use strict';

window.wizardRedactor = (function () {

  var wizardCoatColor = document.querySelector('.wizard-coat');
  var wizardEyesColor = document.querySelector('.wizard-eyes');
  var fireBallColor = document.querySelector('.setup-fireball-wrap');

  /* Изменение внешнего вида персонажа + запись данных в инпуты */

  var setEventAttribute = function (elmnt, attr, massColors, inputNum) {
    elmnt.addEventListener('click', function (evt) {
      var randNum = massColors[window.setup.getRandom(massColors)];
      if (evt.target.classList.contains('wizard-coat')) {
        window.setup.coatColor = randNum;
      } else if (evt.target.classList.contains('wizard-eyes')) {
        window.setup.eyesColor = randNum;
      }
      elmnt.setAttribute('style', attr + ': ' + randNum);
      window.setup.setupInputs[inputNum].value = randNum;
      window.debounce.windowDebounce(window.wizardLoader.updateWizards);
    });
  };

  setEventAttribute(wizardCoatColor, 'fill', window.setup.COLORS, 0);
  setEventAttribute(wizardEyesColor, 'fill', window.setup.EYES, 1);
  setEventAttribute(fireBallColor, 'background', window.setup.FIREBALL_COLORS, 2);

  return {
    setEventAttribute: setEventAttribute,
  };
})();

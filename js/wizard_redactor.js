'use strict';

window.wizardRedactor = (function () {
  /* Изменение внешнего вида персонажа + запись данных в инпуты */

  var setEventAttribute = function (elmnt, attr, massColors, inputNum) {
    elmnt.addEventListener('click', function () {
      window.setup.randNumTwo = massColors[window.setup.getRandom(massColors)];
      elmnt.setAttribute('style', attr + ': ' + window.setup.randNumTwo);
      window.setup.setupInputs[inputNum].value = window.setup.randNumTwo;
    });
  };

  setEventAttribute(window.setup.wizardCoatColor, 'fill', window.setup.COLORS, 0);
  setEventAttribute(window.setup.wizardEyesColor, 'fill', window.setup.EYES, 1);
  setEventAttribute(window.setup.fireBallColor, 'background', window.setup.FIREBALL_COLORS, 2);
})();

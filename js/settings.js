'use strict';

window.settings = (function () {
  var fireballSize = 22;
  var wizardSpeed = 3;
  var wizardWidth = 70;
  return {
    fireballSize: fireballSize,
    getFireballSpeed: function (isWindLeft) {
      if (isWindLeft) {
        return 5;
      }
      return 2;
    },
    wizardSpeed: wizardSpeed,
    wizardWidth: wizardWidth,
    getWizardHeight: function () {
      return 1.337 * window.settings.wizardWidth;
    },
    getWizardX: function (screenX) {
      return (screenX - window.settings.wizardWidth) / 2;
    },
    getWizardY: function (screenY) {
      return screenY / 3;
    },
  };
})();

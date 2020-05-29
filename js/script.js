<script type="text/javascript">
  var fireballSize = 22;
  var getFireballSpeed  = function (isWindLeft) {
    if (isWindLeft) {
      return 5;
    }
    return 2;
  }
  var wizardSpeed = 3;
  var wizardWidth = 70;
  var getWizardHeight = function () {
    return 1.337 * wizardWidth;
  };
  var getWizardX = function (screenX) {
    return (screenX - wizardWidth) / 2;
  };
  var getWizardY = function (screenY) {
    return screenY / 3;
  };
</script>

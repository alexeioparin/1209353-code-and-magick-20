'use strict';

window.stat = (function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var TEXT_GAP = 20;
  var UPPER_BORDER = CLOUD_X + 40;
  var LEFT_BORDER = CLOUD_Y + 30;
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = BAR_WIDTH + 50;

  return {
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    GAP: GAP,
    TEXT_GAP: TEXT_GAP,
    UPPER_BORDER: UPPER_BORDER,
    LEFT_BORDER: LEFT_BORDER,
    BAR_MAX_HEIGHT: BAR_MAX_HEIGHT,
    BAR_WIDTH: BAR_WIDTH,
    BAR_GAP: BAR_GAP,
    renderCloud: function (ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
    },
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    },
    renderStatistics: function (ctx, players, times) {
      window.stat.renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
      window.stat.renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

      var maxTime = window.stat.getMaxElement(times);

      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.textBaseline = 'hanging';
      ctx.fillText('Ура вы победили!', UPPER_BORDER, LEFT_BORDER);
      ctx.fillText('Список результатов:', UPPER_BORDER, LEFT_BORDER + TEXT_GAP);

      for (var i = 0; i < players.length; i++) {
        ctx.fillStyle = '#000';
        ctx.fillText(players[i], UPPER_BORDER + BAR_GAP * i, LEFT_BORDER + TEXT_GAP * 3 + BAR_MAX_HEIGHT + 10);
        var timeY = LEFT_BORDER + TEXT_GAP * 2 + 5 + BAR_MAX_HEIGHT - BAR_MAX_HEIGHT * times[i] / maxTime;
        ctx.fillText(Math.round(times[i]), UPPER_BORDER + BAR_GAP * i, timeY);
        var color = 'hsl(250, ' + Math.random() * 100 + '%, 50%)';
        ctx.fillStyle = color;
        if (players[i] === 'Вы') {
          ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }
        ctx.fillRect(UPPER_BORDER + BAR_GAP * i, timeY + 20, BAR_WIDTH, BAR_MAX_HEIGHT * times[i] / maxTime);
      }
    },
  };
})();

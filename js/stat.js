'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var X0 = CLOUD_X + 40;
var Y0 = CLOUD_Y + 30;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = BAR_WIDTH + 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', X0, Y0);
  ctx.fillText('Список результатов:', X0, Y0 + TEXT_GAP);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], X0 + BAR_GAP * i, Y0 + TEXT_GAP * 3 + BAR_MAX_HEIGHT + 10);
    var timeY = Y0 + TEXT_GAP * 2 + 5 + BAR_MAX_HEIGHT - BAR_MAX_HEIGHT * times[i] / maxTime;
    ctx.fillText(Math.round(times[i]), X0 + BAR_GAP * i, timeY);
    var color = 'hsl(250, ' + Math.random() * 100 + '%, 50%)';
    ctx.fillStyle = color;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(X0 + BAR_GAP * i, timeY + 20, BAR_WIDTH, BAR_MAX_HEIGHT * times[i] / maxTime);
  }
};

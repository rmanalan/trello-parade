/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;


var GLITCH_ICON = 'https://cdn.glitch.com/2442c68d-7b6d-4b69-9d13-feab530aa88e%2Fglitch-icon.svg?1489773457908';
var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';
var ICON = 'https://cdn.glitch.com/20b7855b-f793-4f8c-9f47-bea23ab59e22%2Ftrain-svgrepo-com.svg?1551478558347';

var boardButtonCallback = function(t){
  return t.modal({
    url: '/modal.html',
  });
};

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return {
      // we can either provide a button that has a callback function
      // that callback function should probably open a popup, overlay, or boardBar
      icon: WHITE_ICON,
      text: 'Popup',
      callback: boardButtonCallback
    };
  }
});

console.log('Loaded by: ' + document.referrer);

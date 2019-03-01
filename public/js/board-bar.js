/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// want to know when you are being closed?
window.addEventListener('unload', function(e) {
  // Our board bar is being closed, clean up if we need to
});

t.render(async function(){
  await t.modal({
    url:'https://trello.com'
  });
});

// server.js
// where your node app starts

var compression = require('compression');
var cors = require('cors');
var express = require('express');
var app = express();

// compress our client side content before sending it over the wire
app.use(compression());

// your manifest must have appropriate CORS headers, you could also use '*'
app.use(cors({ origin: 'https://trello.com' }));


app.use(function (request, response, next) {
  if (request.url=='/js/client.js' && process.env.TRELLO_API_KEY){
    request.url = 'public/js/client.js?apiKey=' + process.env.TRELLO_API_KEY;    
  }
  next();
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.info(`Node Version: ${process.version}`);
  console.log('Trello Power-Up Server listening on port ' + listener.address().port);
});
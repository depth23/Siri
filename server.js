var http = require('http');
var server = http.createServer();
server.listen(8887);
 var messages = 
     ["Hello there.", 
      "I'm sorry, I cannot take any requests at this time.", 
      "I can tell you how to do that."
     ];

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomMessage() {
        returnMessages[getRandomInt(0, messages.length)]
}

server.on('request', function(request, response) {
    switch(request.method) {
        case "OPTION":
            response.writeHead(200, {
              'Connection': 'close',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
});
response.end();
        case "GET": 
             response.writeHead(200, {
              'Connection': 'close',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
});
            var myMessage = {message: getRandomMessage()}
            response.end(JSON.stringify(myMessage))
            break   
        default:
            var errMessage = {error: "I didn't understand that"}
            response.end(JSON.stringify(errMessage))
     }
})
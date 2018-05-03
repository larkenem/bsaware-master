var twilio = require('twilio');
var http = require('http');
var url = require('url');

var port = 3000;

var server = http.createServer(function(request, response) {
    var parts = url.parse(request.url, true);
    var query = parts.query;
    console.log(query);

// Find your account sid and auth token in your Twilio account Console.
    var client = new twilio('AC3641607f7e02ec8b25507076db76db7c', '8648eebdc776306c0c5fa57dd0734177');
    
    // Send the text message.
    client.messages.create ({
        to: '8284065178',
        from: '8284577834',
        body: query.comments
    });

    client.messages.create ({
        to: '8284065178',
        from: '8284577834',
        body: query.address
    })

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end("We sent a message!");
    
});

server.listen(port, function(err) {
    console.log("Listening on port" + port);
});
[]
//need to pull #condition-input text from modal box and push to the actual text message

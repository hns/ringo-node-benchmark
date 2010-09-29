var {Server} = require('ringo/httpserver');
var json = require('./common').json;

Server({
    app: function(request) {
        JSON.parse(json);
        return {
            status: 200,
            headers: {"Content-Type": "text/plain"},
            body: [json]
        };
    },
    port: 8001
}).start();


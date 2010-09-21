var {Server} = require('ringo/httpserver');

Server({
    app: function(request) {
        return {
            status: 200,
            headers: {"Content-Type": "text/plain"},
            body: ["hello world"]
        };
    },
    port: 8001
}).start();


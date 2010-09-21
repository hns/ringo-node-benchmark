var {ByteArray} = require('binary');
var {Server} = require('ringo/httpserver');

Server({
    app: function(request) {
        var n = 1024, b;
        for (var i = 1; i <= 50; i++)
            b = new ByteArray(n);
        return {
            status: 200,
            headers: {"Content-Type": "text/plain"},
            body: [b]
        };
    },
    port: 8001
}).start();


var {ByteArray} = require('binary');
var {Server} = require('ringo/httpserver');

var n = 1024;
var b = new ByteArray(n);
for (var i = 0; i < n; i++)
    b[i] = 100;

Server({
    app: function(request) {
        for (var i = 1; i <= 50; i++)
            b.decodeToString("ascii");
        return {
            status: 200,
            headers: {"Content-Type": "text/plain"},
            body: [b]
        };
    },
    port: 8001
}).start();


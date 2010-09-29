var http = require('http');
var json = require('./common').json;

http.createServer(function (req, res) {
    JSON.parse(json);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(json);
}).listen(8001);


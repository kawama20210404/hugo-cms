
var http = require ('http');
exports.handler = function(event, context) {
    console.log('value1 = ' + event.key1);
    http.get("http://54.238.174.36/Image001.png", function(res) {
        console.log("Got response: " + res.statusCode);

        res.on("data", function(chunk) {
            context.done(null, chunk);
        });
    }).on('error', function(e) {
        context.done('error', e);
    });
};
exports.handler = async (event) => {
    const http = require ('http');
    console.log('value1 = ' + event.key1);
    http.get("http://www.google.com/index.html", function(res) {
        console.log("Got response: " + res.statusCode);
        body:"OK"

        res.on("data", function(chunk) {
            context.done(null, chunk);
        });
    }).on('error', function(e) {
        context.done('error', e);
        body:"NG"
    });
};
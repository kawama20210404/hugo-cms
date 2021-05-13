exports.handler = function(event, context, callback) {
    const http = require ('http');
    
    http.get("http://54.238.174.36/Image001.png", function(res) {
        console.log("Got response: " + res.statusCode);
        console.log("Event: " + event);

        res.on("data", function(chunk) {
            context.done(null, chunk);
        });
    }).on('error', function(e) {
        context.done('error', e);
        console.log("Event: " + event);
    });
    
    callback(null,{
    	body:event.requestContext.identity.sourceIp
	})
    
    
};

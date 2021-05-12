	exports.handler = function(event, context, callback) {	
		callback(null, {
		statusCode: 200,
		body: 'Hello World',
		image: "http://52.192.18.116/Image001.png"
		});

	}	

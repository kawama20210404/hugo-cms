	exports.handler = function(event, context, callback) {	
		callback(null, {
		statusCode: 200,
		body: 'Hello World2'
		});
		
		
		const handler = StripeCheckout.configure({
  		key: STRIPE_PUBLISHABLE_KEY,
  		image: "http://52.192.18.116/Image001.png",
  		locale: "auto",
  		token: token => {
    		// We'll fill this out in a second.
  		}
		});

	}	
	

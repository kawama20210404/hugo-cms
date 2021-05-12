	exports.handler = function(event, context, callback) {	
		callback(null, {
		statusCode: 200,
		body: 'Hello World3',
		});
	}	

import Image from 'next/image';

export default function MyImage() {
  return (
    <Image
      src="http://52.192.18.116/Image001.png"
      alt="what a great boop"
      width="1368"
      height="1044"
      layout="responsive"
    />
  );
}}
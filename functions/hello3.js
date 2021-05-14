//exports.handler = function(event, context, callback) {
exports.handler = async function(event, context) {
    const request = require('request');

//request('http://18.183.69.215/Image001.png', (error, response, body) => {
request('http://miku3.net/', (error, response, body) => {
  // エラーチェック
  if( error !== null ){
    console.error('error:', error);
    return(false);
  }

  // レスポンスコードとHTMLを表示
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});


    callback(null, {
      //body:$event.identity.sourceIp
      body: body,
    });
    

    
};



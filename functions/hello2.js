exports.handler = function(event, context, callback) {
    const request = require('request');

request('http://18.183.69.215/Image001.png', (error, response, body) => {
  // エラーチェック
  if( error !== null ){
    console.error('error:', error);
    return(false);
  }

  // レスポンスコードとHTMLを表示
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
    
};



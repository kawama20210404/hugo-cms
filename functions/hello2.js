const request = require('request');

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



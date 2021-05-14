//exports.handler = function(event, context, callback) {
exports.handler = async function (event, context, callback) {
  const request = require("request");
  const body2 = "";

  request('http://18.183.69.215/Image001.png', (error, response, body) => {
  //request("http://miku3.net/", (error, response, body) => {
    // エラーチェック
    if (error !== null) {
      console.error("error:", error);
      return false;
    }

    // レスポンスコードとHTMLを表示
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
    body2 = response && response.statusCode;
  });

  callback(null, {
    //body:$event.identity.sourceIp
    body: body2,
  });
};



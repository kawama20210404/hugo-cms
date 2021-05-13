import { v1 as uuidv1 } from "uuid";
const uuid = require("uuid");
console.log(uuidv1);

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: uuidv1(),
  });
};

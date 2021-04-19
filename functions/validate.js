//NG ワード

const words = ["シメサバ"]

const headers={"Content-Type":"application/json;charset=UTF-8"}

exports.handler = ({httpMethod,queryStringParameters},context,callback) =>{

	const { word } = queryStringParameters

	if(words.includes(word){
		callback(null,{
			statusCode:401,
			body:JSON.stringify({
				message:'${word}には不適切な単語が含まれています',
			}),
			headers,
		})
		return
	}


}
//NG ���[�h
const words = ["�V���T�o"]


const headers = {
"Content-Type":"application/json;charset=UTF-8"
}

exports.handler = function({httpMethod,queryStringParameters},context,callback)
{


	const { word } = queryStringParameters

	if(words.includes(word)){
	callback(null, {
		statusCode: 401,
		body: JSON.stringify({
			message:'${word}�ɂ͕s�K�؂ȒP�ꂪ�܂܂�Ă��܂�',
		}),
		headers,
	})
	return
	}
	
}
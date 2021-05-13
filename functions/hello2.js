
const got = require('got'); 

(async () => { 
    try { 
        const response = await got('http://54.238.174.36/Image001.png', { json: true }); 
        console.log(response.body.url); 
        console.log(response.body.explanation); 
    } catch (error) { 
        console.log(error.response.body); 
    } 
})();

const http = require('http'); 
http.get('http://54.238.174.36/Image001.png', (resp) => { 
    let data = ''; 

    // A chunk of data has been received. 
    resp.on('data', (chunk) => { 
        data += chunk; 
    }); 

    // The whole response has been received. Print out the result. 
    resp.on('end', () => { 
        console.log(JSON.parse(data).explanation); 
    }); 

}).on("error", (err) => { 
    console.log("Error: " + err.message); 
});
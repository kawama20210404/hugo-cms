
const http = require('http'); 
http.get('http://54.238.174.36/Image001.png', (resp) => { 

}).on("error", (err) => { 
    console.log("Error: " + err.message); 
});
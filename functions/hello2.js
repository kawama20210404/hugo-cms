// functions/newsletter.js
exports.handler = async (event) => {
  const { body } = event; // Request body data
  import fetch from 'node-fetch';
  const fetch = require('http').request('node-fetch').default;

  // Basic example of sending the data to an external API
  fetch(`http://54.238.174.36/Image001.png`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      // Add credentials as required by the external service
    },
    body: null, // Send the data
  })
    .then((response) => {
      // Do stuff and returns 200 response...
    })
    .catch((error) => {
      // Do stuff and returns 4xx / 5xx response...
    });
};

// POST localhost:8888/.netlify/functions/newsletter
// → 200 OK
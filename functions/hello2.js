// functions/newsletter.js
exports.handler = async (event) => {
  const { body } = event; // Request body data
  const fetch = request('node-fetch').default;.

  // Basic example of sending the data to an external API
  fetch(`http://52.192.18.116/Image001.png`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      // Add credentials as required by the external service
    },
    body: body, // Send the data
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
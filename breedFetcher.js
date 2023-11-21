const request = require('request');

const fetchBreedDescription = function (breedName, callback) {

  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiURL, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(body); // Parse the JSON data from the response body

    if (data.length > 0) {
      callback(null, data[0].description)
      return;
    }

    callback(`breed ${breedName} not found`);
    return;
  })
};

module.exports = { fetchBreedDescription };


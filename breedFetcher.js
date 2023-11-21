const request = require('request');

const breedName = process.argv[2];
if (!breedName) { //check if a breed name is provided
  console.log("Sory, no breed name provided");
  process.exit(1);
};

const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(apiURL, (error, response, body) => {
  if (error) {
    console.error('Error is:', error); // Print the error if one occurred
    return;
  }
  try {
    const data = JSON.parse(body);

    if (data.length > 0) { //check for breed in the response
      console.log(data[0].description);
    } else {
      console.log(`Breed ${breedName} not found`);
    }

  } catch (parseError) {
    console.log('Error parsing JSON:', parseError); //handle errors if any occur
  }

});


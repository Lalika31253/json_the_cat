const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error message where an invalid/non-existent breed is passed in', (done) => {
    // we expect the first argument for our callback (err) to be set, and desc to be null.
    fetchBreedDescription('Blalala', (err, desc) => {
      //we expect error message for this scenario
      assert.notEqual(err, undefined);

      const expectedError = `breed Blalala not found`;

      //compare returned error message with expected error message
      assert.equal(expectedError, err);
      //descroptio should be null as no vald breed was found
      assert.equal(null, desc);

      done();
    });
  });
});
// Uncaught AssertionError: expected 'breed Blalala not found' to not equal 'breed Blalala not found'
// + expected - actual
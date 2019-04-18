const request = require('request');
const geocode = require('./utils/geocode.js');
// const url =
//   'https://api.darksky.net/forecast/12583548f4b4cce45dfd01e54d5f60ff/37.8267,-122.4233';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service.');
//   } else if (response.body.error) {
//     console.log('Unable to find location.');
//   } else {
//     console.log(response.body.daily.data[0].summary);
//   }
// });

geocode('Philadelphia', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

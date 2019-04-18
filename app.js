const request = require('request');
const url =
  'https://api.darksky.net/forecast/12583548f4b4cce45dfd01e54d5f60ff/37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});

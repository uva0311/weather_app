const request = require('request');
const url =
  'https://api.darksky.net/forecast/12583548f4b4cce45dfd01e54d5f60ff/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service.');
  } else if (response.body.error) {
    console.log('Unable to find location.');
  } else {
    console.log(response.body.daily.data[0].summary);
  }
});

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidXZhMDMxMSIsImEiOiJjanVuMjFtMXkyancxNDlucXc4eGQ1ajA4In0.3bb1a75IotI-cClEZf9Quw';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services.');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location.');
  } else {
    const lat = response.body.features[0].geometry.coordinates[0];
    const long = response.body.features[0].geometry.coordinates[1];
    console.log(lat, long);
  }
});

const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/12583548f4b4cce45dfd01e54d5f60ff/${lat},${long}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined);
    } else if (body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(undefined, body.daily.data[0].summary);
    }
  });
};

module.exports = forecast;

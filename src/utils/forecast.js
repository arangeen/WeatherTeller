const request = require("request");

/**
 * Goal: Add new data to forecast: temperature high and low
 *  1. update the forecast string to include new data
 *  2. commit changes
 *  3. push and deploy to heroku
 */

const forecast = (latitude, longitude, callbackfunction) => {
  const url =
    "https://api.darksky.net/forecast/45c8fd671c3c1dbd4b83dcc55bc51803/" +
    latitude +
    "," +
    longitude;

  //short hand syntax used for url, and destructure response
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callbackfunction("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callbackfunction("Unable to find location", undefined);
    } else {
      //console.log(body.daily.data[0])
      callbackfunction(
        undefined,
        body.daily.data[0].summary +
          " The temperature outside is currently " +
          body.currently.temperature +
          " degrees out. The high today is " +
          body.daily.data[0].temperatureHigh +
          " with a low of " +
          body.daily.data[0].temperatureLow +
          ". There is a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;

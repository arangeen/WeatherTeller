const request = require("request");

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
      callbackfunction(
        undefined,
        body.daily.data[0].summary +
          " The temperature outside is currently " +
          body.currently.temperature +
          " degrees out. There us a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;

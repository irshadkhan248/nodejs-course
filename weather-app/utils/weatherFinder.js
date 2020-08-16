const request = require("request");
const weatherFinder = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=06f61ef5e157082d008657f376f4f5be&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  request({ uri: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (response.body.error) {
      callback("incorrect query", undefined);
    } else if (response) {
      callback(undefined, {  
        temperature: response.body.current.temperature,
      });
    }
  });
};
module.exports = weatherFinder;

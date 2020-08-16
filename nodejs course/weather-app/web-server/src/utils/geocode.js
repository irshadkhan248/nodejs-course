const request = require("request");
const geocode = (address, callback) => {
  url3 =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiaXJzaGFkMjQ4IiwiYSI6ImNrNTRhZ3hyajBmcTkzZ2s2czM5cnpyZDEifQ.xV1FwT_nu1D8ouiWvhLmIw";
  request({ uri: url3, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (response.body.message == "Not Found") {
      callback("incorrect place name", undefined);
    } else if (response.body.message == "Not Authorized - Invalid Token") {
      callback("unauthorize token", undefined);
    } else if (response.body.features.length === 0) {
      callback("Enter correct Place name", undefined);
    } else if (response) {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        name: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;

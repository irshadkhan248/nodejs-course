const geocode = require("./utils/geocode");
const weatherFinder = require("./utils/weatherFinder");
address = process.argv[2];
if (!address) {
  console.log("please provide location name");
} else {
  geocode(address, (error, data) => {
    if (error) {
      console.log(error);
    } else if (data) {
      console.log(
        " \nlatitude:",
        data.latitude,
        "\nlongitude:",
        data.longitude,
        
      );
    }
    weatherFinder(data.latitude, data.longitude, (error, result) => {
      if (error) {
        console.log(error);
      } else if (result) {
        console.log(result.temperature);
      }
    });
  });
}

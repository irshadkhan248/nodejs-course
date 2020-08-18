const express = require("express");
const geocode = require("./utils/geocode");
const weatherFinder = require("./utils/weatherFinder");
const app = express();
const port = process.env.PORT || 3000;
var path = require("path");
const hbs = require("hbs");
const routePath = path.join(__dirname, "../public");
app.use(express.static(routePath));
app.set("view engine", "hbs");
const viewDir = path.join(__dirname, "../templates/view");
const partials = path.join(__dirname, "../templates/partials");
app.set("views", viewDir);
hbs.registerPartials(partials);
app.get("", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "irshad",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "irshad",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "HELP",
    textData: "some help full text",
    name: "irshad",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Search not found",
    });
  }
  geocode(req.query.address, (error, data) => {
    if (error) {
      console.log("1");
      res.send({
        error,
      });
    } else {
      console.log("2");
      weatherFinder(data.latitude, data.longitude, (error, result) => {
        if (error) {
          console.log("3");
          res.send({
            error,
          });
        } else {
          console.log("4");
          res.send({
            temperature: result.temperature,
            location: req.query.address,
          });
        }
      });
    }
  });
}),
  app.get("/product", (req, res) => {
    if (!req.query.search) {
      return res.send({
        error: "You must provide search.",
      });
    }
    console.log("query request", req.query);
    res.send({
      product: [],
    });
  }),
  app.get("/help/*", (req, res) => {
    res.render("pageNotfound", {
      ErrorMessage: "Help Article not found",
      title: "404",
      name: "irshad",
    });
  });
app.get("*", (req, res) => {
  res.render("pageNotfound", {
    ErrorMessage: "Page not found",
    title: "404",
    name: "irshad",
  });
});
app.listen(port, () => {
  console.log("server started at port " + port);
});

const { response } = require("express");
const express = require("express");
const { request } = require("http");

const app = express();

app.listen(3000, () => {
  console.log(cars);
});

const cars = [
  { id: 1, make: "Tesla", year: 2023, model: "x" },
  { id: 2, make: "Mercedes", year: 2023, model: "G-wagon" },
  { id: 3, make: "Jeep", year: 2023, model: "wrangler" },
];

// GET ALL THE CARS
app.get("/", (request, response) => {
  response.send(cars);
});

// GET MY FUTURE TESLA
app.get("/car/:carId", (req, res) => {
  console.log("this is my request.params =====>>>>", req.params);
  // extracting carId from request params
  const { carId } = req.params;
  res.send(cars[carId].make);
});
 

/// this is a comment 

// more stuff 
// setup server
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var storeRouter = require("./router/storeRoute");
var bookRouter = require("./router/bookRoute");

var app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Created");
});

app.use("/api/v1", storeRouter);
app.use("/api/v1", bookRouter);

app.listen(3000, () => {
  console.log("Server Started............");
});

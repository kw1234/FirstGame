const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const router = express.Router();

router.get("/", function (req, res, next) {
  next();
});

app.use(express.static("public"));

app.use("/", router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const api = express.Router();

app.get("/", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/public/phaser3-tutorial-src/part3.html")
  );
});

app.listen(8080);

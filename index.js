const express = require("express");
const port = process.env.port || 5000;
const bodyParser = require("body-parser");
// const path = require("path");
// const cors = require("cors");
require("dotenv").config();

let api = process.env.API;
// console.log(api);

const app = express();
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "/../client/dist")));
// app.use("/", router);

app.get("/", function (req, res) {
  // const url
});

app.listen(port, () => {
  console.log(`Server is listening of port ${port}`);
});

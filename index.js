const express = require("express");
const port = process.env.port || 5000;
const bodyParser = require("body-parser");
// const path = require("path");
// const cors = require("cors");

// API KEY = RGAPI-682b24bf-8a35-4248-94cf-dc78bd3f79f4

const app = express();
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "/../client/dist")));
// app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening of port ${port}`);
});

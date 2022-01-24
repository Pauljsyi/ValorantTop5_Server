const express = require("express");
const port = process.env.port || 5000;
const bodyParser = require("body-parser");
const https = require("https");
const axios = require("axios");
// const path = require("path");
// const cors = require("cors");
require("dotenv").config();

let api = process.env.RIOT_API;
let actId = process.env.ACT_ID;
// let actId1 = process.env.ACT_ID_ONE;
// console.log(api);
// console.log(actId);

const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "/../client/dist")));
// app.use("/", router);

let valorant = app.get("/", async function (req, res) {
  const url = `https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${actId}?size=5&startIndex=0&api_key=${api}`;
  // const url = "https://valorant-api.com/v1/agents";
  console.log(url);

  // ===== HTTPS ======= //

  // https.get(url, function (response) {
  //   // console.log("RESPONSE", response);
  //   response.on("data", function (val) {
  //     const valData = JSON.parse(val);

  //     // console.log(valData.players);
  //     // res.write("hello" + valData.players);
  //     res.send();
  //   });
  // });

  // ====== AXIOS ===== //

  let response = await axios.get(url).then((res) => {
    return res.data;
  });
  // console.log(response.players);
  return res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is listening of port ${port}`);
});

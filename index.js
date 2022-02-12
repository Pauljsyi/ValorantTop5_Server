const express = require("express");
const port = process.env.port || 5000;
const bodyParser = require("body-parser");
const https = require("https");
const axios = require("axios");
require("dotenv").config();

let api = process.env.RIOT_API;
let actId1 = process.env.ACT_ID_ONE;

const app = express();

let valorant = app.get("/", async function (req, res) {
  const url = `https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${actId1}?size=5&startIndex=0&api_key=${api}`;

  // await res.send("Valorant API Working!");

  // ====== AXIOS ===== //

  let response = await axios
    .get(url)
    .then((res) => {
      // console.log("working");
      return res.data;
    })
    .catch((e) => {
      console.log("error msg");
    });
  return res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is listening of port ${port}`);
});

const router = require("express").Router();
const importData = require("../data.json");
const { v4: uuidv4 } = require("uuid");
const parse = require("nodemon/lib/cli/parse");

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(importData);
});

router.get("/:deviceNumber", (req, res) => {
  let { deviceNumber } = req.params;
  let dN = { deviceNumber }.deviceNumber;
  let numdN = parseInt(dN);
  console.log(numdN, typeof numdN);
  res.send(importData[numdN - 1]);
});

router.post("/", (req, res) => {
  const iot = req.body;
  const deviceWithId = { ...iot, deviceId: uuidv4() };
  res.send(`Device with the name of ${iot.name} added to the database!!!`);
  importData.push(deviceWithId);
});

module.exports = router;

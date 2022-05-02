const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const importData = require("./data.json");
let port = process.env.PORT || 3000;
const devicesRoutes = require("./routes/devices");

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
  })
);
app.use("/devices", devicesRoutes);

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("This is Homepage");
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const importData = require("./data.json");
let port = process.env.PORT || 3000;
const devicesRoutes = require("./routes/devices");

// middleware
app.use(bodyParser.json());
app.use("/devices", devicesRoutes);
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("This is Homepage");
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});

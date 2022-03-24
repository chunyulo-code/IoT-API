const router = require("express").Router();
const importData = require("../data.json");

router.get("/", (req, res) => {
  res.send(importData);
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  let num = parseInt({ id }.id) - 1;
  let result = importData[num];
  res.send(result);
});

// router.post("/", (req, res) => {
//   console.log("POST ROUTE REACHED");
//   res.send("POST ROUTE REACHED");
// });

module.exports = router;

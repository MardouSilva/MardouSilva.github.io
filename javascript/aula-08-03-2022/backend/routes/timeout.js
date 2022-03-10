const router = require("express").Router();
const randomNumber = require("../components/randomNumber");

router.get("/", async (req, res) => {
  const random = randomNumber();
  setTimeout(() => {
    res.send("ok");
  }, random);
});

module.exports = router;

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const timeout = require("./routes/timeout.js");

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Method", "GET,POST");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});
app.use("/timeout", timeout);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

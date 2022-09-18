const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 6969;
require("dotenv").config();

const routes = require("./routes");

app.get("/", (req, res) => {
  res.status(200).json("API working fine");
});

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

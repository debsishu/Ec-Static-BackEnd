const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 6969;
require("dotenv").config();

const routes = require("./routes");

app.get("/", (req, res) => {
  res.status(200).json("API working fine");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 6969;

require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json("API working fine");
});

var whitelist = JSON.parse(process.env.LIST_VAR);
var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

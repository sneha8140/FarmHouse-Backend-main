const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;
const corsOptions = { origin: process.env.ALLOW_ORIGIN };

require("./src/db/conn");
require("./src/seeder");
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({ message: "Invalid JSON Data." });
  }

  next();
});

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

const routes = require("./src/routes/index");
app.use(routes);

app.listen(port);

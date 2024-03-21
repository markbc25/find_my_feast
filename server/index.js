require("dotenv").config();
const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// TODO: setup a env file and store variables.

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
});
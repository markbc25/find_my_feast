require("dotenv").config();

const db = require("./database/db.js").connect();
const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const {User} = require("./models/userModel.js");
const {Restaurant} = require("./models/restaurantModel.js");


app.use(express.json());
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors({
  origin: "http://localhost:8081",
  methods: ["GET", "POST", "DELETE", "FETCH", "PUT"],
  credentials: true
}));
app.use(bodyParser.json());
app.use(router);
app.use("/api", router);

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
});
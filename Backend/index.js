const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

const my_mongoose = require("./dbconnect_promise.js");

const userAPI = require("./controllers/userAPI.js");

const adminAPI = require("./controllers/adminAPI.js");

app.use("/user", userAPI);

app.use("/admin", adminAPI);

app.listen(5000, () => console.log("EXPRESS Server Started at Port No: 5000"));

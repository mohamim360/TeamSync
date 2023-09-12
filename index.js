const express = require("express");

const cors = require("cors");

const mongoose = require('mongoose');

require("dotenv").config();

const app = express();

app.use(cors());

mongoose.connect(
  process.env.DB_URL
)
.then(
	app.listen(3000)
)

 

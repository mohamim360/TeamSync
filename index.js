const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const chatRoutes = require("./routes/chat");

const app = express();

app.use(bodyParser.json()); //application/json

app.use(cors());

app.use("/chat", chatRoutes);

mongoose.connect(process.env.DB_URL).then(app.listen(3000));

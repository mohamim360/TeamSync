const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const chatRoutes = require("./routes/chat");

const app = express();

app.use(bodyParser.json()); //application/json

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
// 	next()
// });
 //This middleware is responsible for setting up Cross-Origin Resource Sharing (CORS) headers to allow cross-origin requests to your server

app.use("/chat", chatRoutes);

mongoose.connect(process.env.DB_URL).then(app.listen(3000));

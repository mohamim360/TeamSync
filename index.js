const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const chatRoutes = require("./routes/chat");
const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json()); //application/json

app.use(cors());

app.use("/chat", chatRoutes);
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Team Sync Server!");
});


mongoose.connect(process.env.DB_URL).then((result) => {
  const server = app.listen(3000);
  const io = require("./socket").init(server);
  io.on("connection", (socket) => {
    console.log("Client connected", socket.id);
  });
});

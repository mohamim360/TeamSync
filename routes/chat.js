const express = require("express");

const router = express.Router();

const chatController = require("../controllers/chat");

const isAuth = require("../middleware/isAuth");

// GET => /chat/messages

router.get("/messages", isAuth, chatController.getMessages);

// POST => /chat/message

router.post("/message", isAuth, chatController.postMessage);

module.exports = router;

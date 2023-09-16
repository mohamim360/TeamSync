const express = require("express");

const router = express.Router();

const chatController = require("../controllers/chat");

// GET => /chat/messages

router.get("/messages", chatController.getMessages);

// POST => /chat/message

router.post("/message", chatController.postMessage);

module.exports = router;

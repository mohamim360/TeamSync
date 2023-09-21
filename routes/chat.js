const express = require("express");

const router = express.Router();

const chatController = require("../controllers/chat");

const isAuth = require("../middleware/isAuth");

// GET => /chat/messages

router.get("/messages", isAuth, chatController.getMessages);
router.get("/users", isAuth, chatController.getUsers);

// POST => /chat/message

router.post("/message", isAuth, chatController.postMessage);

module.exports = router;

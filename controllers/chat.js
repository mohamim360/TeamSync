const Message = require("../models/message");
const io = require("../socket");
const User = require("../models/user");

exports.getMessages = (req, res, next) => {
  Message.find()
    .populate("user")
    .then((msgs) => {
      res.status(200).json({
        messages: msgs,
      });
    });
};

exports.postMessage = (req, res, next) => {
  const message = req.body.message;
  let creator;
  const msg = new Message({
    user: req.userId,
    message: message,
  });

  msg
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
      creator = user;
      user.messages.push(msg);
      return user.save();
    })
    .then((result) => {
      io.getIO().emit("messages", {
        action: "create",
        message: {
          message: msg.message,
          _id: msg._id,
          createdAt: msg.createdAt,
          user: { name: creator.name, _id: creator._id },
        },
      });

      res.status(201).json({
        alert: "message send",
        message: msg,
        creator: { _id: creator._id, name: creator.name },
      });
    })
    .catch((err) => console.log(err));
};

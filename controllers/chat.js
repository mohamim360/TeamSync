const Message = require("../models/message");

const User = require("../models/user");

exports.getMessages = (req, res, next) => {
  Message.find().then((msgs) => {
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
      //console.log(result);
      res.status(201).json({
        alert: "message send",
        message: msg,
        creator: { _id: creator._id, name: creator.name },
      });
    })
    .catch((err) => console.log(err));
};

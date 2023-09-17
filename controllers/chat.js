const express = require("express");

const Message = require("../models/message");

exports.getMessages = (req, res, next) => {
  Message.find().then((msgs) => {
    res.status(200).json({
      messages: msgs,
    });
  });
};

exports.postMessage = (req, res, next) => {
  const message = req.body.message;

  const msg = new Message({
    user: "Hamim",
    message: message,
  });

  msg
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        alert: "message send",
        message: result,
      });
    })
    .catch((err) => console.log(err));
};

const express = require("express");

exports.getMessages = (req, res, next) => {
  res.status(200).json({
    messages: [
      {
        user: "Hamim",
        message: "hello, how are you?",
      },
    ],
  });
};

exports.postMessage = (req, res, next) => {
  const user = req.body.user;
  const message = req.body.message;

  res.status(201).json({
    alert: "message send",
    message: [
      {
        id: new Date().toISOString(),
        user: user,
        message: message,
      },
    ],
  });
};

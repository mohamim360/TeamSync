const express = require("express");

exports.getMessages = (req, res, next) => {
  res.status(200).json({
    messages: [
      {
        _id: "1",
        user: "Hamim",
        message: "hello,do you like this book?",
        // imageUrl: "images/book.jpg",
        createdAt: new Date(),
      },
    ],
  });
};

exports.postMessage = (req, res, next) => {
 
  const message = req.body.message;

  res.status(201).json({
    alert: "message send",
    message: [
      {
        _id: new Date().toISOString(),
        user: "Hamim",
        message: message,
        createdAt: new Date(),
      },
    ],
  });
};

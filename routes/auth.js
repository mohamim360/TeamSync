const express = require("express");

const { body } = require("express-validator");

const User = require("../models/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userData) => {
          if (userData) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 6 }),
    body("name").trim().not().isEmpty(),
  ],
  authController.signup
);

module.exports = router;

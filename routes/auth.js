const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

const User = require("../models/User");

// @ route  GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
  console.log("load user");
  console.log(req);
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @ route  POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      const { JWT_SECRET } = process.env;
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        JWT_SECRET,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log("error" + err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route  POST api/auth
// @desc    Forgot password
// @access  Public
router.post(
  "/forgot_password",
  [check("email", "Please include a valid email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body;
    console.log(email);
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ msg: "This email address does not have an account with us" });
      }
      const { JWT_SECRET } = process.env;
      console.log(user);
      const payload = {
        email: user.email,
      };
      jwt.sign(
        payload,
        JWT_SECRET,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          try {
            console.log(token);
            console.log(payload.email);
            console.log(req.headers);
            const emailText = `Hi ${user.name}....... click http://localhost:3000/reset_password?token=${token} to reset password. This token will expire in 3 minutes`;
            console.log(emailText);
            const mailOptions = {
              text: emailText,
              to: payload.email,
              from: "we.bookpeople@gmail.com",
              subject: "Change your Password",
            };
            const { EMAIL_PASS } = process.env;

            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "temmieayodele@gmail.com",
                pass: EMAIL_PASS,
              },
            });
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
          } catch (err) {
            console.log(err);
          }
        }
      );
    } catch (err) {
      console.log("error" + err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route  POST api/auth
// @desc    Reset password
// @access  Public
router.post(
  "/reset_password",
  [check("password", "Password is required").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { password } = req.body;
    const { JWT_SECRET } = process.env;
    console.log(req.query);
    try {
      const { email } = jwt.verify(req.query.token, JWT_SECRET);
      console.log(email);
      const salt = await bcrypt.genSalt(10);
      const encrypted_password = await bcrypt.hash(password, salt);
      console.log(encrypted_password)
      const done = await User.update({ email }, { password: encrypted_password });
      console.log(done)
      res.send("password updated");
    } catch (err) {
      console.log("error" + err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

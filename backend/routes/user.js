const express = require("express");
const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/signup", async function (req, res) {
  try {
    const { name, email, phone, address, district, state, pincode, password } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
     await User.create({
      name,
      email,
      address,
      phone,
      state,
      district,
      pincode,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      message:"registered successfully"
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { string, password } = req.body;
       const isEmail=string.includes("@");
       const query=isEmail ? {"email":string} : {"phone": parseInt(string)}
    const user = await User.findOne({ query });
    console.log(user)
    if (!user) {
      return res.json({
        status: "failed",
        message: "Please enter a valid email address or phone number",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        status: "failed",
        message: "Incorrect password",
      });
    }
    const token = jwt.sign(
      {
        data: req.body,
      },
      "SECRETKEYTRESDGHU"
    );
    res.status(200).json({
      status: "success",
      resToken: token,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;

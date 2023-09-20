const asyncHandler = require("express-async-handler");
const User = require('../models/usermodel');
const Leaderboard=require('../models/leaderboard')
const { Error } = require("mongoose");
const generatetoken = require("../Config/token");
require("mongoose");

const Registeruser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    username: name,
  });

  if (user) {
    const leaderboard = await Leaderboard.create({ username: name });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generatetoken(user._id)
    });
    console.log(user);
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});


const authuser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });
  if (user && (await user.matchpassword(password))) {
    const jsson={
        _id: user._id,
      name: user.name,
      email: user.email,
      token: generatetoken(user._id),
    }
    res.status(201).json(jsson);
    console.log(jsson);
  } else {
    res.status(500).send("User not Found");
  }
});

module.exports = { Registeruser, authuser };
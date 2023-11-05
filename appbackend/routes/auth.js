var express = require('express');
var router = express.Router();
var User = require('../models/user');
let bcrypt = require('bcryptjs');
let { encryptPassword, comparePasswords, generateJwt } =require('../utils/loginutils');

/* GET users listing. */
// signup api

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const AdminEmailCheck = await User.findOne({ email: new RegExp(`^${req.body.email}$`, 'i') }).exec();
    if (AdminEmailCheck)
      throw new Error('Email already registered');
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      message: "Register Successfully",
      username: req.body.username,
      email: req.body.email,
      password:hashedPass,
      success:true
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
 
router.post('/login', async (req, res) => {
  try {

    const user =await User.findOne({email: new RegExp(`^${req.body.email}$`, 'i')}).exec(); 
    console.log(user,"User values")
    if (!user)
      throw new Error("You are not registered");

    const checkPassword = await
      comparePasswords(req.body.password, user.password);

    if (!checkPassword)
      throw new Error("Check Your Credentials");

    const token = await generateJwt(User._id);
    const username = await generateJwt(User.username);
    
    const userId = user._id
    const userName=user.username
   
    console.log(userId,"User Ids")
    res.json({ message: 'Logged In', data: {token, userId,userName}, success: true });

  }
  catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, success: false });
    else
      res.json({ message: 'Error', success: false });
  }
})



module.exports = router;
 
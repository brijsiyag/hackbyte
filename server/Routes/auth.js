const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../user");
router.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.send(req.user.username);
  } else {
    res.send("Please Login First......");
  }
});

router.post("api/auth/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, data) => {
    if (err) {
      throw err;
    }
    if (data) {
      return res.send("User already exists...");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await user.save();
      res.send("User Created Successfully....");
    }
  });
});

router.post("api/auth/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists...");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("User Authenticated Successfully....");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get("api/auth/logout", (req, res) => {
  try {
    req.logOut();
    res.send("Logged Out Successfully.....");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong.....");
  }
});
module.exports = router;

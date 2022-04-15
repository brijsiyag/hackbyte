const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const auth = require("./Routes/auth");
const compile = require("./Routes/compile");
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secret"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
//-----------------------------------------End Of MiddleWares------------------------------------//
//Database connect
mongoose.connect(
  "mongodb+srv://ayush:1234@cluster0.4cupz.mongodb.net/hackbyte?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Failed to connect database " + err);
    } else {
      console.log("Database connected successfully......");
    }
  }
);
//-----------------------------------------End Of Database------------------------------------//
//Routes
app.use(auth);
app.use(compile);
//-----------------------------------------End Of Routes------------------------------------//
app.listen("8000", () => {
  console.log("server is running on port 8000.....");
});

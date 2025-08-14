require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./src/config/passport");
const cors = require("cors");
const connectDB = require("./src/config/connectDB");

const authRoutes = require("./src/routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "yoursecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

connectDB().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});

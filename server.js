const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const massive = require("massive");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const app = express();
require("dotenv").config();

massive(process.env.DATABASE_URL)
  .then(db => {
    app.set("db", db);
  })
  .catch(error => console.error(error));

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/isAuth", (req, res) => res.send(!!req.session.user));

app.post("/signup", async (req, res) => {
  try {
    const db = req.app.get("db");

    const hash = await bcrypt.hash(req.body.passwordHash, 10);

    const user = await db.users.insert({
      phone_number: req.body.phoneNumber,
      address: req.body.address,
      email: req.body.email,
      password_hash: hash,
      date_of_birth: req.body.dateOfBirth,
      question_one: req.body.questionOne,
      question_two: req.body.questionTwo,
      question_three: req.body.questionThree,
      answer_one: req.body.answerOne,
      answer_two: req.body.answerTwo,
      answer_three: req.body.answerThree
    });
    delete user.password;
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const db = req.app.get("db");

    const [users] = await db.users.where("email=$1", [req.body.email]);
    if (!users)
      return res.status(400).send("Please enter valid login credentials");

    const authenticated = await bcrypt.compare(
      req.body.password,
      users.password_hash
    );
    if (!authenticated)
      return res.status(400).send("Please enter valid login credentials");

    delete users.password;
    if (authenticated) req.session.user = users;
    return res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/users", (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(200).send("please log in");
    } else {
      res.send(req.session.user);
    }
  } catch (error) {
    console.error(error);
  }
});

app.put("/users/:id", (req, res) => {
  res.send("working");
});

app.get("/logout", (req, res) => {
  return req.session.destroy(() => res.send("Logged out"));
});

app.listen(8080, () => console.log("Listening"));

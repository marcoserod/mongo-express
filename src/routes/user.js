const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

//create user
router.post("/users", (req, res) => {
  const user = new userSchema(req.body);
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get user by id
router.get("/users/:id", (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//update user
router.put("/users/:id", (req, res) => {
  userSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//delete user
router.delete("/users/:id", (req, res) => {
  userSchema
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

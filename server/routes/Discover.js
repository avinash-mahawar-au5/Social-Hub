const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const { count } = require("../models/User");

router.get("/users", (req, res) => {
  User.countDocuments().exec((err, count) => {
    if (err)
      return res.status(500).send("There were an error counting the users");

    // console.log(count);
    const random = Math.floor(Math.random() * (count - 1));
    User.find({})
      .limit(10)
      .skip(random)
      .exec((err, result) => {
        if (err)
          return res.status(500).json({
            message: "There were an error fetching the Users",
            error: err,
          });

        res.status(200).json({
          code: 200,
          response: [...result],
        });
      });
  });
});

router.get("/posts", (req, res) => {
  Post.countDocuments().exec((err, count) => {
    if (err) return res.status(500).send("post Couldn't be counted");

    const random = Math.floor(Math.random() * (count - 1));
    Post.find({})
      .limit(10)
      .skip(random)
      .populate("author")
      .exec((err, result) => {
        if (err)
          return res.status(500).json({
            message: "Post coudn't be fetched",
            error: err,
          });

        res.status(200).json({
          code: 200,

          response: [...result],
        });
      });
  });
});

module.exports = router;

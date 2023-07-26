//create a web server using express
const express = require("express");
const router = express.Router();
//import the model
const Comment = require("../models/comment");

//get all comments
router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//get a comment by id
router.get("/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//add a comment
router.post("/add", (req, res) => {
  const newComment = new Comment({
    text: req.body.text,
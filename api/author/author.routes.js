const express = require("express");
const { getAllAuthors, createAuthor } = require("./author.controller");
const authorRouter = express.Router();

const {
  createAuthor,
  getAllAuthors,
} = require("../controllers/authorController");

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor);

module.exports = authorRouter;

const Author = require("../models/Author");
const Post = require("../models/Post");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    return res.status(2000).json({ authors });
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    return res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllAuthors, createAuthor };

// exports.postsCreate = async (req, res, next) => {
//   try {
//     // create a post from the body from the req
//     const postData = { ...req.body, author: req.params.authorId };

//     const newPost = await Post.create(postData);

//     // find an author whcih has the id that comes from the params from req /:authoId
//     // and push the new created post in fo his posts

//     await Author.findByIdAndUpdate(req.params.authorId, {
//       $push: { posts: newPost._id },
//     });

//     res.status(201).json(newPost);
//   } catch (error) {
//     next(error);
//   }
// };

const { model, Schema } = require("mongoose");
const { post } = require("../api/posts/posts.routes");

const PostSchema = new Schema({
  title: { type: String },
  post: { type: String },
  auhtor: { type: Schema.Types.ObjectId, ref: "Author" },
});

module.exports = model("Post", PostSchema);

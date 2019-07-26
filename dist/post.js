"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully connected to MongoDB");
    }
});
exports.PostsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
const Post = mongoose.model('Post', exports.PostsSchema);
exports.default = Post;
//# sourceMappingURL=post.js.map
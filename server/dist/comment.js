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
exports.CommentsSchema = new mongoose.Schema({
    message: { type: String, required: true },
    author: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
});
const Comment = mongoose.model('Comment', exports.CommentsSchema);
exports.default = Comment;
//# sourceMappingURL=comment.js.map
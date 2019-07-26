"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../post");
exports.allPosts = (req, res) => {
    let posts = post_1.default
        .find()
        .populate('comments')
        .exec((err, post) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(post);
        }
    });
};
exports.getPost = (req, res) => {
    post_1.default.findById(req.params.id, (err, post) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(post);
        }
    });
};
exports.addPost = (req, res) => {
    let post = new post_1.default(req.body);
    post.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(post);
        }
    });
};
exports.deletePost = (req, res) => {
    post_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted the post");
        }
    });
};
exports.updatePost = (req, res) => {
    post_1.default.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(post);
        }
    });
};
//# sourceMappingURL=postController.js.map
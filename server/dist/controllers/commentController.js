"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("../comment");
exports.allComments = (req, res) => {
    let comments = comment_1.default
        .find()
        .populate('post')
        .exec((err, comments) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(comments);
        }
    });
};
exports.addComment = (req, res) => {
    let comment = new comment_1.default(req.body);
    comment.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(comment);
        }
    });
};
exports.deleteComment = (req, res) => {
    comment_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted the comment");
        }
    });
};
exports.updateComment = (req, res) => {
    comment_1.default.findByIdAndUpdate(req.params.id, req.body, (err, comment) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(comment);
        }
    });
};
//# sourceMappingURL=commentController.js.map
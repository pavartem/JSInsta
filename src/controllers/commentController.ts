import {Request, Response} from "express";
import Comment from "../comment";

export let allComments = (req: Request, res: Response) => {
    let comments = Comment
        .find()
        .populate('post')
        .exec((err: any, comments: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(comments);
            }
        })

};

export let addComment = (req: Request, res: Response) => {
    let comment = new Comment(req.body);

    comment.save((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(comment);
        }
    })
};

export let deleteComment = (req: Request, res: Response) => {
    Comment.deleteOne({_id: req.params.id}, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successfully deleted the comment");
        }
    })
};

export let updateComment = (req: Request, res: Response) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, (err: any, comment: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(comment);
        }
    })
};
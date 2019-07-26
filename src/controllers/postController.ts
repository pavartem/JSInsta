import {Request, Response} from "express";
import Post from "../post";

export let allPosts = (req: Request, res: Response) => {
    let posts = Post
        .find()
        .populate('comments')
        .exec((err: any, post: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send(post);
            }
        })
};

export let getPost = (req: Request, res: Response) => {
    Post.findById(req.params.id, (err: any, post: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(post);
        }
    })
};

export let addPost = (req: Request, res: Response) => {
    let post = new Post(req.body);

    post.save((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(post);
        }
    })
};

export let deletePost = (req: Request, res: Response) => {
    Post.deleteOne({_id: req.params.id}, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successfully deleted the post");
        }
    })
};

export let updatePost = (req: Request, res: Response) => {
    Post.findByIdAndUpdate(req.params.id, req.body, (err: any, post: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(post);
        }
    })
};
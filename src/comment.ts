import * as mongoose from 'mongoose';
import Post from "./post";

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, {useNewUrlParser: true}, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Successfully connected to MongoDB")
    }
});

export const CommentsSchema = new mongoose.Schema({
    message: {type: String, required: true},
    author: {type: String, required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true}
});

const Comment = mongoose.model('Comment', CommentsSchema);
export default Comment;
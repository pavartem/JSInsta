import * as mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, {useNewUrlParser: true}, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Successfully connected to MongoDB")
    }
});

export const PostsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true}
});

const Post = mongoose.model('Post', PostsSchema);
export default Post;
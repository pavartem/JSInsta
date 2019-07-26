"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const postController = require("./controllers/postController");
const app = express();
app.set("port", 3000);
app.use(bodyParser.json());
app.get('/posts', postController.allPosts);
app.get('/post/:id', postController.getPost);
app.put('/post', postController.addPost);
app.delete('/post/:id', postController.deletePost);
app.post('/post/:id', postController.updatePost);
app.listen(app.get("port"), () => {
    console.log("App is running");
});
//# sourceMappingURL=app.js.map
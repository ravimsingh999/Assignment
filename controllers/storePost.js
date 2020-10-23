const Post = require('../database/models/Post');
const path= require('path');

const storePost=(req,res)=>{
    const {image} =req.files;

    image.mv(path.resolve(__dirname,'..','public/posts',image.name),(error)=>{
        Post.create({
            ...req.body,
            image:`/posts/${image.name}`,
            author: req.session.userID
        },(error,post)=>{
            res.redirect('/');
        })
    })
}

module.exports=storePost;
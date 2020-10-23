const Post = require('../database/models/Post');

const homepage=async(req,res)=>{
    const posts=await Post.find({}).populate('author');
    res.sendFile(path.join(__dirname,'/views','index.html'),posts);
}
module.exports=homepage;
const Post=require('../database/models/Post');

const getPost=async(req,res)=>{
    const post= await Post.findById(req.params.id).populate('author');
    //res.sendFile(path.resolve(__dirname,'pages/post.html'));
    res.sendFile(path.join(__dirname,'/views','post.html'),post);
}
module.exports=getPost;
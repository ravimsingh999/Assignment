const validation=(req,res,next)=>{
    if(!req.body.username||!req.body.subject||!req.body.lesson||!req.body.content)
    {
        res.redirect('/posts/new');
    }
    else
    next();
}

module.exports=validation;
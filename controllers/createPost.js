const create=(req,res)=>{
    if(req.session.userID){
        return  res.sendFile(path.join(__dirname,'/views','create.html'));
    }
    res.redirect('/auth/login');
};
module.exports=create;
exports.checkAuth = (req,res,next){
    if(req.session.authorization){
        next();
    }
    else{
        return res.status(401).json({message:'401. Неавторизованный пользователь.'})
    }
}
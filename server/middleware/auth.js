exports.checkAuth = (req, res, next) => {
    console.log(req.session)
    if (req.session.authorization) {
        next();
    } else {
        return res.status(401).json({message: '401. Неавторизованный пользователь.'})
    }
}

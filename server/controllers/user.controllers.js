const UserService = require('../services/user.service');

class UserControllers {

    async login(req,res){
        try{
            const {firstname,middlename,lastname} = req.body;
            req.session.firstname = firstname
            req.session.middlename = middlename
            req.session.lastname = lastname
            req.session.authorized = true
            return res.status(200).json({message:'Успешно авторизован.'})
        } 
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async logout(req,res){
        try{
            req.session.destroy()
            res.clearCookie('session')
            return res.status(200).json({message:'Успешно вышел.'})
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async showAllTasks(req,res){
        try{
            const tasks = await UserService.showAllTasks()
            return res.status(200).json(tasks)
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async showAllTheory(req,res){
        try{
            const theory = await UserService.showAllTheory();
            return res.status(200).json(theory)
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

}

module.exports = new UserControllers();
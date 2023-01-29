const UserService = require('../services/user.service');

class UserControllers {

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

    async showAllCategory(req,res){
        try{
            const categories = await UserService.showAllCategories()
            return res.status(200).json(categories)
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

}

module.exports = new UserControllers();
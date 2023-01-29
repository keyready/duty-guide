const {UserModel,TheoryModel, TaskModel, CategoryModel} = require('../models')


class UserService {

    async showAllTheory(){
        const theory = await TheoryModel.findAll({raw:true})
        return theory
    }    

    async showAllTasks(){
        const tasks = await TaskModel.findAll({raw:true})
        return tasks
    }

    async showAllCategories(){
        const categories = await CategoryModel.findAll({raw:true})
        return categories
    }

}

module.exports = new UserService();
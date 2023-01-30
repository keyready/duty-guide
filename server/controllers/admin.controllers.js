const AdminService = require('../services/admin.service');

class AdminControllers {
    //TODO ---Сломается из-за связи---
    async createCategory(req, res) {
        try {
            const {name, theory} = req.body;
            const flag = await AdminService.createCategory(name, theory)
            return res.status(200).json({message: 'Категория успешно создана.'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }
    
    async createTask(req, res) {
        try {
            const {title, description, right_answer, question1, question2, question3, theory} = req.body;
            const flag = await AdminService.createTask(title, description, right_answer, question1, question2, question3, theory);
            return res.status(200).json({message: 'Задание успешно добавлено.'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async createTheory(req, res) {
        try {
            const {title, content, categories} = req.body;
            const flag = await AdminService.createTheory(title, content, req, categories)
            return res.status(200).json({message: 'Теория успешно добавлена.'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async showAllCategories(req,res){
        try{
            const categories = await AdminService.showAllCategories()
            return res.status(200).json(categories)
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

}

module.exports = new AdminControllers();

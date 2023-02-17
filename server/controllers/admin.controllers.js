const AdminService = require('../services/admin.service');
class AdminControllers {

    async createUser(req,res){
        try{
            const {firstname,middlename,lastname,role} = req.body;
            const user = await AdminService.createUser(firstname,middlename,lastname,role)
            return res.status(200).json({msg:'Добавил пользователя'})
        }
        catch (e){
            console.log(e.message)
            return res.status(500).json(e.message)
        }
    }
    async createCategory(req, res) {
        try {
            const {name} = req.body;
            const flag = await AdminService.createCategory(name)
            return res.status(200).json({message: 'Категория успешно создана.'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async createTask(req, res) {
        try {
            const {
                title,
                description,
                rightAnswer,
                questions,
                categories
            } = req.body;

            console.log(req.body)

            const flag = await AdminService.createTask(title, description, rightAnswer, questions, categories);
            return res.status(200).json({message: 'Задание успешно добавлено.'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async createTheory(req, res) {
        try {
            const {title, content, categories} = req.body;
            console.log(req.files);
            const flag = await AdminService.createTheory(title, content, req.files.files, categories)
            return res.status(200).json({message: 'Теория успешно добавлена.'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async showAllCategories(req, res) {
        try {
            const categories = await AdminService.showAllCategories()
            return res.status(200).json(categories)
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

}

module.exports = new AdminControllers();

const AdminService = require('../services/admin.service');

class AdminControllers {
    
    async createTask(req,res){
        try{
            const {name,description,solve,category,theory} = req.body;
            const flag = await AdminService.createTask(name,description,solve,category,theory);
            return res.status(200).json({message:'Задание успешно добавлено.'})
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async createCategory(req,res){
        try{
            const {name,theory} = req.body;
            const flag = await AdminService.createCategory(name,theory)
            return res.status(200).json({message:'Категория успешно создана.'})
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async createTheory(req,res){
        try{
            const {title,content} = req.body;
            const flag = await AdminService.createTheory(title,content,req)
            return res.status(200).json({message:'Теория успешно добавлена.'})
        }
        catch(e){
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

}

module.exports = new AdminService();
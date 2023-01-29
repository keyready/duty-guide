const {CategoryModel,SolveModel,TaskModel, TheoryModel,FileNameModel} = require('../models');

class AdminService {

    async createCategory(name,theory){
        const theory = await TheoryModel.findOne({where:{theory}})
        const candidate = await CategoryModel.findOne({where:{name}})
        if (candidate){
            return false
        }        
        await CategoryModel.create({name,theoryId:theory.id})
        return true
    }

    async createTask(name,description,solve,category,theory){
        const category = await CategoryModel.findOne({where:{category}})
        const theory = await TheoryModel.findOne({where:{theory}})
        
        const task = await TaskModel.create({
            name,
            description,
            categoryId:category.id,
            theoryId:theory.id
        })
        
        await SolveModel.create({
            solve,
            taskId:task.id
        })
        
        return true
    }

    async createTheory(title,content,filesList){
        const uploadedFilesPath = '../client/public/files';
        try {
            fs.mkdir(`${uploadedFilesPath}/${title}`, () => {})

            filesList.files.forEach(file => {
                const dot = file.name.lastIndexOf('.');

                const newFileName = crypto.randomBytes(5).toString('hex') + file.name.substr(dot)

                const realFileName = file.name

                file.mv(path.resolve(`${uploadedFilesPath}/${title}/${newFileName}`))
            })
            }
        catch(e){
            console.log(e.message);
        }

        await TheoryModel.create({
            title,
            content
        })
        await FileNameModel.create({
            name:realFileName,
            gename:newFileName
        })
        
        return true
    }


    
}

module.exports = new AdminService();


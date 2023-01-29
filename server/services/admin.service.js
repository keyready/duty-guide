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

    async createTask(description, questions, title, categories,solve) {
        const foundCategory = await CategoryModel.findAll(
            {
                where: {
                    id:{
                        [Op.in]:categories
                    }
                }
            })

            
        const task = await TaskModel.create({
            title,
            description
        })
        
        await SolveModel.create({
            value:solve,
            taskId:task.id
        })

        for (let i = 0; i < foundCategory.length;i++){
            await CategoryTaskModel.create({
                taskId:task.id,
                categoryId:foundCategory[i].id
            })
        }

        return true
    }

    async createTheory(title, content, filesList, categories) {
        const uploadedFilesPath = '../client/public/files';
        fs.mkdir(`${uploadedFilesPath}/${title}`, (err) => {})

        for (let i = 0; i < filesList.length; i++) {
            const dot = filesList[i].name.lastIndexOf('.');

            const newFileName = crypto.randomBytes(5).toString('hex') + filesList[i].name.substr(dot)

            filesList[i].mv(path.resolve(`${uploadedFilesPath}/${title}/${newFileName}`))

            await FileNameModel.create({
                name: realFileName, // удалить его
                gename: newFileName
            })

        }
        const theory = await TheoryModel.create({
            title,
            content
        })

        const ids = categories.split(',')
        for (let i = 0; i < ids.length; i++) {
            await CategoryTheoryModel.create({
                theoryId: theory.id,
                categoryId: ids[i]
            })
        }

        return true
    }


    
}

module.exports = new AdminService();


const {CategoryModel, SolveModel, TaskModel, TheoryModel, FileNameModel, CategoryTheoryModel} = require('../models');
const fs = require("fs");
const path = require("path");

class AdminService {

    async createCategory(name, theory) {
        const foundTheory = await TheoryModel.findOne({where: {theory}})
        const candidate = await CategoryModel.findOne({where: {name}})
        if (candidate) {
            return false
        }
        await CategoryModel.create({name, theoryId: foundTheory.id})
        return true
    }

    async createTask(name, description, solve, category, theory) {
        const foundCategory = await CategoryModel.findOne({where: {category}})
        const foundTheory = await TheoryModel.findOne({where: {theory}})

        const task = await TaskModel.create({
            name,
            description,
            categoryId: foundCategory.id,
            theoryId: foundTheory.id
        })

        await SolveModel.create({
            solve,
            taskId: task.id
        })

        return true
    }

    async createTheory(title, content, filesList, categories) {
        const uploadedFilesPath = '../client/public/files';
        fs.mkdir(`${uploadedFilesPath}/${title}`, () => {
        })

        for (let i = 0; i < filesList.length; i++) {
            const dot = filesList[i].name.lastIndexOf('.');

            const newFileName = crypto.randomBytes(5).toString('hex') + filesList[i].name.substr(dot)

            const realFileName = filesList[i].name

            await FileNameModel.create({
                name: realFileName,
                gename: newFileName
            })

            filesList[i].mv(path.resolve(`${uploadedFilesPath}/${title}/${newFileName}`))
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


const {CategoryModel,SolveModel,TaskModel, TheoryModel,FileNameModel} = require('../models');

const {CategoryModel, TaskModel, TheoryModel, FileNameModel, CategoryTheoryModel, CategoryTaskModel} = require('../models');
const fs = require("fs");
const path = require("path");
const {Op} = require('sequelize');
const crypto = require('crypto')

class AdminService {

    async createCategory(name, theory) {
        const candidate = await CategoryModel.findOne({where: {name}})
        if (candidate) {
            return false
        }
        await CategoryModel.create({name})
        return true
    }

    async createTask(description, questions, title, categories) {
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


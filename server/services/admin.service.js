const {CategoryModel, TaskModel, TheoryModel, FileNameModel, CategoryTheoryModel, CategoryTaskModel} = require('../models');
const fs = require("fs");
const path = require("path");
const {Op} = require('sequelize');
const crypto = require('crypto')

class AdminService {

    async createCategory(categoryTitle){
        const category = await CategoryModel.create({
            title: categoryTitle
        })
        return true
        // for (let i = 0; theory.length; i++) {
        //     await CategoryTheoryModel.create({
        //         categoryId: category.id,
        //         theoryId: theory[i].id
        //     })
        // }
    }

    async createTask(title, description, right_answer, questions, categories) {
        const task = await TaskModel.create({
            title,
            description,
            rightAnswer: right_answer,
            question1: questions['question_1'],
            question2: questions['question_2'],
            question3: questions['question_3'],
            question4: questions['question_4'],
        })

        for (let i = 0; i < categories.length; i++) {
            await CategoryTaskModel.create({
                taskId: task.id,
                categoryId: categories[i]
                //TODO ---Получаю массив id теории?---
            })
        }
        return true
    }

    async createTheory(title, content, filesList, categories) {

        const theory = await TheoryModel.create({
            title,
            content
        })

        //TODO ---Путь до диры со статикой в dev.---
        const uploadedFilesPath = '../client/public/files';

        fs.mkdir(`${uploadedFilesPath}/${title}`, (err) => {
            if (err) {
                console.log(err.message);
            }
            console.log(`Папочка ${title} успешно создана.`);
        })

        for (let i = 0; i < filesList.length; i++) {
            const dot = filesList[i].name.lastIndexOf('.');

            const newFileName = crypto.randomBytes(5).toString('hex') + filesList[i].name.substr(dot)

            filesList[i].mv(path.resolve(`${uploadedFilesPath}/${title}/${newFileName}`))

            console.log(newFileName)
            await FileNameModel.create({
                name: newFileName,
                theoryId: theory.id
            })
        }

        //TODO ---Массив или строка?---
        const idsArray = categories.split(',')
        for (let i = 0; i < idsArray.length; i++) {
            await CategoryTheoryModel.create({
                theoryId: theory.id,
                categoryId: idsArray[i]
            })
        }

        return true
    }

    async showAllCategories() {
        const categories = await CategoryModel.findAll({raw: true})
        return categories
    }

}

module.exports = new AdminService();


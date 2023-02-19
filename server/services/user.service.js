const {
    UserModel,
    TheoryModel,
    TaskModel,
    CategoryModel,
    FileNameModel,
    CategoryTheoryModel,
    SolveModel,
    CategoryTaskModel
} = require('../models')
const {Op} = require('sequelize');

class UserService {

    async startApp(lastname) {
        const users = await UserModel.findAll({
            raw: true,
            where: {
                lastname: {
                    [Op.substring]: lastname
                }
            },
            order: [
                ['lastname', 'ASC']
            ]
        });

        for (let i = 0; i < users.length; i++) {
            delete users[i].password
        }

        return users
    }

    async showAllTheory() {
        // Теория
        const theoryObjects = await TheoryModel.findAll({raw: true})

        //Возвращение всех файлов в соответствие каждому объекту теории.
        theoryObjects.map(async (th) => {
            th.files = await FileNameModel.findAll({where: {theoryId: th.id}})
        })

        let ArrayIdFromOneTheory = []
        for (let i = 0; i < theoryObjects.length; i++) {
            let categoryIdObjectsFromOneTheoryObjects = await CategoryTheoryModel.findAll(
                {
                    where:
                        {
                            theoryId: theoryObjects[i].id
                        },
                    attributes: ['categoryId']
                }
            )
            //Категории для одной теории в id-объектах. -> массив id категорий для одного объекта теории -> имя категорий для одного объекта в массиве
            for (let j = 0; j < categoryIdObjectsFromOneTheoryObjects.length; j++) {
                ArrayIdFromOneTheory.push(categoryIdObjectsFromOneTheoryObjects[j].categoryId)
            }
            const categoriesNameObjectsFromOneTheory = await CategoryModel.findAll(
                {
                    where: {
                        id: {
                            [Op.in]: ArrayIdFromOneTheory
                        }
                    },
                    attributes: ['title'],
                    raw: true
                })
            let categoriesNameArrayFromOneTheory = []
            for (let k = 0; k < categoriesNameObjectsFromOneTheory.length; k++) {
                categoriesNameArrayFromOneTheory.push(categoriesNameObjectsFromOneTheory[k].title)
            }
            theoryObjects[i].categories = categoriesNameArrayFromOneTheory
        }

        return theoryObjects
    }

    async showAllTasks() {
        const tasks = await TaskModel.findAll({raw: true})
        tasks.map(async (task) => {
            const categoriesArrayObjectsId = await CategoryTaskModel.findAll(
                {
                    where: {
                        taskId: task.id
                    },
                    attributes: ['categoryId']
                }
            )
            let categoriesArrayId = []
            categoriesArrayObjectsId.map(oneOjb => {
                categoriesArrayId.push(oneOjb.categoryId)
            })
            task.categories = await CategoryModel.findAll({
                where: {
                    id: {
                        [Op.in]: categoriesArrayId
                    }
                }
            })
        })

        return tasks
    }

}

module.exports = new UserService();

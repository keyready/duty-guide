const {UserModel,TheoryModel, TaskModel, CategoryModel,FileNameModel,CategoryTheoryModel, SolveModel, CategoryTaskModel} = require('../models')
const {Op} = require('sequelize');

class UserService {

    async showAllTheory(){
        //имена категорий.
        const theoryObjects = await TheoryModel.findAll({raw:true})

        theoryObjects.forEach(th =>{
            th.files = FileNameModel.findAll({where:{theoryId:th.id}})
        }) //Возвращение всех файлов в соответствие каждому объекту теории.

        let ArrayIdFromOneTheory=[]
        for (let i = 0; i < theoryObjects.length; i++){
            let categoryIdObjectsFromOneTheoryObjects = CategoryTheoryModel.findAll(
                {
                    where:
                    {
                        theoryId:theoryObjects[i].id
                    },
                    attributes:['categoryId']
                }
            )
            //Категории для одной теории в id-объектах. -> массив id категорий для одного объекта теории -> имя категорий для одного объекта в массиве
            for (let j = 0; j < categoryIdObjectsFromOneTheoryObjects.length;j++){
                ArrayIdFromOneTheory.push(categoryIdObjectsFromOneTheoryObjects[j].categoryId)
            }
            const categoriesNameObjectsFromOneTheory = CategoryModel.findAll(
                {
                    where:{
                        id:{
                            [Op.in]:ArrayIdFromOneTheory
                        }
                    },
                    attributes:['name']
                })
            let categoriesNameArrayFromOneTheory = []
            for(let k = 0; k < categoriesNameObjectsFromOneTheory.length;k++){
                categoriesNameArrayFromOneTheory.push(categoriesNameObjectsFromOneTheory[i].name)
            }
            theoryObjects[i].categories = categoriesNameArrayFromOneTheory
        }
        return theory
    }    

    async showAllTasks(){
        const tasks = await TaskModel.findAll({raw:true})
        tasks.forEach(task =>{            
            /*ВЕРНЫЙ ОТВЕТ*/
            task.rightAnswer = SolveModel.findOne({where:{taskId:task.id},attributes:['value']})
            /**/
            /*НЕВЕРНЫЕ ОТВЕТЫ*/
            task.questions = SolveModel.findAll({where:{id:{[Op.in]:Array.from({length: 4}, () => Math.floor(Math.random() * 4))},attribute:['value']}})
            /**/
            
            let CategoryIdArrayObjects = CategoryTaskModel.findAll({where:{taskId:task.id},attributes:['categoryId']})
            let CategoryIdArray = []
            for (let i = 0; i < CategoryIdArrayObjects.length;i++){
                CategoryIdArray.push(CategoryIdArrayObjects[i].id)
            }
            const categoryArrayNameObjects = CategoryModel.findAll({where:{id:{[Op.in]:CategoryIdArray},attribute:['name']}})
            let categoryArrayName = []
            for (let i = 0; i < categoryArrayNameObjects.length;i++){
                categoryArrayName.push(categoryArrayNameObjects[i].name)
            }
            /*Категории массив*/
            task.categories = categoryArrayName
            /**/
        })

        return tasks
    }

    async showAllCategories(){
        const categories = await CategoryModel.findAll({raw:true})
        return categories
    }

}

module.exports = new UserService();
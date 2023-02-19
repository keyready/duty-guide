const UserService = require('../services/user.service');
const {UserModel, TaskModel, CategoryTaskModel} = require("../models");
const {Op} = require("sequelize");
const {all} = require("express/lib/application");
const {log} = require("util");

const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const generateTest = (n1, n2, len) => {
    if (n1 === n2 && len === 1) return [n1];
    if (!len) return []
    let min = n1 < n2 ? n1 : n2;
    let max = n1 > n2 ? n1 : n2;
    let o = [];
    for (let i = 0; i < len;) {
        let n = randomInt(min, max)
        if (!o.includes(n)) {
            o[i] = n;
            i++
        }
    }
    return o;
}

class UserControllers {

    async startApp(req, res) {
        try {
            console.log('запрос:', req.body)

            const users = await UserService.startApp(req.body.lastname)
            return res.status(200).json(users)
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async login(req, res) {
        try {
            const {id, password} = req.body;
            req.session.userId = id
            req.session.authorized = true
            req.session.save(async () => {
                const selectedUser = await UserModel.findByPk(id, {raw: true})
                if (selectedUser.role === 'admin' && password !== selectedUser.password) {
                    return res.status(403).json({message: 'Неверный пароль'})
                }
                return res.cookie('session', req.session.id).status(200).json(selectedUser)
            });
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async refreshUserData(req, res) {
        try {
            const {id} = req.body

            const user = await UserModel.findByPk(id, {raw: true})

            return res.status(200).json(user)
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async changeStatistics(req, res) {
        try {
            const {id, newSolves, newRightSolves} = req.body;

            console.log(req.body)

            const user = await UserModel.findByPk(id, {raw: true})
            const solvesFromBd = user.solvedTasksAmount;
            const correctlySolvedFromBd = user.correctlySolved;

            await UserModel.update(
                {
                    correctlySolved: correctlySolvedFromBd + newRightSolves,
                    solvedTasksAmount: solvesFromBd + newSolves
                },
                {
                    where: {id}
                }
            )

            res.status(200).json({message: 'Статистика обновлена'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async createTest(req, res) {
        try {
            const {tasksAmount, categories} = req.body

            if (!categories.length) {
                const tasks = await TaskModel.findAll({raw: true})
                const tasksAmountInStore = await TaskModel.count();
                const randIds = await generateTest(0, tasksAmountInStore - 1, tasksAmount)

                let test = [];
                randIds.forEach(testItem => test.push(tasks[testItem]))

                return res.status(200).json(test)
            }

            let filteredTasksByCategory = []
            for (let i = 0; i < categories.length; i++) {
                filteredTasksByCategory.push(
                    await CategoryTaskModel.findAll({
                        raw: true,
                        where: {
                            categoryId: categories[i]
                        }
                    })
                )
            }


            let tasksIds = []
            filteredTasksByCategory.forEach(item => {
                for (let i = 0; i < item.length; i++) {
                    tasksIds.push(
                        item[i].taskId
                    )
                }
            })

            const result = tasksIds.reduce((acc, item) => {
                if (acc.includes(item)) {
                    return acc;
                }
                return [...acc, item];
            }, []);

            let tasks = [];
            for (let i = 0; i < result.length; i++) {
                tasks.push(
                    await TaskModel.findByPk(result[i], {raw: true})
                )
            }

            if (tasks.length < tasksAmount) {
                return res.status(404).json(
                    {
                        message:
                            'Недостаточно вопросов в базе данных по выбранной категории, попробуйте изменить запрос поиска'
                    }
                )
            }

            const testIds = generateTest(0, tasks.length - 1, tasksAmount)

            let test = []
            testIds.forEach(testItem => test.push(tasks[testItem]))

            return res.status(200).json(test)
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async logout(req, res) {
        try {
            req.session.destroy()
            res.clearCookie('session')
            return res.status(200).json({message: 'Успешно вышел.'})
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async showAllTasks(req, res) {
        try {
            const tasks = await UserService.showAllTasks()
            return res.status(200).json(tasks)
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async showAllTheory(req, res) {
        try {
            const theory = await UserService.showAllTheory();
            return res.status(200).json(theory)
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async fetchTasksAmount(req, res) {
        try {
            const tasksAmount = await TaskModel.count()
            return res.status(200).json(tasksAmount)
        } catch (e) {
            console.log(e.message)
            return res.status(500).json(e.message)
        }
    }
}

module.exports = new UserControllers();

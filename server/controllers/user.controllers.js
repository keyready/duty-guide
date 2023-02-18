const UserService = require('../services/user.service');
const {UserModel, TaskModel} = require("../models");

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

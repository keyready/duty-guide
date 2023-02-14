const UserService = require('../services/user.service');
const {UserModel} = require("../models");

class UserControllers {

    async startApp(req, res) {
        try {
            const users = await UserService.startApp()
            return res.status(200).json(users)
        } catch (e) {
            console.log(e.message);
            return res.status(500).json(e.message)
        }
    }

    async login(req, res) {
        try {
            const {id} = req.body;
            req.session.userId = id
            req.session.authorized = true

            console.log(req.session)

            const selectedUser = await UserModel.findByPk(id, {raw: true})

            return res.cookie('session',req.session.id).status(200).json(selectedUser)
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

}

module.exports = new UserControllers();

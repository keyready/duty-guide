const UserControllers = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get('/tasks', UserControllers.showAllTasks)
    app.get('/theory', UserControllers.showAllTheory)
    app.post('/login',UserControllers.login)
}

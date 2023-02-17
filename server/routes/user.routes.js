const UserControllers = require('../controllers/user.controllers');
const {checkAuth} = require('../middleware/auth');
const AdminControllers = require("../controllers/admin.controllers");

module.exports = (app) => {
    app.get('/loginUsers', UserControllers.startApp)
    app.get('/tasks', UserControllers.showAllTasks)
    app.get('/theory', UserControllers.showAllTheory)
    app.post('/login', UserControllers.login)
    app.get('/logout', [checkAuth], UserControllers.logout)
    app.get('/categories', AdminControllers.showAllCategories)
    app.get('/tasksAmount', UserControllers.fetchTasksAmount)
}
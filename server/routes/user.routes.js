const UserControllers = require('../controllers/user.controllers');
const {checkAuth} = require('../middleware/auth');
const AdminControllers = require("../controllers/admin.controllers");

module.exports = (app) => {
    app.post('/updateStatistics', UserControllers.changeStatistics)
    app.post('/login', UserControllers.login)
    app.post('/loginUsers', UserControllers.startApp)
    app.post('/refresh', UserControllers.refreshUserData)
    app.post('/createTest', UserControllers.createTest)
    app.get('/tasks', UserControllers.showAllTasks)
    app.get('/theory', UserControllers.showAllTheory)
    app.get('/logout', [checkAuth], UserControllers.logout)
    app.get('/categories', AdminControllers.showAllCategories)
    app.get('/tasksAmount', UserControllers.fetchTasksAmount)
}

const UserControllers = require('../controllers/user.controllers');
const {checkAuth} = require('../middleware/auth');
const AdminControllers = require("../controllers/admin.controllers");

module.exports = (app) => {
    app.get('/loginUsers', UserControllers.startApp)
    app.get('/tasks', [checkAuth], UserControllers.showAllTasks)
    app.get('/theory', [checkAuth], UserControllers.showAllTheory)
    app.post('/login', UserControllers.login)
    app.get('/logout', [checkAuth], UserControllers.logout)
    app.get('/categories', AdminControllers.showAllCategories)
}

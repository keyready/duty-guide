const UserControllers = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get('/tasks', UserControllers.showAllTasks)
    app.get('/categories', UserControllers.showAllCategory)
    app.get('/theory', UserControllers.showAllTheory)
}

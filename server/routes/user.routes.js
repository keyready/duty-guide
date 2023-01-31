const UserControllers = require('../controllers/user.controllers');
const {checkAuth} = require('../middleware/auth');

module.exports = (app) => {
    app.get('/tasks',[checkAuth],UserControllers.showAllTasks)
    app.get('/theory',[checkAuth],UserControllers.showAllTheory)
    app.post('/login',UserControllers.login)
    app.get('/logout',[checkAuth],UserControllers.logout)
}

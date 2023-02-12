const AdminControllers = require('../controllers/admin.controllers')

module.exports = (app) => {
    app.post('/admin/createTask', AdminControllers.createTask)
    app.post('/admin/createCategory', AdminControllers.createCategory)
    app.post('/admin/createTheory', AdminControllers.createTheory)
    app.get('/admin/categories', AdminControllers.showAllCategories)
}

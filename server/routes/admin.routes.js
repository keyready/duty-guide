const AdminControllers = require('../controllers/admin.controllers')

module.exports = (app) => {
    app.post('/admin/createUser',AdminControllers.createUser)
    app.post('/admin/createTask', AdminControllers.createTask)
    app.post('/admin/createCategory', AdminControllers.createCategory)
    app.post('/admin/createTheory', AdminControllers.createTheory)
    app.get('/admin/categories', AdminControllers.showAllCategories)
    app.post('/admin/deleteCategory', AdminControllers.deleteCategory)
    app.post('/admin/deleteTask', AdminControllers.deleteTask)
    app.post('/admin/deleteTheory', AdminControllers.deleteTheory)
}

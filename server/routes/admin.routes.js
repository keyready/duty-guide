const AdminService = require('../services/admin.service');

module.exports = (app) =>{
    app.post('/admin/createTask',AdminService.createTask)
    app.post('/admin/createCategory',AdminService.createCategory)
    app.post('/admin/createTheory',AdminService.createTheory)
}

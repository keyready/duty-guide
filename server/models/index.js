const UserModel = require('./user.model');
const TaskModel = require('./task.model');
const TheoryModel = require('./theory.model');
const FileNameModel = require('./fileName.model');
const CategoryModel = require('./category.model'); 
const SolveModel = require('./solve.model');

//TODO
//1 теория - много категории
//1 теории - много файлов  

TheoryModel.hasMany(TaskModel);
TheoryModel.hasMany(FileNameModel);
TheoryModel.hasMany(CategoryModel)
CategoryModel.hasMany(TaskModel);
TaskModel.hasOne(SolveModel);

module.exports = {
    UserModel,
    TaskModel,
    TheoryModel,
    FileNameModel,
    CategoryModel,
    SolveModel
}

//
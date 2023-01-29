const UserModel = require('./user.model');
const TaskModel = require('./task.model');
const TheoryModel = require('./theory.model');
const FileNameModel = require('./fileName.model');
const CategoryModel = require('./category.model');
const SolveModel = require('./solve.model');

const CategoryTheoryModel = require('./category-theory');
const CategoryTaskModel = require('./category-task.model');
//TODO
//1 теория - много категории
//1 теории - много файлов

TheoryModel.hasMany(TaskModel);
TheoryModel.hasMany(FileNameModel);
CategoryModel.belongsToMany(TheoryModel,{through:CategoryTheoryModel});
TheoryModel.belongsToMany(CategoryModel,{through:CategoryTheoryModel})

CategoryModel.belongsToMany(TaskModel,{through:CategoryTaskModel});
TaskModel.belongsToMany(CategoryModel,{through:CategoryTaskModel});

TaskModel.hasOne(SolveModel);

module.exports = {
    UserModel,
    TaskModel,
    TheoryModel,
    FileNameModel,
    CategoryModel,
    SolveModel,
    CategoryTheoryModel,
    CategoryTaskModel
}

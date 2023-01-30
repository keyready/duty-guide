const UserModel = require('./user.model');
const TaskModel = require('./task.model');
const TheoryModel = require('./theory.model');
const FileNameModel = require('./fileName.model');
const CategoryModel = require('./category.model');
const CategoryTheoryModel = require('./category-theory');
const CategoryTaskModel = require('./category-task.model');


/*
    Категория - дневальный по курсу, дежурный по курсу, пожарный патруль. 
    Теория - устав, стенды, методички 
    Задача.
*/

TheoryModel.hasMany(FileNameModel);

CategoryModel.belongsToMany(TheoryModel,{through:CategoryTheoryModel});
TheoryModel.belongsToMany(CategoryModel,{through:CategoryTheoryModel})

CategoryModel.belongsToMany(TaskModel,{through:CategoryTaskModel});
TaskModel.belongsToMany(CategoryModel,{through:CategoryTaskModel});


module.exports = {
    UserModel,
    TaskModel,
    TheoryModel,
    FileNameModel,
    CategoryModel,
    CategoryTheoryModel,
    CategoryTaskModel
}

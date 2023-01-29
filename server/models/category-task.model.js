const DB = require('../config/db.connect')
const {DataTypes} = require('sequelize')

module.exports = DB.define('category-task',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
},{
    timestamps:false,
    tableName:'category-task'
})

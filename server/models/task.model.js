const DB = require('../config/db.connect');
const {DataTypes} = require('sequelize');

module.exports = DB.define('tasks',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:'tasks',
    timestamps:false
})
const DB = require('../config/db.connect');
const {DataTypes} = require('sequelize');

module.exports = DB.define('categories',{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    tableName:'categories',
    timestamps:false
})
const DB = require('../config/db.connect');
const {DataTypes} = require('sequelize');

module.exports = DB.define('filenames',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    tableName:'filenames',
    timestamps:false
})
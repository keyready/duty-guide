const DB = require('../config/db.connect');
const {DataTypes} = require('sequelize');

module.exports = DB.define('solves',{
    value:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false,
    tableName:'solves'
})
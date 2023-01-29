const DB = require('../config/db.connect')
const {DataTypes} = require('sequelize');

module.exports = DB.define('category-theory',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    }
},{
    tableName:'category-theory',
    timestamps:false
})

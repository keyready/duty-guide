const DB = require('../config/db.connect');
const {DataTypes} = require('sequelize');

module.exports = DB.define('users', {
    firstname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    middlename:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'user'
    },
    quantity_solve:{
        type:DataTypes.INTEGER,
        defaultValue:0,
        allowNull:false
    }
},{
    tableName:'users',
    timestamps:false
})
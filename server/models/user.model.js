const DB = require('../config/db.connect');
const {DataTypes} = require('sequelize');

module.exports = DB.define('users', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middlename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    },
    solvedTasksAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    correctlySolved: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'users',
    timestamps: false
})

const DB = require('../config/db.connect');
const {DataTypes} = require('sequelize');

module.exports = DB.define('tasks', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    right_answer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question4: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tasks',
    timestamps: false
})

const { Sequelize } = require('sequelize');

// module.exports = new Sequelize('duty-guide', 'postgres', 'userSQL', {
//     dialect: 'postgres',
//     host: 'localhost',
//     port: 5432
// })

module.exports = new Sequelize('duty', 'admin', 'admin', {
    dialect: 'postgres',
    host: 'db',
    port: 5432
})

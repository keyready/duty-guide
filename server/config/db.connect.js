const { Sequelize } = require('sequelize');

// module.exports = new Sequelize('duty-guide', 'postgres', 'userSQL', {
//     dialect: 'postgres',
//     host: 'localhost',
//     port: 5432
// })

module.exports = new Sequelize('duty', 'k0fanov36', 'k0fanov36', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

const Sequelize = require("sequelize");

const sequelize = new Sequelize('node_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})


module.exports = sequelize;
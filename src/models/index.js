const Sequelize = require("sequelize");
const config = require('../config/config.js')
const City = require('./city.model.js')

const sequelize = new Sequelize(config.mysql.NAME, config.mysql.USER, config.mysql.PASSWORD, {
  host: config.mysql.HOST,
  dialect: config.mysql.dialect,
  operatorsAliases: false,

  pool: {
    max: config.mysql.pool.max,
    min: config.mysql.pool.min,
    acquire: config.mysql.pool.acquire,
    idle: config.mysql.pool.idle
  }
});

const db = {
    sequelize,
    city: City(sequelize),
};

module.exports = db;
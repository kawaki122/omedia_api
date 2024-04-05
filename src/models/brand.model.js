const Sequelize = require("sequelize");
const sequelize = require("../config/db");

module.exports = sequelize.define("brands", {
  logo: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
  },
  name: {
    type: Sequelize.STRING,
  },
});

const Sequelize = require("sequelize");
const sequelize = require("../config/db");

module.exports = sequelize.define("cities", {
  city: {
    type: Sequelize.STRING,
  },
});

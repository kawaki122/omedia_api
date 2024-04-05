const Sequelize = require("sequelize");
const sequelize = require("../config/db");

module.exports = sequelize.define("campaigns", {
  from: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  to: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
  },
});

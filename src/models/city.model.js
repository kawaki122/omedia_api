const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const City = sequelize.define("city", {
    name: {
      type: Sequelize.STRING
    },
  });

  return City;
};

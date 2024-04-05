const City = require('./city.model.js')
const Client = require('./client.model.js')
const Brand = require('./brand.model.js')

//One to many relationship of Client and Brand
Client.hasMany(Brand, {as: 'brands'});
Brand.belongsTo(Client);

module.exports = {
  City,
  Client,
  Brand,
};
const City = require('./city.model.js')
const Client = require('./client.model.js')
const Brand = require('./brand.model.js')
const Campaign = require('./campaign.model.js')

//One to many relationship of Client and Brand
Client.hasMany(Brand, {as: 'brands'});
Brand.belongsTo(Client);

//One to many relationship of Brand and Campaign
Brand.hasMany(Campaign, {as: 'campaigns'});
Campaign.belongsTo(Brand);

module.exports = {
  City,
  Client,
  Brand,
  Campaign,
};
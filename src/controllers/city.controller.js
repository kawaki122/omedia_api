const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { City } = require('../models/index')

const getAll = async (req, res) => {
  try {
    const cities = await City.findAll();
    
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createOne = async (req, res) => {
  try {
    const cityObj = {
      city: req.body.city,
    }
    const result = await City.create(cityObj);
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateOne = async (req, res) => {
  try {
    const cityObj = {
      city: req.body.city,
    }
    const result = await City.update(cityObj, { where: {id: req.body.id}});
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteMany = async (req, res) => {
  try {
    const result = await City.destroy({ where: { id: req.body.ids } });
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    getAll,
    createOne,
    updateOne,
    deleteMany,
};
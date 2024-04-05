const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Client, Brand } = require('../models/index')

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createClient = async (req, res) => {
  try {
    const clientObj = {
      name: req.body.name,
    }
    const result = await Client.create(clientObj);
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const clientObj = {
      name: req.body.name,
    }
    const result = await Client.update(clientObj, { where: {id: req.body.id}});
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteClients = async (req, res) => {
  try {
    const result = await Client.destroy({ where: { id: req.body.ids } });
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createBrand = async (req, res) => {
  try {
    const brandObj = {
      name: req.body.name,
    }
    const client = await Client.findByPk(req.body.clientId)
    const result = await client.createBrand(brandObj);
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    const brandObj = {
      name: req.body.name,
    }
    const result = await Brand.update(brandObj, { where: {id: req.body.id}});
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBrands = async (req, res) => {
  try {
    const result = await Brand.destroy({ where: { id: req.body.ids } });
    
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    getAllClients,
    createClient,
    updateClient,
    deleteClients,
    getAllBrands,
    createBrand,
    updateBrand,
    deleteBrands,
};
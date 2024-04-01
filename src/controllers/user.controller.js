// const User = require('../models/user.model');

const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const getAll = async (req, res) => {
  try {
    // const users = await User.find();
    res.json([{name: 'Zaid'}, {name:'Muneeb'}]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    getAll,
};
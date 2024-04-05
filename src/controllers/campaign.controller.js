const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Campaign, Brand } = require("../models/index");

const getAll = async (req, res) => {
  try {
    const campaigns = await Campaign.findAll({
      include: [
        {
          model: Brand,
          as: 'brand',
        },
      ],
    });

    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createOne = async (req, res) => {
  try {
    const campObj = {
      from: req.body.from,
      to: req.body.to,
      status: req.body.status,
    };
    const brand = await Brand.findByPk(req.body.brandId);
    const result = await brand.createCampaign(campObj);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateOne = async (req, res) => {
  try {
    const campObj = {
        from: req.body.from,
        to: req.body.to,
        status: req.body.status,
        brandId: req.body.brandId,
    };
    const result = await Campaign.update(campObj, { where: { id: req.body.id } });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteMany = async (req, res) => {
  try {
    const result = await Campaign.destroy({ where: { id: req.body.ids } });

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

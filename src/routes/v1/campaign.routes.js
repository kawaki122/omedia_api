const express = require('express');
const router = express.Router();
const { getAll, createOne, updateOne, deleteMany } = require('../../controllers/campaign.controller');

router.get('/', getAll);
router.post('/', createOne);
router.put('/', updateOne);
router.post('/delete', deleteMany);

module.exports = router;
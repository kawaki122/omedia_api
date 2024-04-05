const express = require('express');
const router = express.Router();
const { getAllBrands, createBrand, updateBrand, deleteBrands } = require('../../controllers/client_brand.controller');

router.get('/', getAllBrands);
router.post('/', createBrand);
router.put('/', updateBrand);
router.post('/delete', deleteBrands);

module.exports = router;
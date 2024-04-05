const express = require('express');
const router = express.Router();
const { getAllClients, createClient, updateClient, deleteClients } = require('../../controllers/client_brand.controller');

router.get('/', getAllClients);
router.post('/', createClient);
router.put('/', updateClient);
router.post('/delete', deleteClients);

module.exports = router;
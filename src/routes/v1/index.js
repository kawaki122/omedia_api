const express = require('express');
const cityRoute = require('./city.routes');
const clientRoute = require('./client.routes');
const brandRoute = require('./brand.routes');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/cities',
    route: cityRoute,
  },
  {
    path: '/clients',
    route: clientRoute,
  },
  {
    path: '/brands',
    route: brandRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
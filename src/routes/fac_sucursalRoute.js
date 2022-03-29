const router = require('express').Router();

const fac_sucursalController = require('../controllers/fac_sucursalController');

router.get('/', fac_sucursalController.list);

module.exports = router;
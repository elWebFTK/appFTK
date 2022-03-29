const router = require('express').Router();

const sucursalesController = require('../controllers/sucursalesController');

router.get('/', sucursalesController.sucursal);

module.exports = router;
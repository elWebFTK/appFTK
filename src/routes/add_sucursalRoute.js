const router = require('express').Router();

const addsucursalController = require('../controllers/add_sucursalController');

router.get('/', addsucursalController.addsucursal);
router.post('/add', addsucursalController.save);

module.exports = router;
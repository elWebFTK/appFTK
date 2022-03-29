const router = require('express').Router();

const rVentaController = require('../controllers/rVentaController');

router.get('/', rVentaController.rventa);
router.post('/addm', rVentaController.save);


module.exports = router;
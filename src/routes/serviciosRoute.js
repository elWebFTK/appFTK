const router = require('express').Router();

const serviciosController = require('../controllers/serviciosController');

router.get('/', serviciosController.servicio);

module.exports = router;
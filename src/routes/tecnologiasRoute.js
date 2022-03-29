const router = require('express').Router();

const tecnologiaController = require('../controllers/tecnologiasController');

router.get('/', tecnologiaController.tec);

module.exports = router;
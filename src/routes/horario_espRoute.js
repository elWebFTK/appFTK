const router = require('express').Router();

const especialistaController = require('../controllers/horario_espController');

router.get('/', especialistaController.especialista);

module.exports = router;
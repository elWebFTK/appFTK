const router = require('express').Router();

const facController = require('../controllers/facialistasController');

router.get('/', facController.list);
router.get('/mostrar', facController.mostrar);

module.exports = router;
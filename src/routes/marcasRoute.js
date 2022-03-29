const router = require('express').Router();

const marcasController = require('../controllers/marcasController');

router.get('/', marcasController.config);
router.get('/update/:idMarca', marcasController.edit);
router.post('/update/:idMarca', marcasController.update);

module.exports = router;
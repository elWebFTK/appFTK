const router = require('express').Router();

const calendarioController = require('../controllers/calendarioController');

router.get('/', calendarioController.list);
router.post('/add', calendarioController.agendar);

module.exports = router;
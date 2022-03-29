const router = require('express').Router();

const addservController = require('../controllers/add_servicioController');

router.get('/', addservController.addserv);
router.post('/add', addservController.save);

module.exports = router;
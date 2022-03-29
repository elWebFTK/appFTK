const router = require('express').Router();

const addcabinaController = require('../controllers/add_cabinaController');

router.get('/', addcabinaController.addcabina);

module.exports = router;
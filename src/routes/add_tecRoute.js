const router = require('express').Router();

const addtecController = require('../controllers/add_tecController');

router.get('/', addtecController.addtec);

module.exports = router;
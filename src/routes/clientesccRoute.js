const router = require('express').Router();

const clientesccController = require('../controllers/clientesccController');

router.get('/', clientesccController.clientescc);

module.exports = router;
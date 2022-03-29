const router = require('express').Router();

const addrolController = require('../controllers/add_rolController');

router.get('/', addrolController.addrol);
router.post('/add', addrolController.save);

module.exports = router;
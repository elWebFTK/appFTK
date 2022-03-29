const router = require('express').Router();

const ccenterController = require('../controllers/ccenterController');

router.get('/', ccenterController.ccenter);


module.exports = router;
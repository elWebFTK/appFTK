const router = require('express').Router();

const contactcController = require('../controllers/contactcController');

router.get('/', contactcController.contactc);

module.exports = router;
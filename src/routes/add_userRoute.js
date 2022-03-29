const router = require('express').Router();

const adduserController = require('../controllers/add_userController');

router.get('/', adduserController.adduser);
router.post('/add', adduserController.save);

module.exports = router;
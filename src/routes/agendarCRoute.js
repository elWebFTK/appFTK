const router = require('express').Router();

const agendarcController = require('../controllers/agendarcController');

router.get('/', agendarcController.agendarC);
router.get('/consult/', agendarcController.consult);
router.post('/save', agendarcController.save);

module.exports = router;
const router = require('express').Router();

const rolController = require('../controllers/rol_userController');

router.get('/', rolController.rol);
router.get('/update/:Usuarios_idUsuarios', rolController.edit);
router.post('/update/:Usuarios_idUsuarios', rolController.update);
router.get('/delete/:Usuarios_idUsuarios', rolController.delete);

module.exports = router;
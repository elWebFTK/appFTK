const router = require('express').Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.usuarios);
router.get('/update/:idUsuarios', usuariosController.edit);
router.post('/update/:idUsuarios', usuariosController.update);
router.get('/delete/:idUsuarios', usuariosController.delete);

module.exports = router;
const controller = {};

controller.rol = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios.idUsuarios, usuarios.Nombre, rol.Tipo FROM usuarios INNER JOIN rol INNER JOIN usuarios_has_rol ON usuarios.idUsuarios = usuarios_has_rol.Usuarios_idUsuarios AND rol.idRol = usuarios_has_rol.Rol_idRol;', (err, rol) => {
            if (err) {
                res.json(err);
            }
            console.log(rol);
            res.render('rol_user', {
                data: rol
            });
        });
    });
};


controller.edit = (req, res) => {
    const { idUsuarios } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM usuarios.idUsuarios, usuarios.Nombre, rol.Tipo FROM usuarios INNER JOIN rol INNER JOIN usuarios_has_rol ON usuarios.idUsuarios = usuarios_has_rol.Usuarios_idUsuarios AND rol.idRol = usuarios_has_rol.Rol_idRol WHERE idUsuarios = ?", idUsuarios, (err, rows) => {
        res.render('rol_user', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { idUsuarios } = req.params;
    const newUser = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE usuarios_has_rol set ? where Usuarios_idUsuarios = ?', [newUser, idUsuarios], (err, rows) => {
      if(err){
        console.log(err);
      }else{
      res.redirect('/');
      }
    });
    });
  };
  
  controller.delete = (req, res) => {
    const { idUsuarios } = req.params;
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM usuarios_has_rol WHERE Usuarios_idUsuarios = ?', [idUsuarios], (err, rows) => {
        res.redirect('/');
      });
    });
  }
module.exports = controller;
const controller = {};

controller.usuarios = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios.*, sucursal.Nombre_s, marca.Nombre_m FROM usuarios INNER JOIN sucursal ON sucursal.idSucursal = usuarios.Sucursal_idSucursal INNER JOIN marca ON marca.idMarca = sucursal.Marca_idMarca;', (err, usuario) => {
            if (err) {
                res.json(err);
            }
            console.log(usuario);
            res.render('usuarios', {
                data: usuario
            });
        });
    });
};

controller.edit = (req, res) => {
    const { idUsuarios } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT usuarios.*, sucursal.Nombre_s, marca.Nombre_m FROM usuarios INNER JOIN sucursal ON sucursal.idSucursal = usuarios.Sucursal_idSucursal INNER JOIN marca ON marca.idMarca = sucursal.Marca_idMarca WHERE idUsuarios = ?', idUsuarios, (err, rows) => {
            console.log(rows);
            res.render('usuarios', {
                
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const { idUsuarios } = req.params;
    const newUser = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE usuarios set ? WHERE idUsuarios = ?', [newUser, idUsuarios], (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/usuarios');
            }
        });
    });
};

controller.delete = (req, res) => {
    const { idUsuarios } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios WHERE idUsuarios = ?', [idUsuarios], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;
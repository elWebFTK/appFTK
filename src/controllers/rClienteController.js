const controller = {};

controller.rcliente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM marca', (err, marca) => {
            if (err) {
                res.json(err)
            }
            console.log(marca);
            data = marca

        });
        conn.query('SELECT * FROM sucursal', (err, sucursal) => {
            if (err) {
                res.json(err)
            }
            console.log(sucursal);
            datasuc = sucursal

        });
        conn.query('SELECT usuarios.Nombre FROM usuarios INNER JOIN usuarios_has_rol ON usuarios_has_rol.Usuarios_idUsuarios = usuarios.idUsuarios INNER JOIN rol ON rol.idRol = usuarios_has_rol.Rol_idRol WHERE rol.idRol = "2";', (err, asesor) => {
            if (err) {
                res.json(err)
            }
            console.log(asesor);
            res.render('rCliente', {
                rsAs: asesor
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cliente set ?', data, (err, clientes) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(clientes);
                res.redirect('/rCliente');
            }
        });
    })
};

module.exports = controller;
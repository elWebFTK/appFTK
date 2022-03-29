const controller = {};

controller.sucursal = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT cabina.idCabina, sucursal.Nombre_s, sucursal.Direccion, sucursal.Telefono, sucursal.Email FROM sucursal INNER JOIN cabina ON cabina.Sucursal_idSucursal = sucursal.idSucursal ORDER BY cabina.idCabina DESC;', (err, events) => {
            if (err) {
                res.json(err);
            }
            console.log(events);
            res.render('sucursales.ejs', {
                datars : events
            });
        });
    })

};

module.exports = controller;
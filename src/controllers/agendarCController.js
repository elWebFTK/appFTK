const controller = {};

controller.agendarC = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sucursal', (err, suc) => {
            if (err) {
                res.json(err);
            }
            console.log(suc);
            datas = suc
        });
        conn.query('SELECT * FROM cabina', (err, cabi) => {
            if (err) {
                res.json(err);
            }
            console.log(cabi);
            datac = cabi
        });
        conn.query('SELECT * FROM cliente', (err, clientes) => {
            if (err) {
                res.json(err);
            }
            console.log(clientes);
            res.render('agendarC', {
                data: clientes

            });
        });
    });
};


controller.consult = (req, res) => {
    const params = new URLSearchParams(req.url.split("?")[1]);
    const telefonoA = params.get("Telefono");
    req.getConnection((err, conn) => {
        conn.query("SELECT cliente.idCliente, cliente.Nombre, cliente.Apellidos, cliente.Telefono, cliente.Email, cliente.Dia, cliente.Mes, cliente.Año, cliente.Asesor, membresia.Folio_membresia, marca.idMarca, marca.Nombre_m, membresia.Fecha_compra, membresia.Nombre_t, membresia.Ticket, membresia.Notas, sucursal.idSucursal,  sucursal.Nombre_s FROM cliente INNER JOIN membresia ON cliente.idCliente=membresia.Cliente_idCliente INNER JOIN sucursal ON sucursal.Nombre_s = cliente.Sucursal INNER JOIN marca ON marca.idMarca = cliente.Marca_idMarca WHERE cliente.Telefono = ?", telefonoA, (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                console.log(rows);
                res.render('agendarC.ejs', {

                    data: rows[0]
                });
            }
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO calendario set ?', data, (err, calendar) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(calendar);
                res.redirect('/agendarC');
            }
        });
    })
};


module.exports = controller;
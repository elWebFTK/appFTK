const controller = {};

controller.rventa = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente ORDER BY Nombre ASC', (err, cliente) => {
            if (err) {
                res.json(err)
            }else {
                datac = cliente;
                //console.log(datars);
            }
        });
        conn.query('SELECT * FROM marca ', (err, marca) => {
            if (err) {
                res.json(err)
            }else {
                datam = marca;
                console.log(datam);
            }
        });
        conn.query('SELECT * FROM sucursal ', (err, sucursal) => {
            if (err) {
                res.json(err)
            }else {
                datasuc = sucursal;
                console.log(datasuc);
            }
        });
        conn.query('SELECT * FROM servicio', (err, servrs) => {
            if (err) {
                res.json(err)
            }else {
                //console.log(servog)
                res.render('rVenta', {
                    datars : servrs
                })
                
            }
        });
    })
    
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO membresia set ?', data, (err, membresias) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(membresias);
                req.flash('success', `You've been successfully redirected to the Message route!`);
                res.redirect('/rVenta');
            }
        });
    })
};

module.exports = controller;
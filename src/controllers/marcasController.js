const controller = {};

controller.config = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sucursal ORDER BY idSucursal DESC', (err, suc) => {
            if (err) {
                res.json(err);
            }
            console.log(suc);
            datas = suc
        });
        conn.query('SELECT * FROM marca', (err, marca) => {
            if (err) {
                res.json(err);
            }
            console.log(marca);
            res.render('marcas', {
                data: marca

            });
        });
    });
};

controller.edit = (req, res) => {
    const { idMarca } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM marca WHERE idMarca  ?", idMarca, (err, rows) => {
            res.render('marcas', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const { idMarca } = req.params;
    const newMarca = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE marca set ? WHERE idMarca = ?', [newMarca, idMarca], (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/marcas');
            }
        });
    });
};

module.exports = controller;
const controller = {};

controller.clientescc = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, clientes) => {
            if (err) {
                res.json(err);
            }
            console.log(clientes);
            res.render('clientescc', {
                data: clientes
            });
        });
    });
};

module.exports = controller;
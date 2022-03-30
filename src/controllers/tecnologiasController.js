const controller = {};

controller.tec = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sucursal', (err, suc) => {
            if (err) {
                res.json(err);
            }
            res.render('tecnologias', {
                data: suc

            });
        });
    });
};

module.exports = controller;
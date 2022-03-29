const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM especialista', (err, serv_e) => {
            if (err) {
                res.json(err)
            } else {
                data_e = serv_e;
                //console.log(datars);
            }
        });
        conn.query('SELECT * FROM marca', (err, marca) => {
            if (err) {
                res.json(err)
            } else {
                datam = marca;
                console.log(datam);
            }
        });
        conn.query('SELECT * FROM cabina', (err, cabina) => {
            if (err) {
                res.json(err)
            } else {
                datacab = cabina;
                //console.log(datars);
            }
        });
        conn.query('SELECT * FROM calendario', (err, events) => {
            if (err) {
                res.json(err);
            }
            res.render('calendario', {
                data: JSON.stringify(events),
            });
        });
    });
};

controller.agendar = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO calendario set ?', data, (err, eventos) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(eventos);
                res.render('ccenter');
            }
        });
    })
};

module.exports = controller;
const controller = {};

controller.addserv = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tecnologia', (err, tec) => {
            if (err) {
                res.json(err);
            }
            datas = tec
        });
        conn.query('SELECT * FROM cabina', (err, cabina) => {
            if (err) {
                res.json(err);
            }
            datac = cabina
        });
        conn.query('SELECT * FROM marca', (err, marca) => {
            if (err) {
                res.json(err);
            }
            console.log(marca);
            res.render('add_serv', {
                datam: marca

            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO servicio set ?', data, (err, serv) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(serv);
                res.redirect('/servicios');
            }
        });
    });
};

module.exports = controller;
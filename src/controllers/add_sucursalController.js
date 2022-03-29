const controller = {};

controller.addsucursal = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM marca', (err, marca) => {
            if (err) {
                res.json(err);
            }
            res.render('add_sucursal', {
                datam: marca

            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO horario_sucursal (daysOfWeek, startTime, endTime) VALUES ?', data, (err, horarios) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(horarios);
                res.redirect('/marcas');
            }
        });
    })
};

module.exports = controller;
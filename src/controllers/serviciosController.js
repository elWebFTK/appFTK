const controller = {};

controller.servicio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM servicio', (err, events) => {
            if (err) {
                res.json(err);
            }
            console.log(events);
            res.render('servicios.ejs', {
                data : events
            });
        });
    })

};

module.exports = controller;
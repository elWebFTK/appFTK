const controller = {};

controller.adduser = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sucursal', (err, sucursal) => {
            if (err) {
                res.json(err);
            }
            datas = sucursal
        });
        conn.query('SELECT * FROM marca', (err, marca) => {
            if (err) {
                res.json(err);
            }
            console.log(marca);
            res.render('add_user', {
                datam: marca

            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?', data, (err, users) => {
            if(err){
                console.log(err);
                res.json(err);
            }else{
                console.log(users);
                res.redirect('/usuarios');
            }
        });
    });
};

module.exports = controller;
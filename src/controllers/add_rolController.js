const { json } = require("express");

const controller = {};

controller.addrol = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rol', (err, rol) => {
            if (err) {
                res.json(err);
            }
            datar = rol
        });
        conn.query('SELECT * FROM usuarios', (err, addrol) => {
            if (err) {
                res.json(err);
            }
            res.render('add_rol', {
                data: addrol
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios_has_rol set ?', data, (err, marcas) => {
            if(err){
                console.log(err);
                res.json(err);
                req.flash('info', 'Mensaje de flash');
                res.redirect('/add_rol')
            }else{
                res.redirect('/rol_user');
            }
        });
    })
}

module.exports = controller;
const controller = {};

controller.ccenter = (req, res) => {
    console.log("Prueba");
    res.render('ccenter.ejs');
};

module.exports = controller;
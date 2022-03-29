const controller = {};

controller.config = (req, res) => {
    res.render('config.ejs');
};

module.exports = controller;
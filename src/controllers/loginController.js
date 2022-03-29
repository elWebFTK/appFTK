const controller = {};

controller.login = (req, res) => {
    res.render('login.ejs');
};

module.exports = controller;
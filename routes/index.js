var users = require("./users");
var proxy = require("./proxy");
var authSession = require('../middlewares/auth');

module.exports = function (app) {
    proxy(app);
    app.get('/login', function (req, res) {
        res.render('login');
    });
    app.get('/loginSuccess', function (req, res) {
        req.session.auth = true;
        res.json({"resultCode":"200"});
    });
    // app.use(authSession.authUser);
    app.get('/', function (req, res) {
        res.redirect('/views/');
    });
    app.get('/views/*', function (req, res) {
        res.render('index', {
            title: '大数据平台'
        });
    });
};
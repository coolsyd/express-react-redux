var users = require("./users");
var proxy = require("./proxy");

module.exports = function (app) {
    proxy(app);
    app.get('/',function(req,res){
        res.render('index',{
            title:'首页'
        });
    });
    app.get('/test',function(req,res){
        res.redirect('/#/test');
    });
};
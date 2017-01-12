var users = require("./users");
var proxy = require("./proxy");

module.exports = function (app) {
    proxy(app);
    app.get('/',function(req,res){
        res.redirect('/views/');
    });
    app.get('/views/*',function(req,res){
        res.render('index',{
            title:'大数据平台'
        });
    });
};
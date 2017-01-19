var httpProxy = require('http-proxy');
var config = require('../config');

// 新建一个代理 Proxy Server 对象
var proxy = httpProxy.createProxyServer({});

module.exports = function (app) {
    app.get('/bundle.js', function (req, res) {
        proxy.web(req, res, {target: 'http://localhost:8080'});
    });
    app.all('/PBD/*', function (req, res) {
        proxy.web(req, res, {target: 'http://' + config.backend.host + ':' + config.backend.port}, function(e) {
            console.log(e);
        });
    });
};
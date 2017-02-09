var httpProxy = require('http-proxy');
var config = require('../config');

// 新建一个代理 Proxy Server 对象
var proxy = httpProxy.createProxyServer({});

module.exports = function (app) {
    app.all('/manage/*', function (req, res) {
        proxy.web(req, res, {target: 'http://' + config.PVA_interface});
    });
    app.all(['/service/*','/bimg/*'], function (req, res) {
        console.log(123);
        proxy.web(req, res, {target: 'http://' + config.PVA_url});
    });
    app.all('/PBD/*', function (req, res) {
        proxy.web(req, res, {target: 'http://' + config.PBD_interface});
    });
};
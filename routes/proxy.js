var httpProxy = require('http-proxy');

// 新建一个代理 Proxy Server 对象
var proxy = httpProxy.createProxyServer({});

module.exports = function (app) {
    app.get('/bundle.js', function (req, res) {
        proxy.web(req, res, {target: 'http://localhost:8080'});
    });
};
var express = require('express');
var httpProxy = require('http-proxy');
var config = require('../config');

var router = express.Router();
// 新建一个代理 Proxy Server 对象
var proxy = httpProxy.createProxyServer({});

router.all('/manage/*', function (req, res) {
    proxy.web(req, res, {target: 'http://' + config.PVA_interface});
});
router.all(['/service/*', '/bimg/*'], function (req, res) {
    proxy.web(req, res, {target: 'http://' + config.PVA_url});
});
router.all('/PBD/*', function (req, res) {
    proxy.web(req, res, {target: 'http://' + config.PBD_interface});
});
module.exports = router;
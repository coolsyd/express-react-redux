const express = require('express');
const httpProxy = require('http-proxy');
const request = require('request');
const config = require('../config');

const router = express.Router();
// 新建一个代理 Proxy Server 对象
const proxy = httpProxy.createProxyServer({});

router.all('/manage/*', function (req, res) {
    proxy.web(req, res, {target: config.PVA_interface});
});
router.all(['/service/*', '/bimg/*'], function (req, res) {
    proxy.web(req, res, {target: config.PVA_url});
});
router.all('/PBD/login', function (req, res) {
    let options = {
        url:config.PBD_interface+ req.url,
        headers: req.headers
    };
    if(req.method==='POST'){
        options.method='POST';
        options.form=req.body;
    }
    function callback(error, response, body) {
        if(error){
            res.json({"resultCode":"500","resultMessage":"系统错误"});
        }else{
            res.json(JSON.parse(body));
        }
    }
    request(options, callback);
});
router.all('/PBD/*', function (req, res) {
    proxy.web(req, res, {target: config.PBD_interface});
});
module.exports = router;
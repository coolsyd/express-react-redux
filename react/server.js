var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var cf=require('../config');

new WebpackDevServer(webpack(config), {
    hot: true,
    proxy: {
        "/PBD/*": cf.PBD_interface
    },
    contentBase: __dirname,
    stats: {
        colors: true
    }
}).listen(3009, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3009');
});

const express = require('express');
const session = require('express-session');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const httpConcat = require('http-concat');
const compress = require('compression');
//const RedisStore = require('connect-redis')(session);


const ReactRouter = require('./routes/server');
const users = require('./routes/users');

const app = express();
app.use(compress());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'PBD',
    // name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    // cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: true,
    saveUninitialized: true
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//var onemonth = 60 * 1000 * 60 * 24 * 30;
//
//var redisStore = new RedisStore({
//    "host": '127.0.0.1',
//    "port": '6379',
//    "ttl": 60 * 60 * 1,   //Session的有效期为1小时
//});
//app.use(session({
//    secret: 'wechat',
//    cookie: {maxAge: 60 * 60 * 24 * 1000}, //一天
//    resave: false,
//    saveUninitialized: true,
//    store: redisStore
//}));



// 通常用于加载静态资源
//console.log(path.resolve('public'));
//console.log('__filename:'+ path.resolve(__filename));
//console.log('__dirname:'+ path.resolve(__dirname));
//console.log(process.cwd());
app.use(express.static(path.join(__dirname, 'react/public')));
app.use(httpConcat({
    base: path.join(__dirname, 'react/public'),
    separator: '@@'
}));
app.use('/users', users);
app.use('/', ReactRouter);

module.exports = app;

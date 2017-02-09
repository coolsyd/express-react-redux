const ReactRouter = require('./server');
const users = require('./users');

module.exports = function (app) {
  app.use('/users', users);
  app.use('/', ReactRouter);
};

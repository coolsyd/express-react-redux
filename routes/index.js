const serverRender = require('./serverRender');
const serverProxy = require('./serverProxy');

module.exports = function (app) {
    app.use(serverProxy);
    app.use('/', serverRender);
};

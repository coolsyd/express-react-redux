var config = {
    //devMode 为true 时, 为开发模式
    devMode: true,
    // debug 为 true 时，用于本地调试
    debug: true,
    // 程序运行的端口
    port: 3000,
    backend: {
        host: '172.16.61.254',
        port: 18080
    },
    pvdUrl: 'http://172.16.61.246:8886',
    socketTimeout: 20 * 1000,//ms
    theme_list: ['default', 'dark'],
    app: {
        title: '公安大数据'
    }
};
if (!config.devMode) {
    config.port = 'PBD_PORT';
    config.backend.host = 'BACKEND_HOST';
    config.backend.port = 'BACKEND_PORT';
    config.pvdUrl = 'http://PVD_URL_IP:PVDURL_PORT';
}
module.exports = config;
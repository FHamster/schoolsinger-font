let proxyObj = {};

/*proxyObj['/ws'] = {
    ws: true,
    target: 'ws://localhost:8081'
};*/

proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
};

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8090,
        proxy: proxyObj
    }
};

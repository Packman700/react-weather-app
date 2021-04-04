// THIS FILE ALLOW TO USE API AND AVOID CROS ERROR
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.metaweather.com',
            changeOrigin: true,
        })
    )
}

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/jsonplaceholder', {
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    pathRewrite: {
      '^/jsonplaceholder': ''
    },
    secure: true
  }))
}
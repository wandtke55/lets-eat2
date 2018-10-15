const proxy = require('../../../../../Library/Caches/typescript/2.9/node_modules/@types/http-proxy-middleware');

module.exports = function (app){
    app.use(proxy('/api', {target: 'http://localhost:4000'}))
    app.use(proxy('/auth', {target: 'http://localhost:4000'}))
}
const koaRouter = require('koa-router')
const router = koaRouter()

const api = require('./api')
const views = require('./views')
const home = require('./home')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/page', views.routes(), views.allowedMethods())

module.exports = router

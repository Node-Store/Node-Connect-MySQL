const koaRouter = require('koa-router')
const router = koaRouter()

module.exports = router.get('/', async ( ctx )=>{
  let html = ''
  ctx.body = html
})

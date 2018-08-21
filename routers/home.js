const koaRouter = require('koa-router')
const router = koaRouter()

module.exports = router.get('/', async ( ctx )=>{
  let html = '这是首页'
  ctx.body = html
})

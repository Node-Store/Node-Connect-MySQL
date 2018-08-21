const Koa = require('koa')
const router = require('./routers/index')

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.use(async (ctx) => {
  console.info('Logger said => ☀️', ctx.method, ctx.header.host + ctx.url)
  ctx.body = 'hello koa'
})
app.listen(8080, () => {
  console.info('☀️ ️ => nodejs is running at http://localhost:8080')
})

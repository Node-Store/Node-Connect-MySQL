const Koa = require('koa')
const router = require('./routers/index')
const loggerMiddleWare = require('./middleware/logger-async')
const cookieMiddleWare = require('./middleware/cookie')

const app = new Koa()

app.use(loggerMiddleWare())

app.use(cookieMiddleWare())

app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => {
  console.info('☀️ ️ => app is running at http://localhost:8080')
})
getSnapshotBeforeUpdate = (prevProps, prevState) => {
  
}

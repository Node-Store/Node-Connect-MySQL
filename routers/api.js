const koaRouter = require('koa-router')
const router = koaRouter()

module.exports = router.get('/data', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: 'hello world!',
      hello: "world",
      titles: 'hi world',
      title: 'hi world',
    }
  }
}).get('/user', async ( ctx )=>{
  ctx.body = {
    success: true,
    data: {
      text: 'my name is koa.js!',
      name: 'jiaWeiYa',
      hello: "world"
    }
  }
})

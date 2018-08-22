/**
 * logger middleware
 * @param {*} ctx
 */
function logger(ctx) {
  console.info('Logger Said => ☀️', ctx.method, ctx.header.host + ctx.url)
}

module.exports = function () {
  return async function (ctx, next) {
    logger(ctx)
    await next()
  } 
}

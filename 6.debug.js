const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  debugger

  console.log('Hello World!')

  ctx.body = '<h1>Hello World!</h1><h1 style="color:red">from koa-server</h1>'
})

app.listen(8888)
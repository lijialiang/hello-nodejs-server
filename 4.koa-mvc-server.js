const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const model = {
  data: 0,
  get () {
    return `<h1>${this.data}</h1>`
  },
  increment () {
    ++this.data
  }
}

const controller = ctx => {
  model.increment()
  
  ctx.body = model.get()
}

router.get('/', controller)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8888)
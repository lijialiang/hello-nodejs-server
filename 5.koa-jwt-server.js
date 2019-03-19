const Koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new Koa()
const router = new Router()

const KEY = 'NodeJS-Server'

const login = ctx => {
  const { name } = ctx.params

  console.log('[name]', name)

  ctx.body = jwt.sign({ data: name }, KEY, { expiresIn: 60 })
}

const auth = ctx => {
  const { key } = ctx.params

  console.log('[key]', key)

  const decode = jwt.verify(key, KEY)

  if (decode && decode.data) {
    ctx.body = decode.data
  } else {
    ctx.body = 'auth error'
  }
}

router.get('/login/:name', login)
router.get('/auth/:key', auth)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8888)

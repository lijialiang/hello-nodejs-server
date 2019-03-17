const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

;(async () => {
  // model
  const Sequelize = require('sequelize')
  const sequelize = new Sequelize('test', 'yyued', 'yyued123', {
    host: 'legox.yy.com',
    dialect: 'mysql'
  })

  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING
  }, {  freezeTableName: true, timestamps: false })

  await sequelize.sync()

  // controller
  const getAllUser = async ctx => {    
    ctx.body = await User.findAll()
  }

  const addUser = async ctx => {
    await User.create({ name: 'sisi' })

    ctx.status = 200
  }

  // router
  router.get('/', getAllUser)
  router.get('/add', addUser)

  app
    .use(router.routes())
    .use(router.allowedMethods())

  app.listen(8888)
})()
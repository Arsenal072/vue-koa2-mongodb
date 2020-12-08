// const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

// module.exports = router

const router = require('koa-router')()
const controller = require('../controller/index')

router.get('/', controller.curd.index)
router.get('/list', controller.curd.list)
router.get('/add', controller.curd.add)
router.post('/doAdd', controller.curd.doAdd)
router.post('/doEdit', controller.curd.doEdit)
router.get('/edit', controller.curd.edit)
router.get('/delete', controller.curd.delete)

// 登录注册
router.get('/login', controller.login.login)
router.post('/dologin', controller.login.dologin)

module.exports = router

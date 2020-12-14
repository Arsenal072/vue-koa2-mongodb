const router = require('koa-router')()
const controller = require('../controller/index')
const secret = 'this is a secret'
const jwtAuth = require('koa-jwt')({secret});

router.get('/', controller.curd.index)
router.get('/list', controller.curd.list)
router.get('/add', controller.curd.add)
router.post('/doAdd', controller.curd.doAdd)
router.post('/doEdit', controller.curd.doEdit)
router.get('/edit', controller.curd.edit)
router.get('/delete', controller.curd.delete)

// 登录注册
router.get('/login', controller.user.login)
router.post('/dologin', controller.user.dologin)
router.post('/register', controller.user.register)
router.get('/getUserList', jwtAuth, controller.user.getUserList)
router.get('/getUserInfo', jwtAuth, controller.user.queryUserInfo)
router.post('/updateUserInfo', jwtAuth, controller.user.updateUserInfo)
router.post('/deleteUser', jwtAuth, controller.user.deleteUser)

module.exports = router

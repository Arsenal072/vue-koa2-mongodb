const jwt = require('jsonwebtoken')
const jwtAuth = require('koa-jwt')
const secret = 'this is a secret'
module.exports = {
    async login (ctx) {
        await ctx.render('login')
    },
    async dologin(ctx){
        let { body } = ctx.request
        let userInfo = body.username
        ctx.body = {
            message: '登录成功',
            user: userInfo,
            token: jwt.sign({
                data: userInfo,
                ext: Math.floor(Date.now()/1000) + 60*60,
            }, secret)
        }
    }
}
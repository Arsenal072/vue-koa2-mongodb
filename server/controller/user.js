const jwt = require('jsonwebtoken')
const secret = 'this is a secret'

let User = require('../model').User
const utils = require('../utils')

module.exports = {
    async login (ctx) {
        await ctx.render('login')
    },
    async dologin(ctx){
        let { body } = ctx.request
        let userInfo = body.username
        let result  = await User.findOne(body)
        if(result&&Object.keys(result).length){
            let responseData = {
                user: userInfo,
                token: jwt.sign({
                    data: userInfo,
                    ext: Math.floor(Date.now()/1000) + 60*60,
                }, secret)
            }
            ctx.body = utils.responsHandle(200, '登录成功', responseData)
        }else{
            ctx.body = utils.responsHandle(502, '用户名或密碼錯誤，請重試')
        }
    },
    async register(ctx){
        let { body } = ctx.request
        let userInfo = body.username
        let result = await User.find({username: userInfo})
        if(!result.length){
            let responseData = {
                user: userInfo,
                token: jwt.sign({
                    data: userInfo,
                    ext: Math.floor(Date.now()/1000) + 60*60,
                }, secret)
            }
            let user = new User(body)
            await user.save()
            ctx.body = utils.responsHandle(200, '注册成功', responseData)
        }else{
            ctx.body = utils.responsHandle(501, '用户名已存在,请重试')
        }
    },
    async getUserList(ctx){
        let result = await User.find()
        ctx.body = utils.responsHandle(200, '', {userList:result})
    },
    async queryUserInfo(ctx){
        let result = await User.findOne({_id: ctx.query.id})
        ctx.body = utils.responsHandle(200, '', result)
    },
    async updateUserInfo(ctx){
        let { body } = ctx.request
        await User.findByIdAndUpdate({_id: body._id}, body)
        ctx.body = utils.responsHandle(200, '修改成功', {})
    },
    async deleteUser(ctx){
        await User.findOneAndRemove({_id: ctx.query.id})
        ctx.body = utils.responsHandle(200, '删除成功!', {})
    }
}
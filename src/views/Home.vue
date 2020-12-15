<template>
    <div class="home-wrapper">
        <div class='main-content'>
            <div class='login-box'>
                <div class='top-title'>{{isRegister?'注 册':'登 录'}}</div>
                <div class='login-modal'>
                    <el-form ref="form" :model="form" label-width="80px">
                        <p class='item-title'>用户名</p>
                        <el-input v-model="form.username"></el-input>
                        <p class='item-title'>密码</p>
                        <el-input v-model="form.password"></el-input>
                        <div v-if='isRegister'>
                            <p class='item-title comfirm-password'>确认密码</p>
                            <el-input v-model="form.confirmPassword"></el-input>
                        </div>
                        <div>
                            <el-button type="primary" @click="login" class='login-btn' v-if='!isRegister'>登 录
                            </el-button>
                            <el-button type="primary" @click="register" v-if='isRegister' class='login-btn'>注 冊
                            </el-button>
                            <p @click='toRegister' class='register-tip' v-if='!isRegister'>还没有账号，去注册一个</p>
                            <p @click='toLogin' class='register-tip' v-if='isRegister'>已有账号，去登录</p>
                        </div>
                    </el-form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        components: {},
        data() {
            return {
                userInfo: {},
                form: {
                    username: '',
                    password: '',
                    confirmPassword: ''
                },
                isRegister: false
            }
        },
        methods: {
            login() {
                let params = {
                    username: this.form.username,
                    password: this.form.password
                }
                this.$axios.post(this.$apis.dologin, params).then(res => {
                    let token = res.rsp.token
                    this.$store.commit('user/setToken', token)
                    this.$message({
                        type: 'success',
                        message: '登录成功!'
                    })
                    this.$router.push('/management')
                })
            },
            toRegister() {
                this.isRegister = true
            },
            toLogin() {
                this.isRegister = false
            },
            register() {
                let params = {
                    username: this.form.username,
                    password: this.form.password
                }
                this.$axios.post(this.$apis.register, params).then(res => {
                    let token = res.rsp.token
                    this.$store.commit('user/setToken', token)
                    this.$message({
                        type: 'success',
                        message: '登录成功!'
                    })
                    this.$router.push('/management')
                })
            }
        }
    }
</script>
<style lang="scss">
    .home-wrapper {
        .outer-wrapper {
            display: flex;
            justify-content: space-between;
            height: 60px;
            line-height: 60px;
            padding: 0 50px;
            color: #fff;
            background-color: #3a5fcd;

            .iconfont {
                font-size: 24px;
            }

            .left-box {
                .iconfont {
                    padding-right: 10px;
                }
            }

            .right-box {
                padding-right: 100px;

                .quit-box {
                    padding-left: 20px;
                    font-size: 18px;
                    display: inline-block;
                    cursor: pointer;

                    .icon-tuichu {
                        font-size: 18px;
                    }
                }
            }
        }

        .main-content {
            /* width: 80%; */
            /* margin: 0 auto; */
            position: fixed;
            height: 100%;
            width: 100%;
            background: url("../assets/images/background.jpg") center top no-repeat fixed;
            background-size: cover;
            -webkit-background-size: cover;
            /* 兼容Webkit内核浏览器如Chrome和Safari */
            -o-background-size: cover;
            /* 兼容Opera */
            zoom: 1;

            .login-box {
                position: relative;
                top: 200px;
                margin: 0 auto;
                width: 400px;
            }

            .top-title {
                height: 50px;
                background-color: #3978ff;
                color: #fff;
                text-align: center;
                line-height: 50px;
                border-radius: 5px;
                font-size: 18px;

            }

            .login-modal {
                border: 1px solid #eee;
                padding: 15px 30px 20px;
                background-color: #eee;
                border-radius: 5px;

                .item-title {
                    margin: 10px 0;

                    &:first-child {
                        margin-top: 0;
                    }
                }
                .comfirm-password{
                    padding-top:10px;
                }
            }

            .login-btn {
                width: 100%;
                margin: 20px 0 15px;
            }

            .register-tip {
                text-align: center;
                color: #3a5fcd;
            }
        }

        .bottom-box {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            font-size: 20px;
            line-height: 60px;
            background-color: #3A5FCD;
            color: #fff;
            text-align: center;
        }
    }
</style>
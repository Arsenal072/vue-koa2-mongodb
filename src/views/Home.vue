<template>
    <div class="home-wrapper">
        <div class="outer-wrapper">
            <div class="left-box">
                <span class="iconfont icon-icon_xinyong_xianxing_jijin-"></span>
                <span>后台管理系统</span>
            </div>
            <div class="right-box">
                <div v-if='userInfo&&userInfo.username'>
                    <span class="iconfont icon-yonghu"></span>
                    <span>{{userInfo.username}}</span>
                    <div class="quit-box" @click="logout">
                        <span>退出</span>
                        <span class="iconfont icon-tuichu"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class='main-content'>
            <div class='login-modal'>
                <span class='title'>{{isRegister?'注 册':'登 录'}}</span>
                <el-form ref="form" :model="form" label-width="80px">
                    <span class='item-title'>用户名</span>
                    <el-input v-model="form.username"></el-input>
                    <span class='item-title'>密码</span>
                    <el-input v-model="form.password"></el-input>
                    <div v-if='isRegister'>
                        <span class='item-title'>确认密码</span>
                        <el-input v-model="form.confirmPassword"></el-input>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="login" class='login-btn'>登录</el-button>
                        <p @click='toRegister'>还没有账号，去注册一个</p>
                        <el-button type="primary" @click="register" v-if='isRegister'>注冊</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
        <div class="bottom-box">
            <div>&copy;
                <span>GQchen</span>
                <span>2019-08-30</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
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
                this.$router.push('/login')
            },
            toRegister() {
                this.isRegister = true
            },
            register() {
                this.$router.push('/register')
            },
            logout() {

            },
            onSubmit() {
                console.log('submit!');
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
            width: 80%;
            margin: 0 auto;

            .login-modal {
                position: relative;
                top: 100px;
                float: right;
                width: 300px;
                border: 1px solid #eee;
                padding: 20px 30px 10px;
                background-color: #eee;
                .title{
                    font-size: 18px;
                    font-weight: bold;
                }
            }

            .login-btn {
                width: 200px;
            }

            background: url('/assets/images/background.gif') no-repeat center top;
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
        }
    }
</style>
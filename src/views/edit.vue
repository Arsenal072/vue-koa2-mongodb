<template>
    <div class="edit-wrapper">
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
        <div>
            <el-form ref="form" :model="userInfo" label-width="80px" class='form'>
                <el-form-item label="用户名">
                    <el-input v-model="userInfo.username"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="userInfo.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="个人简介">
                    <el-input type="textarea" v-model="userInfo.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即提交</el-button>
                    <el-button type="primary" @click='cancel'>取消</el-button>
                </el-form-item>
                <el-form-item label="上传">
                    <el-upload :disabled="disabledOption" action="#" :limit="5" ref="upload" :on-change="handleChange"
                        :on-exceed="Exceed" :multiple="true" :auto-upload="false" :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove" accept=".jpg,.jpeg,.png" :file-list="fileList"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                        <div slot="tip" class="el-upload__tip">上传图片大小不超过1M/仅支持png,jpg,jpeg格式/最多上传5张图片</div>
                    </el-upload>
                </el-form-item>
            </el-form>
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
        name: "edit",
        components: {},
        data() {
            return {
                userId: '',
                userInfo: {
                    username: '',
                    gender: '',
                    desc: ''
                }
            }
        },
        created() {
            this.userId = this.$route.query.id
            this.getUserInfo()
        },
        methods: {
            getUserInfo() {
                this.$axios.get(this.$apis.queryUserInfo + `?id=${this.userId}`).then(res => {
                    this.userInfo = res.rsp
                })
            },
            onSubmit() {
                this.$axios.post(this.$apis.updateUserInfo, this.userInfo).then(res => {
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    })
                    this.$router.back()
                })
            },
            cancel() {

            },
            logout() {

            }
        }
    }
</script>
<style lang="scss">
    .edit-wrapper {
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

        .form {
            width: 400px;
            margin: 50px auto;
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
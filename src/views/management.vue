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
        <el-table :data="tableData" style="width: 80%" class='table'>
            <el-table-column prop="username" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="180">
            </el-table-column>
            <el-table-column prop="_id" label="id">
            </el-table-column>
            <el-table-column label="操作">
                <el-button type="primary" @click='edit(item)'>编辑</el-button>
                <el-button type="primary">删除</el-button>
            </el-table-column>
        </el-table>
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
        name: "management",
        components: {},
        data() {
            return {
                userInfo: {},
                tableData: []
            }
        },
        created() {
            this.getUserList()
        },
        methods: {
            getUserList() {
                this.$axios.get(this.$apis.queryUserList).then(res => {
                    this.tableData = res.rsp.userList
                })
            },
            logout() {

            },
            edit(item){
                this.$router.push({
                    path: '/edit',
                    query: {
                        id: item._id
                    }
                })
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

        .table {
            margin: 30px auto;
            padding-left: 20px;
            border: 1px solid #666;
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
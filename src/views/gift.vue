<template>
    <div class="gift-wrapper">
        <div class="main-content">
            <div class='audio-box'>
                <!-- <audio src="../assets/media/christmaslights.mp3" autoplay="autoplay" controls="controls" loop /></audio> -->
            </div>
            <el-carousel :interval="4000" type="card" height="300px" class='carousel-box'>
                <el-carousel-item v-for="item in imgs" :key="item">
                    <!-- <h3 class="medium">{{ item }}</h3> -->
                    <img :src="item.src" alt="" class='img'>
                </el-carousel-item>
            </el-carousel>
            <div class='gift-box'>
                <img src="../assets/images/gift3.jpg" alt="" class='gift-img' @click='open' v-if='showGiftImg'>
                <!-- <span>打开它!</span> -->
                <div v-else class='note'>
                    <img src="../assets/images/note1.jpg" alt="">
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "gift",
        components: {},
        data() {
            return {
                showGiftImg: true,
                imgs: [{
                        src: require('../assets/images/christmas3.jpg')
                    },
                    {
                        src: require('../assets/images/christmas4.jpg')
                    },
                    {
                        src: require('../assets/images/christmas1.jpg')
                    }
                ]
            }
        },
        created() {},
        methods: {
            open() {
                this.showGiftImg = false
            }
        }
    }
</script>
<style lang="scss">
    .gift-wrapper {
        position: fixed;
        height: 100%;
        width: 100%;
        background: url("../assets/images/background6.jpg") center top no-repeat fixed;
        background-size: 100% 100%;
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        zoom: 1;

        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }

        .carousel-box {
            width: 60%;
            margin: 0 auto;
        }

        .img {
            width: 100%;
            height: 100%;
        }

        .audio-box {
            position: fixed;
            top: 20px;
            right: 20px;
        }

        .gift-box {
            position: relative;
            width: 500px;
            margin: 100px auto;

            .gift-img {
                display: block;
                width: 300px;
                height: 100%;
                margin: 0 auto;
            }
            .note {
                display: block;
                width: 300px;
                margin: 0 auto;
            }
        }

    }
</style>
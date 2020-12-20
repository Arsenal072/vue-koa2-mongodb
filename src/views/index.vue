<template>
    <div class="christmas-wrapper">
        <div class="main-content" @click='checkin'>
            <!-- <div class='audio-box'>
                <audio src="../assets/media/christmaslights.mp3" autoplay="autoplay" controls="controls" loop /></audio>
            </div> -->
        </div>
    </div>
</template>
<script>
    export default {
        name: "index",
        components: {},
        data() {
            return {}
        },
        created() {},
        methods: {
            checkin(){
                this.$router.push('/gift')
            }
        }
    }
</script>
<style lang="scss">
    .christmas-wrapper {
        .main-content {
            position: fixed;
            height: 100%;
            width: 100%;
            background: url("../assets/images/christmas2.jpg") center top no-repeat fixed;
            background-size: 100% 100%;
            -webkit-background-size: 100% 100%;
            -o-background-size: 100% 100%;
            zoom: 1;
        }


        .audio-box {
            position: fixed;
            top: 20px;
            right: 20px;
        }
    }
</style>
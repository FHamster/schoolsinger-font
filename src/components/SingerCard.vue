<template>
    <div class="sing-card">
        <el-image class="image-slot">

        </el-image>
        <div>{{singInfo.title}}</div>
        <div>
            <el-button circle icon="el-icon-video-play"></el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SingerCard',
        props: {
            singInfo: {}
        }
    }
</script>
<style scoped>
    div {
        display: flex;
    }

    .sing-card {
        width: 230px;
        height: 400px;

        background-color: #42b983;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .image-slot {
        width: 100%;
        height: 70%;
    }
</style>

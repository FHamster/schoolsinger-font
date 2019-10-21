<template>
    <el-card class="sing-card">
        <div slot="header" class="card-head">
            <div>{{singInfo.title}}</div>

<!--            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
    </el-card>
    <!--<div class="sing-card">
        <el-image class="image-slot">

        </el-image>
        <div>{{singInfo.title}}</div>
        <div>
            <el-button circle icon="el-icon-video-play"></el-button>
        </div>
    </div>-->
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
        /*width: 230px;*/
        /*height: 400px;*/

        /*background-color: #42b983;*/
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .image-slot {
        width: 100%;
        height: 70%;
    }

    .card-head {
        display: flex;
        align-items: center;

        /*justify-content: flex-start;*/
    }
</style>

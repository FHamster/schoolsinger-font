<template>
    <el-card class="sing-card" body-style="padding:0" shadow="hover">
     <!--   <div slot="header" class="card-head">
            {{singInfo.stuName}}
        </div>-->
        <div>
            <el-popover
                    transition="transition"
                    placement="top-end"
                    width="200"
                    trigger="click">
                <p>这是{{singInfo.stuName}}的参赛作品</p>
                <p>如果喜欢的话积极投票哦</p>
                <div style="display: flex;justify-content: space-around">
                    <el-button type="text" size="mini" @click="visible = false">播放</el-button>
                    <el-button type="primary" size="mini" @click="visible = false">投票</el-button>
                </div>
                <el-image style="width: 272px; height: 272px"
                          fit="fill"
                          :src="singInfo.picUrl"
                          slot="reference">
                </el-image>
            </el-popover>
        </div>
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
        padding: 0;

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

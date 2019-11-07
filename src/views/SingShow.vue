<template>
    <div class="contain">


        <div class="singer-panel">
            <div class="content" :key="singInfo.stuName" v-for="singInfo in list">

                    <SingerCard :sing-info="singInfo"/>

            </div>
        </div>

        <el-pagination
                style="margin-top:24px"
                background
                :current-page.sync="page.number"
                :page-size="page.size"
                layout="prev, pager, next"
                :page-count="page.totalPages-1"
                @current-change="changePage">
        </el-pagination>


        <el-drawer
                :visible.sync="drawer"
                direction="btt"
                :show-close="false"
                :modal="false">
            <div class="bottom-panel">
                <AudioPlayer style="width: 80%" :audio-list="audioList"/>
            </div>
        </el-drawer>
        <el-button @click="drawer = true" type="primary" class="bottom-btn" icon="el-icon-arrow-up">
        </el-button>
    </div>

</template>

<script>
    import axios from 'axios';
    import SingerCard from "@/components/SingerCard";
    import {AudioPlayer} from '@liripeng/vue-audio-player'
    import '@liripeng/vue-audio-player/lib/vue-audio-player.css'


    export default {
        name: "SingShow",
        components: {SingerCard, AudioPlayer},
        mounted() {
            this.getSingerInfo();
        },

        data() {
            return {
                audioList: [
                    'http://txh-cdn.96qbhy.com/20180817175211dtC1vE3z.mp3',
                    'http://txh-cdn.96qbhy.com/20181106105737sOcozMqw.mp3'
                ],
                drawer: false,
                list: [],
                page: {
                    number: 0,
                    page: 0,
                    size: 20,
                    totalPages: 0
                }
            }
        },
        methods: {
            changePage() {
                if (this.page.number > this.page.totalPages) {
                    this.page.number = this.page.totalPages
                }

                if (this.page.number < 0) {
                    this.page.number = 0;
                }
                axios.get("/api/authUsers", {
                    params: {
                        page: this.page.number,
                        size: this.page.size
                    }
                }).then(res => {
                    this.page.number = res.data.page.number;
                    this.list = res.data._embedded.authUsers;
                });
            },
            getSingerInfo() {
                axios.get("/api/authUsers", {
                    params: {
                        page: this.page.number,
                        size: this.page.size
                    }
                }).then(res => {
                    this.page = res.data.page;
                    this.list = res.data._embedded.authUsers;
                });
            }
        }
    }
</script>

<style scoped>


    .contain {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        margin: 5px;


        /*justify-items: center;*/
    }

    .singer-panel {
        /*width: 1080px;*/

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .bottom-panel {
        display: flex;
        justify-content: center;
    }

    .bottom-btn {

        position: fixed;
        bottom: -12px;
    }
</style>

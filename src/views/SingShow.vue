<template>
    <div class="contain">
        <div class="singer-panel">
            <div class="content" :key="index" v-for="(singInfo,index) in list">

                <!--                <SingerCard :sing-info="singInfo"/>-->
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
                                <el-button type="text"
                                           size="mini"
                                           @click="addIntoPlayer(singInfo.musicUrl,singInfo.stuName)">
                                    播放
                                </el-button>
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
            </div>
        </div>

        <el-pagination
                style="margin-top:24px"
                background
                :current-page.sync="page.number"
                :page-size="page.size"
                layout="prev, pager, next"
                :page-count="page.totalPages"
                @current-change="changePage">
        </el-pagination>


        <el-drawer
                :visible.sync="drawer"
                direction="btt"
                :show-close="false"
                :modal="false">
            <div class="bottom-panel">
                <AudioPlayer ref="player" style="width: 80%" :audio-list="audioList"/>
            </div>
        </el-drawer>
        <el-button @click="drawer = true" type="primary" class="bottom-btn" icon="el-icon-arrow-up">
        </el-button>
    </div>

</template>

<script>
    import axios from 'axios';
    // import SingerCard from "@/components/SingerCard";
    import {AudioPlayer} from '@liripeng/vue-audio-player'
    import '@liripeng/vue-audio-player/lib/vue-audio-player.css'


    export default {
        name: "SingShow",
        components: { AudioPlayer},
        // components: {SingerCard, AudioPlayer},
        mounted() {
            this.getSingerInfo();
        },

        data() {
            return {
                audioList: [],
                drawer: true,
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
            addIntoPlayer(musicUrl,stuName) {
                this.$message.success(stuName + "的作品正在播放");
                this.audioList.push(musicUrl);
                this.$refs.player.playNext();
                this.$refs.player.play();
            },
            changePage() {
                if (this.page.number > this.page.totalPages) {
                    this.page.number = this.page.totalPages
                }

                if (this.page.number < 0) {
                    this.page.number = 0;
                }
                axios.get("/api/authUsers", {
                    params: {
                        page: this.page.number - 1,
                        size: this.page.size
                    }
                }).then(res => {
                    console.log(res.data.page.number);
                    // this.page.number = res.data.page.number;
                    this.list = res.data._embedded.authUsers;
                });
            },
            getSingerInfo() {
                axios.get("/api/authUsers", {
                    params: {
                        size: this.page.size,
                    }
                }).then(res => {
                    console.log(res.data);

                    this.page.number = res.data.page.number;
                    this.page.totalPages = res.data.page.totalPages;
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

    .sing-card {
        /*width: 230px;*/
        /*height: 400px;*/

        /*background-color: #42b983;*/
        padding: 0;

        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

</style>

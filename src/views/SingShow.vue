<template>
    <div class="contain">
        <div class="singer-panel">
            <div class="content" :key="x.title" v-for="x in list">
                <SingerCard :sing-info="x"/>
            </div>
        </div>

        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>

</template>

<script>
    import SingerCard from "@/components/SingerCard";

    export default {
        name: "SingShow",
        components: {SingerCard},
        data() {
            return {
                list: [
                    {
                        path: "/SingCalender",
                        title: "比赛s日历",
                        detail: "比赛日历"
                    }, {
                        path: "/SingCalender",
                        title: "比赛3日历",
                        detail: "比赛日历"
                    }, {
                        path: "/SingCalender",
                        title: "比赛日历",
                        detail: "比赛日历"
                    },
                    {
                        path: "/SignUp",
                        title: "报名入口",
                        detail: "报名入口"
                    },
                    {
                        path: "/Home",
                        title: "活动主页",
                        detail: "活动主页"
                    },
                    {
                        path: "/SingShow",
                        title: "作品展示",
                        detail: "作品展示"
                    },
                    {
                        path: "/Notification",
                        title: "赛况公告",
                        detail: "赛况公告"
                    }, {

                        path: "/SingCalender",
                        title: "d",
                        detail: "比赛日历"
                    },
                    {
                        path: "/SignUp",
                        title: "报名s入口",
                        detail: "报名入口"
                    },
                    {
                        path: "/Home",
                        title: "活动a主页",
                        detail: "活动主页"
                    },
                    {
                        path: "/SingShow",
                        title: "作品展示",
                        detail: "作品展示"
                    },
                    {
                        path: "/Notification",
                        title: "赛况公c告",
                        detail: "赛况公告"
                    },
                ]
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
</style>

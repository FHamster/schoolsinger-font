<template>
    <div class="banner-wrap">
        <div v-for="it in list" :key="it.title">
            <router-link :to="it.path">
                <div class="banner-wrap">
                    <h4>{{it.title}}</h4>
                    <p>{{it.detail}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerContain",
        data() {
            return {
                list: [
                    {

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
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    a:hover {
        text-decoration: none;
    }

    /* 必要布局样式css */
    .banner-wrap {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: -40px;
    }

    .banner-wrap div {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 280px;
        padding: 30px;
        /*margin-left: 20px;*/
        text-align: left;
        background-color: #FFF;
        -webkit-box-shadow: 0 7px 21px 0 rgba(0, 0, 0, 0.04);
        -moz-box-shadow: 0 7px 21px 0 rgba(0, 0, 0, 0.04);
        box-shadow: 0 7px 21px 0 rgba(0, 0, 0, 0.04);
    }

    .banner-wrap h4 {
        font-size: 18px;
        line-height: 36px;
        color: #333;
        margin: 0;
        font-weight: normal;
    }

    .banner-wrap p {
        padding: 0;
        font-size: 14px;
        line-height: 26px;
        color: #666;
        margin-top: 10px;
    }

</style>

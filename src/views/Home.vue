<template>
    <div style="display: flex;flex-direction: column">
        <!--    <div style="width: 1080px">-->
        <Slider></Slider>
        <!--        <div class="timeLine" style="border: #681630 20px solid;background-color: #681630">-->
        <div class="content-row">
            <el-timeline style="width: 480px">
               <!-- 11.15-11.30初赛
                12.1-12.8复赛
                12.9决赛-->
                <el-timeline-item timestamp="2019/11/1" placement="top">
                    <el-card>
                        <h4>报名</h4>
                        <p>选手于报名通道开放日期由进入报名入口，填写个人信息，上传作品完成报名，</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019/11/1" placement="top">
                    <el-card>
                        <h4>海选</h4>
                        <p>作品经由后台整理统一上传至展示区展示</p>
                        <p>投票通道开启，欢迎广大师生参与投票</p>
                        <p>最终得分由网络投票40%，评委60%，计算得出最终票数</p>
                        <!--                        <p>票数前四十名获得进入初赛资格</p>-->
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019的/11/15" placement="top">
                    <el-card>
                        <h4>初赛</h4>
                        <p>入选选手随机分组，上传到好声音网页上由学生票选加上评委打分</p>
                        <p>参照海选规则，最终结果由网络40%，评委60%组成</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019/12/1" placement="top">
                    <el-card>
                        <h4>复赛</h4>
                        <p>初赛晋级的队伍参与抽签，抽到相同歌曲的队伍进行PK</p>
                        <p>参赛选手可自行对歌曲进行改编，根据最终舞台呈现效果由评委老师进行打分</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019/12/9" placement="top">
                    <el-card>
                        <h4>决赛</h4>
                        <p>各路强者争夺校园好声音的荣誉</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
            <img src="@/assets/cup.jpg" alt="">
            <!--   <div class="display-content">

               </div>-->
        </div>

        <div class="content-row" style="background-color: #681630">
            <img src="@/assets/512_512.jpg" alt="">
            <div class="display-content" style="color: white">
                <p> “唱响青春中国梦”红色歌曲展演活动</p>
                <p> 表达对祖国未来繁荣昌盛的美好祝愿</p>
                <p> 展示我校学生奋发向上、崇德向善的精神风貌和思想主流</p>
                <p> 凝聚学生传承嘉庚精神、坚守“诚毅”校训的校园力量</p>
            </div>
        </div>

        <div class="content-row">

            <div class="display-content">
                <p> 演唱作品提倡多种形式、体裁及风格多样化</p>
                <p> 聚焦中国梦的时代主题</p>
                <p> 强调思想性、艺术性、可听性</p>
                <p> 歌曲可原创可改编翻唱</p>
            </div>
            <img src="@/assets/team.jpg" alt="" height="776px" style="object-fit: contain">
        </div>
     <!--   <div class="content-row" style="background-color: #681630;">
            <div class="display-content" style="color: white">
                <p>唱响青春中国梦，红色歌曲展演活动</p>
                <p>有梦你就唱，有胆你就来</p>
            </div>
        </div>-->
<!--
        <div class="content-row">
            <div class="display-content">

            </div>
        </div>-->

    </div>
</template>

<script>
    // @ is an alias to /src
    import Slider from "@/components/Slider";
    import '@/assets/cup.jpg';
    import '@/assets/512_512.jpg';
    import '@/assets/yiban.jpg'
    import '@/assets/team.jpg'

    export default {
        name: 'home',
        components: {
            Slider
        }
    }
</script>
<style>
    /*----------------------------------------------------------------------------------*/
    /*  Header
    /*-----------------------------------------------------------------------------------*/

    /*    #header {
            background: url("../assets/512_512.jpg") repeat scroll center center / cover;
            height: 320px;
            width: 320px;
        }*/

    /*    #header .header-content {
            height: 100vh;
            text-align: left;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }*/

    .header-content h1 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #fff;
    }

    .header-content p {
        font-size: 13px;
        letter-spacing: 5px;
        margin-top: 0;
        margin-bottom: 30px;
        text-transform: capitalize;
        color: #fff;
        font-weight: 500;
    }

    .header-content .list-social li {
        float: left;
        margin-right: 20px;
    }

    .header-content .list-social li i {
        color: #fff;
        font-size: 15px;
    }

    .content-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100vw;
        padding: 50px 0;

    }

    .display-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .display-content > p {
        margin: 0;
        font-size: 24px;
    }
</style>

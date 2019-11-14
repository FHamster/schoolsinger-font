<template>
    <el-carousel :interval="4000" type="card" style="width: 1440px">
        <el-carousel-item v-for="item in list" :key="item" >
            <!--                          style="display: flex;flex-direction: column;justify-content: center;align-items: center;background-color: #681630">-->
            <img :src="item" height="100%" width="100%"/>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    import '@/assets/slider1.jpg'
    import '@/assets/slider2.jpg'
    import '@/assets/slider3.jpg'
    import '@/assets/slider4.jpg'
    import '@/assets/slider5.jpg'
    import '@/assets/slider6.jpg'

    export default {
        name: "Slider",
        data() {
            return {
                list: [
                    require("@/assets/slider1.jpg"),
                    require("@/assets/slider2.jpg"),
                    require("@/assets/slider3.jpg"),
                    require("@/assets/slider4.jpg"),
                    require("@/assets/slider5.jpg"),
                    require("@/assets/slider6.jpg")
                ]
            }
                ;
        }
    }
</script>

<style scoped>

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
</style>

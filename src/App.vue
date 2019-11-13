<template>
    <div id="app">

        <Banner></Banner>
        <BannerContainer></BannerContainer>
        <div class="route-view">
            <el-collapse-transition>
                <router-view></router-view>
            </el-collapse-transition>
        </div>


        <Foot/>
    </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Banner from "@/components/Banner";
    import BannerContainer from "@/views/BannerContainer";
    import Foot from "./views/Foot";


    export default {
        name: 'app',
        components: {
            Foot,
            BannerContainer,
            Banner

            // HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0;

        display: flex;
        flex-direction: column;
        /*align-content: center;*/

    }

    .route-view {
        /*width: 88%;*/
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 32px;
        /*min-width: 800px;*/
    }

</style>

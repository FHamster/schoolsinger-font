<template>
    <div id="app">
        <Banner></Banner>
        <BannerContain></BannerContain>
        <div class="routview">
            <router-view></router-view>
        </div>

        <Banner></Banner>
    </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Banner from "@/components/Banner";
    import BannerContain from "@/views/MainIndex";

    export default {
        name: 'app',
        components: {
            BannerContain,
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

    .routview {
        width: 80%;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>

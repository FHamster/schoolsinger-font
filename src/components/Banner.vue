<template>
    <div>
        <div class="logo">
            <img src="@/assets/yiban.jpg" alt="" height="40px" style="margin-left: 60px">
            <div style="margin-left: 30px">集美大学易班网络文化工作站</div>
        </div>
        <div>
            <!--        <div class="round"></div>-->
            <div id="header" class="home">
            </div>
        </div>
    </div>

    <!-- End section header -->
</template>

<script>
    import '@/assets/yiban.jpg'

    export default {
        name: "Banner"
    }
</script>

<style scoped>
    #header {
        background: #681630 url("../assets/1140_400.jpg") no-repeat center;

        min-height: 400px;
        /*text-align: left;*/
        /*width: 100%;*/
        min-width: 1140px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .header-content h1 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #fff;
    }


    .logo {
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>

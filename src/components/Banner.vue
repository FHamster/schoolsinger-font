<template>
    <div>
        <div class="logo">
            <img src="@/assets/yiban.jpg" alt="" height="40px" style="margin-left: 60px">
            <div style="margin-left: 30px">集美大学易班网络文化工作站</div>
        </div>
        <div>
            <!--        <div class="round"></div>-->
            <div id="header" class="home">
                <div class="container">
                </div>
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

        height: 400px;
        /*text-align: left;*/
        /*width: 100%;*/
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


    /* .header-content p {
         font-size: 13px;
         letter-spacing: 5px;
         margin-top: 0;
         margin-bottom: 30px;
         text-transform: capitalize;
         color: #fff;
         font-weight: 500;
     }*/


    .round {
        background-image: repeating-linear-gradient(#cdf0ff, #0ca0e9 25%);
        /*width: 100%;*/
        /*height: 20px;*/
    }

    .top {
        display: flex;
    }

    .logo {
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>

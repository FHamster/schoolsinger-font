<template>
    <!-- start section header -->
    <div class="top">
        <div class="round"></div>
        <div id="header" class="home">
            <div class="container">
            </div>
        </div>
    </div>
    <!-- End section header -->
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    #header {
        background: #681630 url("../assets/1140_400.jpg") no-repeat center;

        height: 400px;
        text-align: left;
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
</style>

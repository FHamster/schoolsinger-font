<template>
    <!-- start section header -->
    <div>
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
        background: url("../assets/banner.jpg") repeat scroll center center / cover;
        height: 40vh;
        width: 100%;
    }


    #header .header-content {
        height: 100vh;
        text-align: left;
        width: 100%;
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


    .header-content p {
        font-size: 13px;
        letter-spacing: 5px;
        margin-top: 0;
        margin-bottom: 30px;
        text-transform: capitalize;
        color: #fff;
        font-weight: 500;
    }



</style>

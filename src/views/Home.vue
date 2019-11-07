<template>
    <div style="width: 1080px">
        <Slider></Slider>
        <!-- start section header -->
        <div id="header" class="home">
            <div class="container">
                <div class="header-content">
                  <!--  <h1>I'm Singer<span class="typed"></span></h1>
                    <p>designer, developeur, photographer</p>-->
                </div>
            </div>
        </div>
        <!-- End section header -->

    </div>
</template>

<script>
    // @ is an alias to /src
    import Slider from "@/components/Slider";

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

    #header {
        background: url("../assets/512_512.jpg") repeat scroll center center / cover;
        height: 100vh;
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

    .header-content .list-social li {
        float: left;
        margin-right: 20px;
    }

    .header-content .list-social li i {
        color: #fff;
        font-size: 15px;
    }
</style>

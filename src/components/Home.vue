<template>
  <div class="Home">
    <section class="fullscreen-bg">
        <video loop muted autoplay class="fullscreen-bg-video">
           <!-- <source src="./../assets/summitSothebysTrimmed.mp4" type="video/mp4">  -->
           <!-- <source src="./../assets/clipped.mp4" type="video/mp4" id="video">  -->
            <source src="https://emkeator.github.io/vue-sothebys-clone/docs/static/media/clipped.8cf50ab.mp4" type="video/mp4" id="video">  
        </video>
    </section>
    <img src="./../assets/Summit-Sothebys-Logo.png"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: ' ',
      stackedWoodImg: 'http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg',
      logo: 'https://biz.prlog.org/summitsothebysrealty/logo.jpg'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Home {
       display: flex;
       flex-wrap: wrap;
       position: relative;
       height: calc(100vh - 85px);
       width: 100vw;
       /* background-color: #072956;  */
       
    }

    .fullscreen-bg {
        position: relative;
        top: 0;
        overflow: hidden;
        width: 100%;
        height: calc(100vh - 85px);
        /* background-color: white; */
        /*z-index: -100;*/
    }

    .fullscreen-bg-video {
        margin: 0 auto;
        width: 100%;
        z-index: -100;
        opacity: 0.6;
    }

    .Home img {
        position: absolute;
        left: calc(50vw - (359px / 2)); 
        top: calc(50% - (259px / 2));
    }

    .over-video {
        height: 100vh;
        width: 100%;
        position: absolute;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.25);

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

// http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg

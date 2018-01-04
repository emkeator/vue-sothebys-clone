<template>
  <div class="About">
    <section class="flankingImg">
        <!-- <img :src="stackedWoodImg"/> -->
    </section>
    <section class="central">
        <img :src="logo">
        <div class="aboutContainer">
            This is a clone, albeit an altered one, of the Summit Sotheby's International Realty site. It was made with Vue.js.
        </div>
    </section>
    <section class="flankingImg">
        <!-- <img :src="stackedWoodImg"/> -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: ' ',
      stackedWoodImg: 'http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg',
      logo: 'https://biz.prlog.org/summitsothebysrealty/logo.jpg',
      
    };
  },
  methods: {
    alertMe(){
        alert(`Sorry, this is not the real Summit Sotheby's site. You can find it here: http://www.summitsothebysrealty.com/eng`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .About {
       display: flex;
       flex-wrap: wrap;
    }
    .flankingImg {
        width: 20vw;
        min-height: calc(100vh - 85px);
        background-image: url('http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg');
        background-origin: center;
        background-size: cover;
    }

    .central {
        width: 60vw;
        min-height: calc(100vh - 85px);
        background: white;
        -webkit-box-shadow: inset 0 0 60px 40px #c1dcff;
        box-shadow: inset 0 0 60px 40px  #c1dcff;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        padding-top: 75px; 
    }

    .central img {
        width: 43vw;
        margin: 0 auto 10px 0;
    }

    .aboutContainer {
        width: 60vw;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: scroll; 
        padding: 100px;
        margin-bottom: 30px;

    }

</style>

// http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg

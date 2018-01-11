<template>
  <div class="About">
    <section class="flankingImg">
        <!-- <img :src="stackedWoodImg"/> -->
    </section>
    <section class="central">
        <img :src="logo">
        <div class="aboutContainer">
            <p>This is a clone, albeit an altered one, of the Summit Sotheby's International Realty site.</p>
            <p>It was made with Vue.js.</p>
            <p>The real Summit Sotheby's site can be found <a href="http://www.summitsothebysrealty.com/eng" target="_blank">here</a>.</p>
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
        /* flex-wrap: wrap;  */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: scroll; 
        margin-bottom: 30px;
        line-height: 1.2em;

    }

    .aboutContainer p {
        width: 300px;
        margin-bottom: 20px;
    }

    .aboutContainer a {
        text-decoration: none;
        color: #363636;
    }
    .aboutContainer a:hover {
        text-decoration: none;
        color: #072956;
    }

</style>

// http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg

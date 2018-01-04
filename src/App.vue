<template>
  <div id="app">
    <header class="headerBar">
      
      <nav class="navHeader">
        <a @click="goTo('/')">Home</a>
        <a @click="goTo('/sales-associates')">Sales Associates</a>
        <a @click="goTo('/properties')">Property Search</a>
        <a @click="goTo('/about')">About Us</a>
      </nav>
      
    </header>
    <router-view/>
    <div class="footer">
      <div class="footerLeft">
        <span @click="login">Log In or Sign Up</span>
        <select>
          <option>English - United States</option>
          <option>Español - América</option>
        </select>
      </div>
      <div class="footerCenter">
        <a target="_blank" href="https://www.facebook.com/SummitSothebysInternationalRealty/">
          <img src="./assets/fb_icon.png" alt="facebook"/>
        </a>
        <a target="_blank" href="https://twitter.com/summitsir">
          <img src="./assets/twitter_icon.png" alt="twitter"/>
        </a>
        <span>800.641.1884</span>
        <a target="_blank" href="https://www.instagram.com/summitsir/">
          <img src="./assets/insta_icon.png" alt="instagram"/>
        </a>
        <a target="_blank" href="http://www.summitsothebysrealty.com/eng">
          <img src="./assets/mail_icon.png" alt="not actually an email, this links to the real site!"/>
        </a>
      </div>
      <div class="footerRight">
        <img src="./assets/Magnifying_glass_icon.svg.png"/><input type="text" v-model="searchText" placeholder="Quick Search...">
        <button @click="search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      searchText:''
    }
  },
  methods: {
    goTo: function(path){
      this.$router.push(path)
    },
    search: function(){
      alert(`Sorry - this is just a practice site. Unfortunately, you can't search for '${this.searchText}' on this site. But the real Summit Sotheby's International Realty Site can be found here: http://www.summitsothebysrealty.com/eng`)
    },
    login: function(){
      alert(`Sorry - this is just a practice site. Unfortunately, you can't login on this site. But the real Summit Sotheby's International Realty Site can be found here: http://www.summitsothebysrealty.com/eng`)      
    }

  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #363636;
  /* margin-top: 60px; */
}

#app .headerBar {
  width: 100vw;
  /* height: 80px; */
  /* border: 1px solid blue; */
  display: flex;
  flex-wrap: wrap;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  

}

.footer {
  width: 100vw;
  display: flex;
  height: 40px;
}
.footerLeft,
.footerCenter,
.footerRight {
  width: 33.3%; 
  display: flex;
  align-items: center;
}

.footerLeft {
  justify-content: flex-start;
  padding-left: 10px;
}

.footerLeft span {
  font-size: 0.8rem;
  cursor: pointer;
  margin-right: 15px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  border: 1px solid #363636;
  padding: 7px;
  
}
.footerLeft span:hover {
  border-color: #072956;
  color: white;
  background-color: #072956;
}

.footerLeft select {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  color: #363636;
  font-size: 0.8rem;
  background-color: rgba(0, 0 ,0, 0);
  border: none;
  outline: none;
  width: 200px;
}

.footerCenter {
  display: flex;
  justify-content: space-around;
}
.footerCenter img {
  height: 30px;
}
.footerCenter span {
  font-size: 0.8rem;
}
.footerCenter span:hover {
  color: #072956;
}

.footerRight {
  justify-content: flex-end;
  padding-right: 10px;
}
.footerRight img {
  height: 20px;
  /* border: 1px solid red; */
}

.footerRight input {
  border: none;
  outline: none;
  padding-left: 7px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #363636;
  font-size: 0.8rem;
  margin-right: 5px;
}

.footerRight button {
  font-size: 0.8rem;
  cursor: pointer;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  border: 1px solid #363636;
  padding: 4px 7px;
  outline: none;
  background-color: white;
  
}
.footerRight button:hover {
  border-color: #072956;
  color: white;
  background-color: #072956;
}

.navHeader {
  width: 100vw;
  /* height: 30px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;

}

.navHeader a {
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #363636;
  cursor: pointer;
}

.navHeader a:hover {
  font-weight: bold;
}
</style>

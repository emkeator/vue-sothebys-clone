<template>
  <div class="Properties">
    <section class="flankingImg">
        <!-- <img :src="stackedWoodImg"/> -->
    </section>
    <section class="central">
        <img :src="logo" class="logo">
        <div class="searchDiv">
            <img src="../assets/Magnifying_glass_icon.svg.png"/>
            <input v-model="searchText" placeholder="Search..." class="largeInput">
            <!-- $<input v-model="priceSearch" placeholder="Max Price..." class="medInput"> -->
            Price: <select v-model="priceSearch">
                <option disabled value="">Max Price...</option>
                <option value="500000">$500,000</option>
                <option value="700000">$700,000</option>
                <option value="900000">$900,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="5000000">$5,000,000</option>
                <option value="7000000">$7,000,000</option>
                <option value="10000000">$10,000,000</option>
                <option value="15000000">$15,000,000</option>
                <option value="17000000">$17,000,000</option>
                <option value="20000000">$20,000,000</option>
                <option value="25000000">$25,000,000</option>
                <option value="30000000">$30,000,000</option>
                <option value="35000000">$35,000,000</option>
                <option value="45000000">$45,000,000</option>
                <option value="50000000">$50,000,000</option>
                <option value="75000000">$75,000,000</option>
                <option value="100000000">$100,000,000</option>
            </select>
            Beds: <select v-model="bedSearch" class="smallSelect">
                <option disabled value="">0+</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="6">6+</option>
                <option value="7">7+</option>
                <option value="8">8+</option>
                <option value="9">9+</option>
                <option value="10">10+</option>
                <option value="11">11+</option>
                <option value="12">12+</option>
                <option value="13">13+</option>
                <option value="14">14+</option>
                <option value="15">15+</option>
            </select>
            Baths: <select v-model="bathSearch" class="smallSelect">
                <option disabled value="">0+</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="6">6+</option>
                <option value="7">7+</option>
                <option value="8">8+</option>
                <option value="9">9+</option>
                <option value="10">10+</option>
                <option value="11">11+</option>
                <option value="12">12+</option>
                <option value="13">13+</option>
                <option value="14">14+</option>
                <option value="15">15+</option>
            </select>
            <!-- <input v-model="bedSearch" placeholder="Beds.." class="smallInput">+
            <input v-model="bathSearch" placeholder="Baths..." class="smallInput">+ -->
        </div>
        <div class="PropertiesContainer">
            <div @click="alertMe" v-for="property in filteredProperties" v-bind:key="property.name" class="property">
                <img :src="property.img" :alt="property.name"/>
                <div class="info">
                    <h1>{{ property.name }}</h1>
                    <h2>${{ property.price }}</h2>
                    <div>
                        <h3>Beds: {{ property.beds}}</h3>
                        <h3>Baths: {{ property.baths}}</h3>
                    </div>
                    <p class="first">{{ property.address }}</p>
                </div>
            </div> 
        </div>
    </section>
    <section class="flankingImg">
        <!-- <img :src="stackedWoodImg"/> -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'Properties',
  data() {
    return {
      msg: ' ',
      searchText: '',
      bedSearch: '',
      bathSearch: '',
      priceSearch: '',
      stackedWoodImg: 'http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg',
      logo: 'https://biz.prlog.org/summitsothebysrealty/logo.jpg',
      properties: [
            {
                name: "4343 E WEBER CANYON Road",
                img: "https://imagescdn-gabriels-net.akamaized.net/reno/imagereader.aspx?idlisting=280-l-2014-1480050&imageurl=http%3A//assets.utahrealestate.com/photos/640x480/1480050_3bdb9b8f4b128acb13752c6ce070674b_1092923.jpg&option=N&w=1024",
                association: "Summit Sotheby's International Reality",
                price: 3000000,
                beds: 8,
                address: "4343 E WEBER CANYON Road Oakley, Utah 84055",
                baths: 8,
            },
            {
                name: "3853 E Rockport Ridge",
                img: "https://i.pinimg.com/originals/7a/2f/67/7a2f6785c5124a478cc6d226f6bc2412.jpg",
                association: "Summit Sotheby's International Reality",
                price: 25000000,
                address: "3853 E Rockport Ridge Park City, Utah 84098",
                beds: 7,
                baths: 6
            },
            {
                name: "1943 N Wolf Creek Ranch Rd",
                img: "https://imagescdn-gabriels-net.akamaized.net/reno/imagereader.aspx?idlisting=280-l-3583-27gj6n&imageurl=http%3A//m.sothebysrealty.com/1103i215/m1ykmvhdrha4m36c2ch5amw5a0i215&option=N&w=1024",
                association: "Summit Sotheby's International Reality",
                address: "1943 N Wolf Creek Ranch Rd Woodland, Utah 84036",
                price: 35000000,
                beds: 5,
                baths: 7
            },
            {
                img: "https://imagescdn-gabriels-net.akamaized.net/reno/imagereader.aspx?idlisting=280-l-916-qycw9e&imageurl=http%3A//m.sothebysrealty.com/1103i215/3yj0878ngraemv6e7fysfqtdc6i215&option=N&w=1024",
                name: "69 White Pine Canyon St. Lot 75",
                association: "Summit Sotheby's International Reality",
                address: "69 White Pine Canyon St. Lot 75 Park City, Utah 84060",
                beds: 4,
                baths: 6,
                price: 15000000
            },
            {
                name: "5798 E HEBER CANYON Road",
                img: "https://imagescdn-gabriels-net.akamaized.net/reno/imagereader.aspx?idlisting=280-l-2014-1480050&imageurl=http%3A//assets.utahrealestate.com/photos/640x480/1480050_3bdb9b8f4b128acb13752c6ce070674b_1092923.jpg&option=N&w=1024",
                association: "Summit Sotheby's International Reality",
                price: 7000000,
                beds: 15,
                address: "5798 E HEBER CANYON Road Oakley, Utah 84055",
                baths: 20,
            },
            {
                name: "7978 E Red Rock Ridge",
                img: "https://i.pinimg.com/originals/7a/2f/67/7a2f6785c5124a478cc6d226f6bc2412.jpg",
                association: "Summit Sotheby's International Reality",
                price: 39000000,
                address: "7978 E Red Rock Ridge Park City, Utah 84098",
                beds: 7,
                baths: 6
            },
            {
                name: "1549 N Wolf Moon Ln",
                img: "https://imagescdn-gabriels-net.akamaized.net/reno/imagereader.aspx?idlisting=280-l-3583-27gj6n&imageurl=http%3A//m.sothebysrealty.com/1103i215/m1ykmvhdrha4m36c2ch5amw5a0i215&option=N&w=1024",
                association: "Summit Sotheby's International Reality",
                address: "1549 N Wolf Moon Ln Park City, Utah 84036",
                price: 15000000,
                beds: 4,
                baths: 6.5
            },
            {
                img: "https://imagescdn-gabriels-net.akamaized.net/reno/imagereader.aspx?idlisting=280-l-916-qycw9e&imageurl=http%3A//m.sothebysrealty.com/1103i215/3yj0878ngraemv6e7fysfqtdc6i215&option=N&w=1024",
                name: "139 Westwen Pine Ridge St.",
                association: "Summit Sotheby's International Reality",
                address: "139 Westwen Pine Ridge St. Park City, Utah 84060",
                beds: 4,
                baths: 6,
                price: 20000000
            }
        ]
    };
  },
  methods: {
    alertMe(){
        alert(`Sorry, this is not the real Summit Sotheby's site. You can find it here: http://www.summitsothebysrealty.com/eng`)
    } 
  },
  computed: {
    filteredProperties() {
      return this.properties.filter(prop => {
        if( !this.searchText && !this.bedSearch && !this.bathSearch && !this.priceSearch) {
            return true
        } else {
            var iPass = true
            //if there is a search entry, and this property doesn't match it - false
            if(this.searchText && !prop.address.toLowerCase().includes(this.searchText.toLowerCase())) iPass = false

            //if there is a bed entry, and this property has fewer - false            
            if(this.bedSearch && prop.beds < this.bedSearch * 1) iPass = false

            //if there is a bath entry, and this property has fewer - false            
            if(this.bathSearch && prop.baths < this.bathSearch * 1) iPass = false

            //if there is a price entry, and this property is more - false            
            if(this.priceSearch && prop.price > this.priceSearch.split(',').join('') * 1) iPass = false

            return iPass
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Properties {
       display: flex;
       flex-wrap: wrap;
    }
    .flankingImg {
        width: 15vw;
        height: calc(100vh - 85px);
        background-image: url('http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg');
        background-origin: center;
        background-size: cover;
    }

    .central {
        width: 70vw;
        height: calc(100vh - 85px);
        background: white;
        -webkit-box-shadow: inset 0 0 60px 40px #c1dcff;
        box-shadow: inset 0 0 60px 40px  #c1dcff;
        padding-top: 75px; 
    }

    .central .logo{
        width: 30vw;
        margin: 0 auto 10px 0;
    }

    .searchDiv{
        margin-bottom: 20px;
    }

    .PropertiesContainer {
        width: 60vw;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 360px;
        overflow: scroll; 
        margin-bottom: 30px;
        filter: opacity(10)
    }

    .property {
        width: 50vw;
        height: 180px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 20px;
        background-color: #363636;
        color: white;
        -moz-box-shadow: 0px 0px 5px 3px rgba(193,220,255,1);
        box-shadow: 0px 0px 5px 3px rgba(193,220,255,1);
        cursor: pointer;
    }
    .info {
        text-align: left;
    }
    .info h1 {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 10px; 
    }
    .info h2 {
        font-size: 0.9rem;
        margin-bottom: 15px; 
    }
    .info h3 {
        font-size: 0.8rem;
        margin: 5px 0; 
    }
    .info p {
        font-size: 0.8rem;
        margin: 5px 0; 
    }
    .info .first {
        margin-top: 15px;
    }
    
    .property img {
        width: 150px;
        height: 130px;
        margin: 0 15px; 
    }

    .searchDiv {
        justify-content: center;
        display: flex;   
        font-size: 0.8rem;
        align-items: flex-end;   
        position: relative;   
    }
    .searchDiv img {
        height: 20px;
        width: 20px;
    }

    .searchDiv input {
        border: none;
        outline: none;
        padding-left: 7px;
        padding-bottom: 0px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #363636;
        font-size: 0.8rem;
        margin-right: 5px;
        background-color: rgba(0,0,0,0);
        position: relative;
        top: 3px;
    }
    .searchDiv select {
        border: none;
        outline: none;
        padding-left: 7px;
        padding-bottom: 0px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #363636;
        font-size: 0.8rem;
        margin-right: 5px;
        background-color: rgba(0,0,0,0);
        position: relative;
        top: 5px;
    }
    .largeInput {
        width: 300px;
    }
    .medInput {
        width: 100px;
    }
    .smallSelect {
        width: 40px;
    }
</style>

// http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg

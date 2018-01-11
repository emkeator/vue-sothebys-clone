<template>
  <div class="Associates">
    <section class="flankingImg">
        <!-- <img :src="stackedWoodImg"/> -->
    </section>
    <section class="central">
        <img :src="logo">
        <div class="associatesContainer">
            <div v-for="associate in associates" v-bind:key="associate.name" @click="associate.show = !associate.show" class="associate">
                <img :src="associate.img" :alt="associate.name"/>
                <transition name="slide-fade" mode="out-in">
                    <h1 v-if="!associate.show" class="associate-name">{{ associate.name | uppercase }}</h1>
                    <div class="info" v-if="associate.show">
                        <h1>{{ associate.name | uppercase }}</h1>
                        <h2>{{ associate.association }}</h2>
                        <h3>Phone: {{ associate.phone1}}</h3>
                        <h3>Phone: {{ associate.phone2}}</h3>
                        <p class="first">{{ associate.address1 }}</p>
                        <p>{{ associate.address2 }}</p>
                    </div>
                </transition>
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
  name: 'Associates',
  data() {
    return {
      msg: ' ',
      stackedWoodImg: 'http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg',
      logo: 'https://biz.prlog.org/summitsothebysrealty/logo.jpg',
      associates: [
            {
                name: "Jamison Frost",
                img: "https://imagescdn-gabriels-net.akamaized.net/nova/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F4i0%2Fjx7yttwtgf064ejy0x0mvcbkd6i&option=W&idclient=280&idlisting=280-a-3583-4022196&w=320&jpgcompressionquality=90&permitphotoenlargement=false",
                association: "Summit Sotheby's International Reality",
                phone1: "+1 435.513.2820",
                phone2: "+1 800.641.1884",
                address1: "625 Main Street",
                address2: "PO Box 2370 Park City, Utah 84060",
                show: false
            },
            {
                name: "Page Juliano",
                img: "http://static-sothebys-summitsir-production-4.gabriels.net/images/v_4_4_0_6/localimagereader.ashx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1103i0%2F43atkxa76qp4mdja2g87tte7y5i&option=W&bypassglobalproxy=true&idclient=280&idlisting=280-a-3583-4011200&w=320&jpgcompressionquality=90&permitphotoenlargement=false",
                association: "Summit Sotheby's International Reality",
                phone1: "+1 801.671.9761",
                phone2: "+1 800.641.1884",
                address1: "625 Main Street",
                address2: "PO Box 2370 Park City, Utah 84060",
                show: false
            },
            {
                name: "Mary Leader",
                img: "https://imagescdn-gabriels-net.akamaized.net/nova/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1103i0%2F94drs4drr3s44r2gg8xa2hjkv5i&option=W&idclient=280&idlisting=280-a-3583-4030536&w=320&jpgcompressionquality=90&permitphotoenlargement=false",
                association: "Summit Sotheby's International Reality",
                phone1: "+1 435.714.0533",
                phone2: "+1 800.641.1884",
                address1: "625 Main Street",
                address2: "PO Box 2370 Park City, Utah 84060",
                show: false
            },
            {
                name: "Bill Ligety",
                img: "https://imagescdn-gabriels-net.akamaized.net/nova/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F4i0%2F9e8kf12qxhh041t169djhfm9f1i&option=W&idclient=280&idlisting=280-a-3583-4030539&w=320&jpgcompressionquality=90&permitphotoenlargement=false",
                association: "Summit Sotheby's International Reality",
                phone1: "+1 435.647.6700",
                phone2: "+1 800.641.1884",
                address1: "625 Main Street",
                address2: "PO Box 2370 Park City, Utah 84060",
                show: false
            },
            {
                name: "Valen Lindner",
                img: "https://imagescdn-gabriels-net.akamaized.net/nova/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F4i0%2Fqvxxtreamdv44ry4ddhgp6ebb1i&option=W&idclient=280&idlisting=280-a-3583-4041143&w=320&jpgcompressionquality=90&permitphotoenlargement=false",
                association: "Summit Sotheby's International Reality",
                phone1: "+1 619.865.3646",
                phone2: "+1 800.641.1884",
                address1: "625 Main Street",
                address2: "PO Box 2370 Park City, Utah 84060",
                show: false
            },
            {
                name: "William Winstead",
                img: "https://imagescdn-gabriels-net.akamaized.net/nova/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F4i0%2Fak967yn49qqgmhjcgyegdb54m3i&option=W&idclient=280&idlisting=280-a-773-4030756&w=320&jpgcompressionquality=90&permitphotoenlargement=false",
                association: "Summit Sotheby's International Reality",
                phone1: "+1 435.640.1900",
                phone2: "+1 800.641.1884",
                address1: "625 Main Street",
                address2: "PO Box 2370 Park City, Utah 84060",
                show: false
            } 
        ]
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
    .Associates {
       display: flex;
       flex-wrap: wrap;
    }
    .flankingImg {
        width: 20vw;
        min-height: 100vh;
        background-image: url('http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg');
        background-origin: center;
        background-size: cover;
    }

    .central {
        width: 60vw;
        min-height: 100vh;
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

    .associatesContainer {
        width: 60vw;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: scroll; 
        padding-top: 10px;
        margin-bottom: 30px;
        filter: opacity(10)
    }

    .associate {
        width: 360px;
        height: 150px;
        display: flex;
        justify-content: flex-start;
        margin: 20px;
        background-color: #363636;
        color: white;
        /* -webkit-box-shadow: 0px 0px 5px 3px rgba(54,54,54,1);
        -moz-box-shadow: 0px 0px 5px 3px rgba(54,54,54,1);
        box-shadow: 0px 0px 5px 3px rgba(54,54,54,1);
        -webkit-box-shadow: 0px 0px 5px 3px rgba(193,220,255,1); */
        -moz-box-shadow: 0px 0px 5px 3px rgba(193,220,255,1);
        box-shadow: 0px 0px 5px 3px rgba(193,220,255,1);
        cursor:pointer;
    }
    .associate-name{
        font-size: 1.1rem;
        font-weight: bold;
        margin: 10px 0;
        text-align: center;
        width: calc(100% - (130px));
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }
    .info {
        text-align: left;
    }
    .info h1 {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 10px 0;
        
    }
    .info h2 {
        font-size: 0.8rem;
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
    
    .associate img {
        width: 100px;
        height: 130px;
        margin: 10px;
        /* display: inline; */
        /* height: auto; */
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>

// http://www.pepperdesignblog.com/wp-content/uploads/2013/02/PinterestChallenge_Winter2013_FireplaceLogScreen_logs_1000.jpg

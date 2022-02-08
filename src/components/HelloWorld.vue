<template>
  <div class="hello">
    <div class="nav-box">
      <div class="card-presentation d-flex align-items-center">
        <img src="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1627668309/mi4wj7sjpfwh3nt4apys.jpg" class="avatar" alt="Picture">
        <div class="infos">
          <h1 class="mb-0">Felix Habert</h1>
          <p class="mb-0 mt-2" style="opacity: 0.7">UCL majoring in Science and Engineering  </p>
          <p class="mb-0 mt-2" style="opacity: 0.5">20 years old</p>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="text-center mt-3">Here you'll find some of my projects done in my own time and as part of UCL</h2>
      <h3>Personnal web projects</h3>
      <p class="mt-3 text-size text-justify">I tried several pojects on my own time that you can find in my 
          <a href="https://github.com/fhabert?tab=repositories" >github account</a>, where I explore different computer sciences project. 
          Here I tried to do a social network using Ruby on Rails, a small copy of an airbnb website and a Vuejs project for a home-based cooker. Ruby on Rails is a framework I learnt from 
          <a href="https://www.lewagon.com/fr">Le Wagon</a>
         bootcamp where I followed a 
          6 months intense session and Vuejs when I was at MWM (Music World Media) for two months in internship. For Ruby on Rails projects, the database
          is direclty linked as a postgre sql one, and with vuejs I connected it to firebase.

        </p> 
      <div class="cards-projects mt-5">
        <card-myself hasLink="true" image_url="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643811312/letsplay_abi7l7.png" titre="Social network for musicians" 
                link_a="https://lets-play-music.herokuapp.com/"
                description="Made with ruby on rails, a social network for musicians to form a band !"></card-myself>
        <card-myself image_url="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644332792/airbnb_gr4umv.png" titre="Airbnb copy" 
                link_a="https://lit-mountain-51422.herokuapp.com/"
                description="A simple airbnb copy where you can select a house, set up the number of people and pay it in a demo test!"></card-myself>
        <card-myself image_url="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644080487/oscar_chef_irasxv.png" titre="Home-based chef" 
                link_a="https://chef-oscar.web.app/" hasLink="true"
                description="A prototype version of a website made with vue.js to order a menu from a home-based chef with a stripe demo mode !"></card-myself>
      </div>
      <hr class="mt-5">
      <h3>Personal gaming with python projects</h3>
      <p class="mt-3 text-size text-justify">Then both presented are small game projects I've done, two of them using only the Pygame Python library for the visual part and the other 
          as well in python but designed with the framework Flask. They made me focus on object-oriented coding and how to save data 
          in sqlite3 databases.</p>
      <div class="cards-projects mt-5">
        <card-myself image_url="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643811315/tank_ohh7ua.png" titre="Tank combat" 
                description="Made in pygame, a tank war combat where you have to break down your opponent!"></card-myself>
        <card-myself image_url="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643813507/power4_qkdert.png" titre="Power of 4" 
                description="A simple game of power of 4 made in python and flask where you have to complete a straight line of 4 coins !"></card-myself>
        <card-myself image_url="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644332941/car_dtwrn4.png" titre="Car race" 
                description="A car race where you highest score is saved in a sqlite3 database !"></card-myself>
      </div>
      <h3>University project</h3>
        <p class="text-size mt-3">This project was done in quantitative analysis with python, where the research question was on how is
          deforestation impacting the caribou's population. 
          <a href="https://colab.research.google.com/drive/1PNR2Uv9uNmHF86pqBH7RR9VugYCNxRnf#scrollTo=KdmInetdQpmq">Here</a> you'll find the actual colab notebook
          with the actual step by step progression of the analysis I've made for this research question. 
        </p>

      <div class="d-flex align-items-center justify-content-center mt-3">
        <template>
          <v-container>
            <v-row>
              <v-col col="12">
                <v-card
                  elevation="24" 
                  max-width="800"
                  max-height="700"
                  class="mx-auto"
                  delimiter-icon="mdi-minus">
                <v-carousel 
                  :show-arrows="false"
                  >
                    <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      transition="fade-transition"
                    >
                    <div class="d-flex justify-content-center">
                      <img :src="item.src" class="p-4 image_univ"/>
                    </div>
                    <div> 
                      <v-row
                        align="center"
                        justify="center"
                      >
                      <div class="text-h2">
                        <h5 class="text-center mt-5">{{ item.description }}</h5> 
                      </div>
                    </v-row>
                      </div>
                    </v-carousel-item>
                  </v-carousel>       
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </div>
      <hr class="mt-5">
      <h3>Arduino project with the MKR 1010 wifi</h3>
      <p class="text-size mt-3">Using the MKR 1010 wifi, sensors and actuators, here are two projects I made with them following a connected systems course on the
        Internet of Things (IoT). It was done with the MKR carrier, the shield and the MKR iot carrier along with the PIR sensor. It's 
        a detector of movement that requires a password to be deactivated, and once the door is openned, the change in the gyroscope 
        position indicates it to you and the PIR sensor senses the movement of the individual. The important variables such as the 
          booleans password, door state and pir state are directly connected to the iot cloud as you can see on the image on the 
          right hand side.
      </p>
      <h4>Project I: Alarm system with gyroscope and PIR sensor detection</h4>
      <div class="d-flex align-items-center justify-content-center mt-3">
        <div class="iot-images">
          <template>
            <v-container>
              <v-row>
                <v-col col="12">
                  <v-card
                    elevation="24" 
                    max-width="600" 
                    class="mx-auto"
                    delimiter-icon="mdi-minus">
                  <v-carousel 
                    :show-arrows="false"
                    >
                      <v-carousel-item
                        v-for="(item,i) in arduino"
                        :key="i"
                        transition="fade-transition"
                      >
                      <div class="d-flex justify-content-center">
                        <img :src="item.src" class="p-4 image_univ"/>
                      </div>
                      <div> 
                        <v-row
                          align="center"
                          justify="center"
                        >
                        <div class="text-h2">
                          <h5 class="text-center mt-3">{{ item.description }}</h5> 
                        </div>
                      </v-row>
                        </div>
                      </v-carousel-item>
                    </v-carousel>       
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <div>
              <img src="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644335650/iot_kzduib.png" width="600" height="350"/> 
          </div>
        </div>
      </div>
      <div>
        <h3>Abstract art with coding</h3>
        <p class="text-size mt-3">Then I tried to explore the potentiality of coding visual abstract art and this was done with the Three.js javascript library.
           Here we'll just render a picture of it and not the actual animation. It allows a rendom figure to be created with a variety of
           color which makes it more interesting. </p>
        <div class="d-flex align-items-center justify-content-center">
          <div class="mt-5 three-pic">
            <v-img src="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643814077/nft_ahseow.png" style="object-fit:cover;" max-height="435"
          max-width="400"></v-img>
          <v-img src="https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643814404/nft2_fdfzil.png" style="object-fit:cover;" max-height="435"
          max-width="400"></v-img>
          </div>
        </div>
        <hr class="mt-5">
      </div>
    </div>
  </div>
</template>

<script>
import cardMyself from "./cardMyself.vue"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'card-myself': cardMyself
  },
  data () {
    return {
      items: [
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643815315/colab_n7erfz.png", description: "Colab notebook in python" },
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643815383/distance_hart_ken_srgalr.png", description: "Folium map for plotting coordinates" },
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643816676/boid_f_zucynx.png", description: "Pygame boid simulation with deforestation" },
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1643816676/boid_sf_pz9ewj.png", description: "Pygame boid simulation without deforestation" }
      ],
      arduino: [
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644081268/IMG-6872_vdhkev.jpg" , description: "The person is asked to input his password\
          on the touch Pad (password of 5 digits)." },
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644081264/IMG-6875_mf06dj.jpg" , description: "If the door has been openned anyway, the \
        gyroscope of the iot carrier detects it and signal it on the iot cloud of the owner." },
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644081261/IMG-6877_ckwwog.jpg" , description: "If the password ddoesn't match the \
        secret code, then a red light shows up and the user can start again." },
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644081257/IMG-6876_cfqnjf.jpg" , description: "If the gyroscope detects movement from \
        the door, then the PIR sensor would tell if someone entered and make a buzz turn on with a red light !" },
        { src: "https://res.cloudinary.com/dgpj2uzwa/image/upload/v1644081254/IMG-6878_ymrwxy.jpg" , description: "If the password was entered correctly, \
        green light with a specific touch pad to press to restart the protection alarm system when gone." },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image_univ {
  max-width:600px;
  max-height:350px;
  object-fit:cover;
  border-radius: 25px; 
}
.text-size {
  font-size: 20px;
}
.link {
  text-decoration: none;
  color: black; 
}
.avatar {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-right: 40px;
}
.card-presentation {
  border-radius: 25px;
  background-color: white;
  padding: 20px 20px;
  width: 600px;
}
.body-text {
  margin: 20px;
  padding: 15px 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-color: #212781;
  font-weight: 600;
  top: 0;
  margin: 0;
  padding: 20px 20px;
}
.cards-projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
}
.three-pic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}
.iot-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}
@media screen and (max-width: 1300px) {
  .cards-projects {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 1100px) {
  .iot-images {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
}
@media screen and (max-width: 800px) {
  .cards-projects {
    grid-template-columns: 1fr;
  }
  .three-pic {
    grid-template-columns: 1fr;
  }
}
</style>

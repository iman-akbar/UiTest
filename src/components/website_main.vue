<template>
  <v-app>
    <v-app-bar color="blue-grey darken-3" height="90" fixed>
      <v-row>
        <v-col class="ml-10" cols="8">
          <v-img
            v-on:click="action1"
            height="90"
            width="240"
            src="../assets/new_logo.png"
          ></v-img>
        </v-col>
        <v-col class="mt-13">
          <a @click="goto('about')" style="color: white">About</a>
        </v-col>
        <v-col class="mt-13">
          <a @click="goto('product')" style="color: white">Product</a>
        </v-col>
        <v-col class="mt-13">
          <a @click="goto('team')" style="color: white">Team</a>
        </v-col>
        <v-col class="mt-13">
          <a @click="goto('contact')" style="color: white">Contact Us</a>
        </v-col>
      </v-row>
    </v-app-bar>
    <div>
      <v-img
        height="750"
        src="../assets/digital-graph-with-businessman-hand-overlay-MODIFIED (1).png"
      ></v-img>
    </div>
    <div ref="about" class="aboutref mt-10">
      <h1 class="aboutPart text-center">About</h1>
      <p class="text-center" style="color: #5800ff">
        <strong>An early-stage Fintech Start-up base in Cyprus</strong>
      </p>
      <p class="text-center">
        Developing an AI platform that provides valueable Behavioural
        <br />Advice to every type of retail investor, regardless of their
        <br />
        experience, trading style or asset preference
      </p>
      <p class="text-center" style="color: #5800ff">
        <strong>Curently in "Stealth Mode" </strong>
      </p>
    </div>
    <br />
    <br />
    <br /><br />
    <div ref="product" class="productref mt-5">
      <h1 class="productPart text-center">Product</h1>
      <p class="text-center" style="color: #5800ff">
        <strong>Behavioural Analytics as a Service</strong>
      </p>
      <p class="text-center">
        Everyone has Personal biases, subconscious behaviours <br />that affect
        our decisions, but there biases should not <br />
        cost you money
      </p>
      <v-row class="ml-5 mr-5">
        <v-col v-for="cardItem in cardItem" :key="cardItem">
          <v-card>
            <v-card-title class="justify-center">
              <p class="text-center" style="color: #5800ff">
                {{ cardItem.title }}
              </p>
            </v-card-title>
            <v-card-text>
              <p class="text-center">
                {{ cardItem.text }}
                <span style="color: #5800ff"
                  ><strong>{{ cardItem.text2 }}</strong></span
                >
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div>
      <div ref="team" class="teamref mt-5" style="margin-top: 200px">
        <h1 class="teamPart text-center">Team</h1>
        <v-row align="center" justify="center">
          <v-col v-for="teamItem in teamItem" :key="teamItem">
            <div class="text-center ml-3">
              <v-avatar tile color="blue" size="170">
                <img
                  :src="require(`../assets/${teamItem.photo}`)"
                  alt="foto"
                  class="img-card"
                />
              </v-avatar>
              <p style="color: #5800ff">{{ teamItem.name }}</p>
              <p>{{ teamItem.role }}</p>
              <v-card class="mx-auto" max-width="600">
                <p>
                  {{ teamItem.description }}
                </p>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
      <div ref="contact" class="mt-16 mb-16">
        <h1 class="contactPart text-center">Contact Us</h1>
        <v-card class="mx-auto mt-5" max-width="1000" color="#F7F7F7">
          <v-row>
            <v-col class="ml-5">
              <v-row>
                <v-col cols="auto">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                </v-col>
                <v-col cols="auto">
                  <p>xxx-xxxx <br />yyy-yyy-yyy<br />zzz-zzz-zzz</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <font-awesome-icon icon="fa-solid fa-phone" />
                </v-col>
                <v-col> +111-111-1111-1111111 </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                </v-col>
                <v-col> zzzzzzz@gmail.com </v-col>
              </v-row>
            </v-col>
            <v-divider
              vertical
              style="border-color: black !important"
            ></v-divider>
            <v-col align="center">
              <h1>FOLLOW US</h1>
              <v-img
                style="margin-top: 5%"
                v-on:click="page()"
                height="50"
                width="50"
                src="../assets/LI-In-Bug4.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </div>
      <v-footer color="blue-grey darken-3 white--text" padless>
        <v-row>
          <v-col>
            <p class="text-center mt-4">
              Confidential and Proprietary. Copyright (c) tradegenie.ai. All
              Rights Reserved. Contact email: alex.papa@tradegenie.ai
            </p>
          </v-col>
        </v-row>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "website_main",

  data: () => ({
    teamItem: [
      {
        photo:
          "pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg",
        name: "alex",
        role: "Managing director driving our strategic vision and commercial success",
        description:
          "Alex has owked with major financial institutions across the UK, Ireland and Cyprus, incuding a Stock Exchange, a major Broker and various Asset Manager & Hedge funs. Alex draws upon these experiences and his knowledge of business, finance, and data science to turn a novel concept into the go-to behavioural analytics platform for retail investor trading online",
      },
      {
        photo:
          "pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg",
        name: "alex",
        role: "Managing director driving our strategic vision and commercial success",
        description:
          "Alex has owked with major financial institutions across the UK, Ireland and Cyprus, incuding a Stock Exchange, a major Broker and various Asset Manager & Hedge funs. Alex draws upon these experiences and his knowledge of business, finance, and data science to turn a novel concept into the go-to behavioural analytics platform for retail investor trading online",
      },
    ],
    cardItem: [
      {
        title: " Tailored Advice",
        text: "Forget generic solution; our software focused on you, the investor, and what you can control to",
        text2: "Earn Money",
      },
      {
        title: " Transparent Approach",
        text: "No more black-boxes; witness the evidence supporting our findings with unique visualization that",
        text2: "bring your date to life",
      },
      {
        title: "Skill Development",
        text: "Continue trading actively; while we help optimise your performance, you always remain incharge and",
        text2: "call all the shots",
      },
    ],
    image: [
      {
        src: "../assets/digit/digital-graph-with-businessman-hand-overlay-MODIFIED.png",
      },
      {
        src: "../assets/digit/tg_logo (2).png",
      },
    ],
  }),
  methods: {
    page() {
      window.open("https://www.google.com/");
    },
    action1() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    goto(refName) {
      var element = this.$refs[refName];
      console.log(element);
      // var top = element.offsetTop;
      console.log(top);
      // window.scrollTo(0, top - 100);
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style>
.contactPart {
  margin-top: 10%;
  margin-bottom: 5%;
}
.teamPart {
  margin-top: 10%;
  margin-bottom: 5%;
}
.productPart {
  margin-bottom: 5%;
}
.aboutPart {
  margin-bottom: 3%;
}
</style>
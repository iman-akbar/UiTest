<template>
  <v-app class="bgColor">
    <v-app-bar
      v-if="isMobile"
      style="
        background-color: rgb(16 29 40);
        color: ghostwhite;
        font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
        font-size: 2vh;
        font-weight: bold;
        text-align: justify;

        height: 10vh;
      "
      height="40"
      fixed
    >
      <v-row>
        <v-col class="ml-2 mt-5" cols="8">
          <v-img
            @click="action1"
            height="40"
            width="100"
            src="../assets/new_logo.png"
          ></v-img>
        </v-col>
        <v-col v-if="!isMobile" class="mt-2">
          <a @click="goto('about')" style="color: white">About</a>
        </v-col>
        <v-col v-if="!isMobile" class="mt-2">
          <a @click="goto('product')" style="color: white">Product</a>
        </v-col>
        <v-col v-if="!isMobile" class="mt-2">
          <a @click="goto('team')" style="color: white">Team</a>
        </v-col>
        <v-col v-if="!isMobile" class="mt-2">
          <a @click="goto('contact')" style="color: white">Contact Us</a>
        </v-col>
        <v-col class="mt-4" v-if="isMobile" align="right">
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on"
                ><v-app-bar-nav-icon></v-app-bar-nav-icon
              ></v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="i in items"
                :key="i"
                router
                @click="moving(i.path)"
              >
                <v-list-item-title class="down">{{
                  i.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-app-bar
      v-else-if="isDesktop"
      style="
        background-color: rgb(16 29 40);
        color: ghostwhite;
        font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
        font-size: 2vh;
        font-weight: bold;
        text-align: justify;
        align-content: space-evenly !important;

        height: 10vh;
      "
      height="90"
      fixed
    >
      <v-row>
        <v-col class="ml-10" cols="8">
          <v-img
            @click="action1"
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
    <v-app-bar
      v-else-if="isTablet"
      style="
        background-color: rgb(16 29 40);
        color: ghostwhite;
        font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
        font-size: 2vh;
        font-weight: bold;
        text-align: justify;
        align-content: space-evenly !important;

        height: 10vh;
      "
      height="60"
      fixed
    >
      <v-row>
        <v-col class="ml-1 mt-0" cols="5">
          <v-img
            @click="action1"
            height="60"
            width="160"
            src="../assets/new_logo.png"
          ></v-img>
        </v-col>
        <v-col class="ml-8 mt-8">
          <a @click="goto('about')" style="color: white">About</a>
        </v-col>
        <v-col class="mt-8">
          <a @click="goto('product')" style="color: white">Product</a>
        </v-col>
        <v-col class="mt-8">
          <a @click="goto('team')" style="color: white">Team</a>
        </v-col>
        <v-col class="mt-8">
          <a @click="goto('contact')" style="color: white">Contact Us</a>
        </v-col>
      </v-row>
    </v-app-bar>
    <div v-if="isMobile">
      <v-img
        height="190"
        src="../assets/digital-graph-with-businessman-hand-overlay-MODIFIED (1).png"
      ></v-img>
    </div>
    <div v-else-if="isDesktop">
      <v-img
        src="../assets/digital-graph-with-businessman-hand-overlay-MODIFIED (1).png"
      ></v-img>
    </div>
    <div v-else-if="isTablet">
      <v-img
        height="400"
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
      <v-row dense class="ml-16 mr-5">
        <v-col
          cols="auto"
          sm="10"
          md="4"
          lg="4"
          v-for="cardItem in cardItem"
          :key="cardItem"
        >
          <v-card
            width="500"
            height="400px"
            outlined
            style="'display: flex;
    
    
     background: rgb(16 29 40);
    
    border: 2px solid white"
          >
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
      <div
        ref="team"
        class="teamref mt-5"
        style="margin-top: 200px; padding-bottom: 100px"
      >
        <h1 class="teamPart text-center">Our Team</h1>
        <v-row justify="center">
          <v-col v-for="(teamItem, index) in teamItem" :key="teamItem">
            <div class="text-center ml-3">
              <v-avatar tile color="blue" size="170">
                <img
                  @click="opening(index)"
                  :src="require(`../assets/${teamItem.photo}`)"
                  alt="foto"
                  class="img-card"
                />
              </v-avatar>
              <p style="color: #5800ff">{{ teamItem.name }}</p>
              <p>
                <strong>{{ teamItem.role }}</strong>
              </p>
              <div class="mt-16">
                <v-card
                  height="200px"
                  v-show="itemToShow == index"
                  class="mx-auto"
                  width="350"
                >
                  <p style="color: black">
                    {{ teamItem.description }}
                  </p>
                </v-card>
              </div>
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
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                </v-col>
                <v-col>enquiries@tradegenie.ai</v-col>
              </v-row>
            </v-col>
            <v-divider
              vertical
              style="border-color: black !important"
            ></v-divider>
            <v-col align="center">
              <p>Follow Us</p>
              <v-img
                style="margin-top: 1%"
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
              Rights Reserved.
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
    itemToShow: -1,
    drawer: false,
    ProductOpen: false,
    items: [
      { path: "about", title: "About" },
      { path: "product", title: "Product" },
      { path: "team", title: "Team" },
      { path: "contact", title: "Contact Us" },
    ],

    teamItem: [
      {
        photo: "alex_pic.png",
        name: "Alex Papakyriacou",
        role: "Founder & Managing Director",
        description:
          "Alex has worked with major financial institutions across the UK, Ireland and Cyprus, including a Stock Exchange, a major Broker and various Asset Manager & Hedge funs. Alex draws upon these experiences and his knowledge of business, finance, and data science to turn a novel concept into the go-to behavioural analytics platform for retail investor trading online",
      },
      {
        photo: "alex_pic.png",
        name: "XYZ",
        role: "Chief Technology Officer",
        description:
          "XYZ excels at designing, developing and managing large scale end-to-end applications from the ground-up. With over 11 years of combined experience from across the finance, media and consulting industries, and a proven track record of leading AI/ML technology from innovative start-ups to established corporates, XYZ is set on building a product that traders love to use.",
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
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  }),
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  // beforeDestroy() {
  //   if (typeof window !== "undefined") {
  //     window.removeEventListener("resize", this.onResize, { passive: true });
  //   }
  // },
  methods: {
    opening(e) {
      console.log(this.itemToShow);
      if (e === this.itemToShow) {
        this.itemToShow = -1;
      } else {
        this.itemToShow = e;
      }
    },
    expand(e) {
      console.log(e);
    },
    moving(e) {
      this.goto(e);
    },
    OpenProduct() {
      this.ProductOpen = false;
      console.log("try");
    },

    onResize() {
      this.isMobile = window.innerWidth < 700; //text and card
      this.isTablet = 700 > window.innerWidth < 1400;
      this.isDesktop = window.innerWidth > 1400;
      //4k resolution txt format
    },
    page() {
      window.open("https://cy.linkedin.com/company/trade-genie");
    },
    action1() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.itemToShow = -1;
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
<style scoped>
h1 {
  border-style: solid;
}
p {
  color: ghostwhite;
}
h1 {
  color: ghostwhite;
}
.bgColor {
  background: rgb(16 29 40);
}
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
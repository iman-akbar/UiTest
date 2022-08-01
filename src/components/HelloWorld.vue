<template>
  <v-app>
    <v-app-bar color="blue-grey darken-3" height="90" fixed>
      <v-row>
        <v-col class="ml-10" cols="8">
          <v-img height="90" width="240" src="../assets/new_logo.png"></v-img>
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
          <a @click="goto('contact_us')" style="color: white">Contact Us</a>
        </v-col>
      </v-row>
    </v-app-bar>
    <div>
      <v-img
        height="750"
        src="../assets/digital-graph-with-businessman-hand-overlay-MODIFIED (1).png"
      ></v-img>
    </div>
    <div ref="about" class="mt-10">
      <h1 class="text-center">About</h1>
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
    <div ref="product" class="mt-5">
      <h1 class="text-center">Product</h1>
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
      <div ref="team" class="mt-5">
        <h1 class="text-center">Team</h1>
        <v-row align="center" justify="center">
          <v-col>
            <div class="text-center ml-3">
              <v-avatar tile color="blue" size="170">
                <img
                  src="../assets/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"
                  alt="John"
                />
              </v-avatar>
              <p style="color: #5800ff">alex</p>
              <p>
                Managing director driving our strategic vision<br />
                and commercial success
              </p>
              <v-card class="mx-auto" max-width="600">
                <p>
                  Alex has owked with major financial institutions across the
                  UK, Ireland and Cyprus, incuding a Stock Exchange, a major
                  Broker and various Asset Manager & Hedge funs. Alex draws upon
                  these experiences and his knowledge of business, finance, and
                  data science to turn a novel concept into the go-to
                  behavioural analytics platform for retail investor trading
                  online
                </p>
              </v-card>
            </div>
          </v-col>
          <v-col>
            <div class="text-center mr-3">
              <v-avatar tile color="blue" size="170">
                <img
                  src="../assets/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"
                  alt="John"
                />
              </v-avatar>
              <p style="color: #5800ff">alex</p>
              <p>
                Managing director driving our strategic vision<br />
                and commercial success
              </p>
              <v-card class="mx-auto" max-width="600">
                <p>
                  Alex has owked with major financial institutions across the
                  UK, Ireland and Cyprus, incuding a Stock Exchange, a major
                  Broker and various Asset Manager & Hedge funs. Alex draws upon
                  these experiences and his knowledge of business, finance, and
                  data science to turn a novel concept into the go-to
                  behavioural analytics platform for retail investor trading
                  online
                </p>
              </v-card>
            </div>
          </v-col>
        </v-row>
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
  name: "HelloWorld",

  data: () => ({
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
    goto(refName) {
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      console.log(top);
      window.scrollTo(0, top);
    },
  },
};
</script>
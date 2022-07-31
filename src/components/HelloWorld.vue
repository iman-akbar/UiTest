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
    <br />
    <br />
    <br /><br />
    <div>
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
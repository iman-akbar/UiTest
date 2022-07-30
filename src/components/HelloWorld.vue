<template>
  <v-app>
    <v-app-bar color="white" fixed>
      <v-row>
        <v-col class="ml-10" cols="6">
          <h1 style="margin-left: 100px">Logo</h1>
        </v-col>
        <v-col class="mt-5">
          <a @click="goto('WhatweDo')">What We Do</a>
        </v-col>
        <v-col class="mt-5">
          <a @click="goto('productData')">Product</a>
        </v-col>
        <v-col class="mt-5">
          <a @click="goto('footer')">Contact</a>
        </v-col>
        <v-col class="mt-5">
          <a @click="goto('about')">About</a>
        </v-col>
      </v-row>
    </v-app-bar>
    <div ref="WhatweDo">
      <!-- <v-carousel-item
        v-for="(image, i) in image"
        :key="i"
        :src="image.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item> -->
      <v-img src="../assets/Screenshot 2022-07-31 at 2.18.55 AM.png"></v-img>
    </div>
    <div ref="productData" class="mt-5">
      <h1 class="text-center">Product</h1>
      <p class="text-center" style="color: #5800ff">
        Behavioural Analytics as a Service
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
                <span style="color: #5800ff">{{ cardItem.text2 }}</span>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div ref="about" class="mt-10">
      <h1 class="text-center">About</h1>
      <p class="text-center" style="color: #5800ff">
        An early-stage Fintech Start-up base in Cyprus
      </p>
      <p class="text-center">
        Developing an AI platform that provides valueable Behavioural
        <br />Advice to every type of retail investor, regardless of their
        <br />
        axperience, trading style or asset preference
      </p>
      <p class="text-center" style="color: #5800ff">
        Curently in "Stealth Mode"
      </p>
    </div>
    <div ref="footer">
      <v-footer class="mt-10" color=" blue dark" padless>
        <v-row no-gutters>
          <v-col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
            quidem aliquam accusantium quos placeat, magni neque sequi quod.
            Totam dolor reprehenderit a, explicabo perferendis modi veniam eum
            sequi ad.
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
            quidem aliquam accusantium quos placeat, magni neque sequi quod.
            Totam dolor reprehenderit a, explicabo perferendis modi veniam eum
            sequi ad.
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
            quidem aliquam accusantium quos placeat, magni neque sequi quod.
            Totam dolor reprehenderit a, explicabo perferendis modi veniam eum
            sequi ad.
          </v-col>
          <v-col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
            quidem aliquam accusantium quos placeat, magni neque sequi quod.
            Totam dolor reprehenderit a, explicabo perferendis modi veniam eum
            sequi ad.
          </v-col>
        </v-row>
      </v-footer>
      <v-footer color="black white--text" padless>
        <p class="mt-2 ml-10">IACorp By IMAN AKBAR</p>
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
        src: "../assets/digit/tg_logo (1).png",
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

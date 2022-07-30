<template>
  <v-app>
    <v-app-bar color="green" fixed>
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
      </v-row>
    </v-app-bar>
    <div ref="WhatweDo">
      <v-img
        src="../assets/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"
      ></v-img>
    </div>
    <div ref="productData">
      <h1 class="text-center">Product</h1>
      <v-row class="ml-5 mr-5">
        <v-col v-for="cardItem in cardItem" :key="cardItem">
          <v-card>
            <v-card-text>
              <p>{{ cardItem.text }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
    cardItem: [{ text: "data 1" }, { text: "data 2" }, { text: "data 3" }],
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

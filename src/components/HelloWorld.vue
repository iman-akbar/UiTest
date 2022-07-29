<template>
  <v-app>
    <v-app-bar
      absolute
      color="green"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-row>
        <v-col class="ml-10" cols="6">
          <h1 style="margin-left: 100px">Logo</h1>
        </v-col>
        <v-col class="mt-5">
          <a>What We Do</a>
        </v-col>
        <v-col class="mt-5">
          <a>Product</a>
        </v-col>
        <v-col class="mt-5">
          <a>Contact</a>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-img
      src="../assets/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"
    ></v-img>
    <h1 class="text-center">Product</h1>
    <v-row class="ml-5 mr-5">
      <v-col>
        <v-card>
          <v-card-text>
            <p>Data</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <p>Data</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <p>Data</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>

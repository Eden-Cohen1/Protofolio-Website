// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icons", "@element-plus/nuxt", "@nuxtjs/google-fonts"],
  css: [
    "~/assets/main.css",
    "element-plus/theme-chalk/dark/css-vars.css",
    "~/assets/dark/css-vars.css",
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      "Open+Sans": true,
      Roboto: true,
      Lato: true,
    },
  },
});
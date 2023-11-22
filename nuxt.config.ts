// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
  },
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@element-plus/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-gtag",
  ],
  gtag: {
    id: "G-FNCL6LY8K7",
  },
  css: ["~/assets/main.css", "element-plus/theme-chalk/dark/css-vars.css"],
  googleFonts: {
    families: {
      Montserrat: true,
      "Open+Sans": true,
      Roboto: true,
      Lato: true,
      "Space+Mono": true,
      Poppins: true,
      Playpen: true,
      "Playpen+Sans": true,
    },
  },
  image: {
    provider: "netlify",
    netlify: {
      baseURl: process.env.IMAGES_URL,
    },
  },
});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
const envSet = require("./env.ts");
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      ...envSet,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon"],
});

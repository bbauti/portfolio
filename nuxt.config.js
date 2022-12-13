export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{src: 'https://tarptaeya.github.io/repo-card/repo-card.js'}],
    bodyAttrs: {
      class: 'noise'
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/aos.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: ['@/assets/css/main.scss'],
    sass: [],
    less: [],
    stylus: [],
    hoistUseStatements: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5000,
  },
};

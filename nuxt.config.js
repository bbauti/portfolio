export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "bbauti",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    bodyAttrs: {
      class: 'noise'
    },
  },

  pwa: {
    meta: {
      name: "bbauti",
      author: "Bautista Igarzabal",
      description: "Portfolio de bbauti",
      theme_color: "#fff",
      lang: "es",
      ogHost: "bbauti.com",
    },
    manifest: {
      name: 'bbauti',
      short_name: 'bbauti',
      description: 'Portfolio de bbauti',
      lang: 'es',
      useWebmanifestExtension: false
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
    '@nuxtjs/pwa',
    'nuxt-webpack-optimisations',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@aceforth/nuxt-optimized-images',
    '@twicpics/components/nuxt2',
  ],

  twicpics: {
    domain: 'https://bbauti.twic.pics',
  },

  image: {
    twicpics: {
      baseURL: "https://bbauti.twic.pics"
    }
  },

  sitemap: {
    hostname: 'https://bbauti.github.io/portfolio',
    gzip: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5000,
  },
};

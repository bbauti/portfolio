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
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-speedkit',
    '@nuxtjs/i18n',
    'nuxt-viewport',
    '@nuxtjs/composition-api/module',
    'nuxt-precompress',
    '@nuxtjs/component-cache',
  ],

  i18n: {
    locales: [
        {
          code: 'en',
          file: 'en-US.js'
        },
        {
          code: 'es',
          file: 'es-ES.js'
        }
      ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'es',
    vueI18n: {
        fallbackLocale: 'es',
    },
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
    }
  },

  image: {
    gumlet: {
      baseURL: 'https://bbauti.gumlet.io/'
    }
  },

  speedkit: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    fonts: [{
      family: 'Oxygen',
      locals: ['Oxygen'],
      fallback: ['Arial', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/rifton.ttf', type:'ttf' },
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/rifton.ttf', type:'ttf' },
          ]
        }
      ]
    }],

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    lazyOffset: {
      component: '0%',
      asset: '0%'
    },

    loader: {
      dataUri: null,
      size: '100px',
      backgroundColor: 'grey'
    }

  },

  sitemap: {
    hostname: 'https://bbauti.github.io/portfolio',
    gzip: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    minify: {
      collapseWhitespace: false
    }
  },

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5000,
  },
};

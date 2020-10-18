export default {
  server: {
    port: 1024, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Where there is a will, there is a way!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://hm.baidu.com/hm.js?7e1c17b34706ce78dafee2fc61cd72b8' },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    'iview/dist/styles/iview.css',
    '@/assets/css/reset.css',
    '@/assets/css/utils.css',
    '@/assets/css/markdown.min.css',
    '@/assets/iconfont/iconfont.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/iview',
    '@/plugins/filter',
    '@/plugins/baidu',
    '@/plugins/highlight.js',
    {
      src: '@/plugins/back',
      ssr: false,
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'http://49.232.31.160:3000',
      changeOrigin: true,
      pathRewrite: { '^/api/': '' },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    analyze: true,
  },
}

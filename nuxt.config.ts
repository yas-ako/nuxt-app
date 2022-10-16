// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  css: [
    '@/assets/css/reset.css',
    '@/assets/css/style.css'
  ],
  // app: {
    head: {
      meta: [      // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  // }
})

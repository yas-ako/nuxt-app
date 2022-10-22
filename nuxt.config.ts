// https://v3.nuxtjs.org/api/configuration/nuxt.config

const { API_KEY, SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/style.css'
  ],
  privateRuntimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN
  },
  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
    serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss", "vuetify/styles"],
  modules: ["vuetify-nuxt-module", "@nuxtjs/storybook"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:math";`, // 선택 사항: 글로벌로 포함할 SCSS 설정
        },
      },
    },
  },
});

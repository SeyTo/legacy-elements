import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import ThemeColors from '@/styles/settings/colors.js'

const theme = ThemeColors.main

Vue.use(Vuetify, {
  theme: {
    primary: theme.primary.base,
    secondary: theme.secondary.base,
    accent: theme.accent.base,
    error: theme.error.base,
    info: theme.info.base,
    success: theme.success.base,
    warning: theme.warning.base,
    grey1: theme.grey.grey1,
    grey2: theme.grey.grey2,
    grey3: theme.grey.grey3,
    grey4: theme.grey.grey4
  },
  customProperties: true,
  iconfont: 'mdi'
})

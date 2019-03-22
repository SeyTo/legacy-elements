<template lang="pug">
v-navigation-drawer(
  app fixed
  :left="left"
  :right="!left"
  :dark="dark"
  :value="value"
  :mobile-break-point="mobileBreakPoint"
  @input="$emit('input', $event)"
)
  v-toolbar(@click="$emit('input', false)" large flat)
    v-btn(icon left fixed).my-0.mx-2: v-icon mdi mdi-arrow-left
  slot
</template>

<style lang="stylus" scoped>
.v-navigation-drawer
  z-index 20
  .v-toolbar
    height 72px
</style>

<script>
export default {
  name: 'base-navdrawer',
  props: {
    value: { default: false },
    dark: { default: true },
    left: { default: true },
    mobileBreakPoint: { default: '800' }
  }
}
</script>

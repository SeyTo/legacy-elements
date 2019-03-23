<template lang="pug">
v-navigation-drawer(
  app fixed
  :left="left"
  :right="!left"
  :dark="dark"
  :value="value"
  :mobile-break-point="mobileBreakPoint"
  @input="$emit('input', $event)"
).base-navdrawer
  v-toolbar(@click="$emit('input', false)" large flat).transparent
    v-btn(icon left fixed).mx-2
      v-icon mdi mdi-arrow-left
  slot
</template>

<script>
export default {
  name: 'base-navdrawer',
  props: {
    value: { default: false },
    dark: { default: true },
    left: { default: true },
    mobileBreakPoint: { default: '1200' }
  }
}
</script>

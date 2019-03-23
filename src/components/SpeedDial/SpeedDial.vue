<template lang="pug">
v-speed-dial(
  v-model="model"
  :bottom="bottom"
  :right="right"
  :left="left"
  :top="top"
  :direction="direction"
).speed-dial
  template(
    v-slot:activator=""
  )
    v-btn(
      fab
      v-model="model"
    ).primary--btn
      v-icon {{ mainIcon }}
      v-icon mdi-close
  template(v-for="b, index in buttons")
    v-btn(
      icon 
      @click="$emit('click:' + (b.name || index) )"
    ).secondary--btns
      v-icon {{ b.icon }}
      .outer-text.accent--font {{ b.text }}
</template>

<script>
export default {
  props: {
    mainIcon: { default: 'mdi-account-key' },
    buttons: { type: Array },
    bottom: { type: Boolean },
    right: { type: Boolean },
    left: { type: Boolean },
    top: { type: Boolean },
    direction: { type: String, validator: v => ['top', 'right', 'bottom', 'left'].includes(v), default: 'top' }
  },
  data () {
    return {
      model: false
    }
  }
}
</script>

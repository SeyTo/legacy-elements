<template lang="pug">
v-flex.editable-title

  div(
    v-show="showTitle"
    @click="showTitle = false"
  ).subheading.accent--font.my-1.mx-2 
    | {{ header ? header + ' (' + defaultTitle + ')' : defaultTitle }}

  v-text-field(
    v-if="!showTitle" flat solo
    :value="header"
    @input="setHeader($event)"
    label="Set Header"
    @keyup.enter="showTitle = true"
    hide-details
  ).title-editor
</template>

<style lang="stylus" scoped>
.editable-title
  max-width 250px
  cursor pointer
</style>

<script>
export default {
  name: 'EditableTitle',
  props: {
    header: String,
    defaultTitle: String
  },
  data () {
    return {
      showTitle: true
    }
  },
  methods: {
    setHeader (header) {
      this.$emit('update:header', header)
    }
  }
}
</script>

<template lang="pug">
div
  v-text-field(
    v-model='term'
    @keyup.enter='search'
    prependInnerIcon='mdi-magnify'
    :solo='true'
    :flat='true'
    :label='label'
  )
</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
  name: 'SearchField',
  props: {
    label: {
      default: 'Search'
    }
  },
  data () {
    return {
      term: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.term)
    }
  }
}
</script>

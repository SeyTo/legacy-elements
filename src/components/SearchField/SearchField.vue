<template lang="pug">
.search-field
  v-text-field(
    v-model='term'
    @keyup.enter='search'
    prependInnerIcon='mdi-magnify'
    :solo='true'
    :flat='true'
    :label='label'
    round
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

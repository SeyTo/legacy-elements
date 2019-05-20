<template lang="pug">
.mod-list()
  slot(name='prepend')
  v-list(
    :dense='dense'
    :style='{ maxHeight: maxHeight }'
  ).mod-list__list
    template(v-for='item, index in items')
      // item
      v-list-tile(
        @click='selectItem(index)'
        :class='{ "highlight-item": index === selectedIndex }'
      )
        slot(name='item' v-bind='{ item, index }')
          | {{ item }}
  slot(name='append')
</template>

<style lang="stylus" scoped>
.mod-list
  height 300px
  .mod-list__list
    overflow-y auto
.highlight-item
  border 1px solid #010400
</style>

<script>
export default {
  name: 'ModList',
  props: {
    dense: { default: false },
    items: { type: Array, default: () => [] },
    maxHeight: { type: String, default: '260px' }
  },
  data () {
    return {
      selectedIndex: -1
    }
  },
  computed: {},
  methods: {
    selectItem (index) {
      this.selectedIndex = index
      this.$emit('click:item', index)
    },
    getSelected () {
      return this.selectedIndex
    }
  },
  components: {}
}
</script>

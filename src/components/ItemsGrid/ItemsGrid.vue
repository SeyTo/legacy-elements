<template lang="pug">
v-layout(wrap).items-grid
  v-flex(xs12 sm6 md3 v-for='item, index in items' :key='index').pa-1
    v-card(hover raised @click='$emit("click:item", { item })').pa-3
      v-layout
        slot(name='item' v-bind='{ item, index }')
</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
  name: 'ItemsGrid',
  props: {
    items: { default: () => [] }
  }
}
</script>

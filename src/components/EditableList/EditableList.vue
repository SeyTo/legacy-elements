<template lang="pug">
v-list(
  dense
)
  template(v-for='item in items')
    v-list-tile
      component(
        :is='item.component' 
        v-bind='item.props'
        @click='$emit("click:" + item.name, $event)'
      )
        | {{ item.slot }}

  v-btn(
    @click='$emit("click:addNewItem", $event)'
    depressed
    v-if='editable'
  )
    v-icon(left) mdi-plus 
    | {{ addItemMsg }}

</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
  name: 'EditableList',
  props: {
    editable: {
      default: true
    },
    addItemMsg: {
      default: 'Add new item'
    },
    items: {
      type: Array,
      default: []
    }
  }
}
</script>

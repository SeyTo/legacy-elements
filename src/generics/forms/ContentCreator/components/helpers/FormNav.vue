<template lang="pug">
div
  v-layout
    slot
    div(v-for="item, index in forefront" :key="item.name + index")
      v-tooltip(bottom)
        template(v-slot:activator="{ on }")
          v-btn(icon small @click="$emit('click:' + item.name)" v-on="on") 
            v-icon {{ item.icon }} 
        span {{ item.label }}
    v-menu(bottom left)
      template(v-slot:activator="{ on }")
        v-btn(v-on="on" small icon).secondary
          v-icon mdi-dots-vertical
      v-list
        v-list-tile(v-for="item, index in items" :key="item.name + index" @click="$emit('click:' + item.name)")
          v-list-tile-title 
            v-icon(left) {{ item.icon }}
            | {{ item.label }}
</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
  name: 'FormNav',
  props: {
    add: {},
    del: {},
    move: {},
    // { name, label, icon, forefront }
    buttons: Array
  },
  computed: {
    items () {
      const i = []
      if (this.add) i.push({ name: 'add', label: 'Add New', icon: 'mdi-plus' })
      if (this.del) i.push({ name: 'del', label: 'Delete This', icon: 'mdi-delete' })
      if (this.move) {
        i.push({ name: 'up', label: 'Move up', icon: 'mdi-arrow-up' })
        i.push({ name: 'down', label: 'Move down', icon: 'mdi-arrow-down' })
      }
      if (this.buttons) {
        i.push(...this.buttons.filter(v => !v.forefront))
      }
      return i
    },
    forefront () {
      const i = []
      if (this.buttons) {
        i.push(...this.buttons.filter(v => v.forefront))
      }
    }
  }
}
</script>

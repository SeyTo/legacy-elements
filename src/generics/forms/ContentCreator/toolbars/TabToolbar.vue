<template lang="pug">
v-layout
  .subheading.grey3--text.accent--font Tabs
  v-btn(@click="creator.visible = true" icon)
    v-icon mdi-plus

  // ask which component to add to this
  v-dialog(
    v-model="creator.visible"
    max-width="300px"
  )
    v-list
      v-list-tile(
        v-for="element in elements"
        :key="element.name"
        @click="addTabContent(element)"
      )
        v-icon(left) {{ element.icon }}
        | {{ element.name }}
</template>

<style lang="stylus" scoped>
</style>

<script>
import ToolbarEventBus from '../ToolbarEventBus'

import Creator from '../mixins/Creator'

export default {
  name: 'TabToolbar',
  mixins: [Creator],
  props: {
    model: {}
  },
  data () {
    return {
      // active tab
      activeIndex: 0,
      // temporary inputs and dialogs
      creator: {
        visible: false,
        temp: {}
      },
      // TODO move all this to toolbar
      btns: [
        { name: 'addcomponent', label: 'Add Component', forefront: false, icon: 'mdi-plus' },
        { name: 'removecomponent', label: 'Remove Component', forefront: false, icon: 'mdi-minus' },
        { name: 'addtab', label: 'Add New Tab', forefront: false, icon: 'mdi-plus' },
        { name: 'deletetab', label: 'Delete Current Tab', forefront: false, icon: 'mdi-delete' },
        { name: 'renametab', label: 'Rename Current Tab', forefront: false, icon: 'mdi-rename-box' },
        { name: 'moveleft', label: 'Move Current Tab Left', forefront: false, icon: 'mdi-arrow-left' },
        { name: 'moveright', label: 'Move Current Tab Right', forefront: false, icon: 'mdi-arrow-right' }
      ]
    }
  },
  methods: {
    addTab (meta) {
      // just create basic container layout
      this.model._value.push({ header: meta.header, container: [] })
    },
    addTabContent (element) {
      this.creator.visible = false
      // push to store
      this.pushToModel(this.model._value[this.activeIndex].container, element)
      this.creator.temp = {}
    }
  },
  mounted () {
    ToolbarEventBus.$on('TabToolbar:addTab', (payload) => {
      this.addTab(payload)
    })
    ToolbarEventBus.$on('TabToolbar:addTabContent', (payload) => {
      this.creator.visible = true
    })
    ToolbarEventBus.$on('TabToolbar:active', (payload) => {
      this.activeIndex = payload
    })
  }
}
</script>

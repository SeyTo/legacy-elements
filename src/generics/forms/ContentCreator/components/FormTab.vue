<template lang="pug">
.form-tab(
  @click.stop="selectThis"
  :class="{ 'border-bottom__heavy': isSelected, 'border-bottom__light': !isSelected }"
).form-component.my-2
  v-layout(
    :class="{ 'warning': isSelected, 'secondary': !isSelected }"
  ).secondary.white--text
    EditableTitle(defaultTitle='Tab' :header.sync="model._header")
    v-spacer

  v-tabs(
    v-model="active"
    color="grey1"
  )
    // when nothing to show
    v-btn(v-if="temp.showAddTab" @click="temp.showAddTab = false" icon).white
      v-icon mdi-plus
    v-text-field(v-else solo v-model="temp.tabName" label="Set Tab Name" v-on:keyup.enter="addTab(temp.tabName)")

    template(v-for="collection, index in model._value")
      v-tab(:key="collection.header + index")
        | {{ collection.header }}
      v-tab-item(:key="collection.header + 'content' + index").px-2
        div(v-if="collection.container.length === 0" @click="addTabContent()")
          | Add Tab Content
        div(v-for="section, index in collection.container")
          component(
            :is="section.__meta.component"
            :componentId="section.__meta.ref"
            :model="section"
          ).my-2

</template>

<style lang="stylus" scoped>
.form-tab
  transition 0.4s
</style>

<script>
import FormNav from './helpers/FormNav'
import EditableTitle from './helpers/EditableTitle'
import FormGallery from './FormGallery'
import FormParagraph from './FormParagraph'
import FormSection from './FormSection'

import {
  Selectable,
  Container,
  Component,
  Sibling
} from '../mixins/*'
import ToolbarEventBus from '../ToolbarEventBus'

export default {
  name: 'FormTab',
  mixins: [
    Component,
    Container,
    Selectable,
    Sibling
  ],
  data () {
    return {
      _active: null,
      temp: {
        showAddTab: true,
        tabName: ''
      },
      buttons: [
        { name: 'addcomponent', label: 'Add Component', forefront: false, icon: 'mdi-plus' },
        { name: 'addtab', label: 'Add New Tab', forefront: false, icon: 'mdi-plus' },
        { name: 'deletetab', label: 'Delete Current Tab', forefront: false, icon: 'mdi-delete' },
        { name: 'renametab', label: 'Rename Current Tab', forefront: false, icon: 'mdi-rename-box' },
        { name: 'moveleft', label: 'Move Current Tab Left', forefront: false, icon: 'mdi-arrow-left' },
        { name: 'moveright', label: 'Move Current Tab Right', forefront: false, icon: 'mdi-arrow-right' }
      ]
    }
  },
  computed: {
    active: {
      get () {
        return this._active
      },
      set (v) {
        this._active = v
        ToolbarEventBus.$emit('TabToolbar:active', v)
      }
    }
  },
  methods: {
    addTab (header) {
      ToolbarEventBus.$emit('TabToolbar:addTab', { header })
      // hide text-field
      this.temp.showAddTab = true
      this.temp.tabName = ''
    },
    addTabContent () {
      ToolbarEventBus.$emit('TabToolbar:addTabContent')
    }
  },
  components: {
    FormNav,
    EditableTitle,
    FormGallery,
    FormParagraph,
    FormSection
  }
}
</script>

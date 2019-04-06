<template lang="pug">
.form-section(
  @click.stop="selectThis"
  :class="{ 'border-bottom__heavy': isSelected, 'border-bottom__light': !isSelected }"
).my-2
  // meta
  v-layout(
    :class="{ 'warning': isSelected, 'secondary': !isSelected }"
  ).title-bar.white--text
    EditableTitle(defaultTitle="Section" :header.sync="model._header")
    v-spacer
    // FormNav(del move @click:del.native="$emit('click:del')")
    //   v-menu(bottom left)
    //     template(v-slot:activator="{ on }")
    //     v-btn(v-on="on" small icon).secondary
    //       v-icon mdi-plus
    //   v-list
    //     v-list-tile(v-for="element, index in elements" :key="element.name + index" @click="push(element.name)")
    //       v-list-tile-title 
    //         v-icon(left) {{ element.icon }}
    //         | {{ element.name }}

  .wrapper
    // | {{ model }}
    div(v-for="section, index in model._value" :key="index") 
      // TODO delete button
      component(
        :is="section.__meta.component" 
        :componentId="section.__meta.ref"
        :model="section"
      ).my-2

</template>

<style lang="stylus" scoped>
.form-section
  transition 0.4s
  // border-bottom 1px solid #ccc
</style>

<script>
import FormNav from './helpers/FormNav'
import EditableTitle from './helpers/EditableTitle'
import FormParagraph from './FormParagraph'
import FormTab from './FormTab'
import FormGallery from './FormGallery'

import {
  Component,
  Sibling,
  Container,
  Selectable
} from '../mixins/*'

export default {
  name: 'FormSection',
  mixins: [
    Component,
    Sibling,
    Container,
    Selectable
  ],
  data () {
    return {
      selected: false,
      temp: {
        showTitle: true
      },
      buttons: [
        { name: 'add', label: 'Add Component', icon: 'mdi-plus', forefront: true }
      ]
    }
  },
  methods: {
    deleteSection (index) {
      this.model._value.splice(index, 1)
    }
  },
  components: {
    FormParagraph,
    FormTab,
    FormGallery,
    FormNav,
    EditableTitle
  }
}
</script>

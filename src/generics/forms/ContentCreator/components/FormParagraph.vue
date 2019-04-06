<template lang="pug">
.form-paragraph(
  @click.stop="selectThis"
  :class="{ 'elevation-6': isSelected }"
).my-2
  v-layout(
    :class="{ 'warning': isSelected, 'secondary': !isSelected }"
  ).secondary.white--text
    EditableTitle(defaultTitle='Paragraph' :header.sync="model._header")
    v-spacer
    // FormNav(move del @click:del="$emit('click:delete')")
      v-btn(@click="" icon small).secondary
        v-icon mdi-pencil
  v-layout(@click="openEditor").paragraph-content.pa-3
    div(v-if="!model._value").null-content Edit In Editor
    span(else v-html="model._value") 
</template>

<style lang="stylus" scoped>
.form-paragraph
  transition 0.4s
  .paragraph-content
    min-height 50px
    .null-content
      cursor pointer
</style>

<script>
import FormNav from './helpers/FormNav'
import EditableTitle from './helpers/EditableTitle'

import {
  Selectable,
  Component,
  Sibling
} from '../mixins/*'
import ToolbarEventBus from '../ToolbarEventBus'

export default {
  name: 'FormParagraph',
  mixins: [
    Component,
    Selectable,
    Sibling
  ],
  methods: {
    openEditor () {
      ToolbarEventBus.$emit('ParagraphToolbar:openEditor', null)
    }
  },
  components: {
    FormNav,
    EditableTitle
  }
}
</script>

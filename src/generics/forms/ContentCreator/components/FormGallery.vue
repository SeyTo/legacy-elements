<template lang="pug">
.form-gallery(
  @click.stop="selectThis"
  :class="{ 'elevation-6': isSelected }"
).my-2
  v-layout(
    :class="{ 'warning': isSelected, 'secondary': !isSelected }"
  ).white--text
    EditableTitle(defaultTitle='Gallery' :header.sync="model._header")
    v-spacer
    // FormNav(add del move @click:add="" @click:del="$emit('click:delete')")

  .gallery-wrapper.pa-2
    v-carousel(
      :hideControls="isImgOnly"
      :hideDelimiters="isImgOnly"
    )
      v-carousel-item(
        v-for="imgModel, index in model._value"
        :key="index"
        @click="setImage(index)"
        :src="imgModel.src"
      )
      div(@click="addImage")
        | add image
</template>

<style lang="stylus" scoped>
.form-gallery
  transition 0.4s
</style>

<script>
import FormNav from './helpers/FormNav'
import ToolbarEventBus from '../ToolbarEventBus'

import EditableTitle from './helpers/EditableTitle'
import {
  Selectable,
  Component,
  Sibling
} from '../mixins/*'

export default {
  name: 'FormGallery',
  mixins: [
    Component,
    Selectable,
    Sibling
  ],
  props: {},
  data () {
    return {
      _activeIndex: 0,
      imgs: []
    }
  },
  computed: {
    active: {
      get () {
        return this._activeIndex
      },
      set (v) {
        this._active = v
        ToolbarEventBus.$emit('GalleryToolbar:active', v)
      }
    },
    isImgOnly () {
      return this.model._value.length === 1
    }
  },
  methods: {
    addImage (e) {
      ToolbarEventBus.$emit('GalleryToolbar:addImage')
    },
    setImage () {

    }
  },
  components: {
    FormNav,
    EditableTitle
  }
}
</script>

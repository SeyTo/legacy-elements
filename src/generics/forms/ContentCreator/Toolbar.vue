<template lang="pug">
v-layout(column)
  v-layout(justify-end).white
    tooltipIconBtn(icon="mdi-content-save" tooltip="Save Webpage" @click="")
    tooltipIconBtn(icon="mdi-eraser" tooltip="Reset All" @click="")
    tooltipIconBtn(icon="mdi-plus" tooltip="Add Another Component" @click="addNewSection")
    tooltipIconBtn(icon="mdi-eye" tooltip="Preview" @click="")
  .toolbar__wrapper
    component(
      :is="currentToolbar" 
      :model="currentModel"
      ref="toolbar"
    )
</template>

<style lang="stylus" scoped>
.toolbar__wrapper
  min-height 48px
</style>

<script>
import ParagraphToolbar from './toolbars/ParagraphToolbar'
import TabToolbar from './toolbars/TabToolbar'
import SectionToolbar from './toolbars/SectionToolbar'
import GalleryToolbar from './toolbars/GalleryToolbar'
import { getByRef, findIndexOfRef } from './utils'
import Section from './models/Section'
import ToolbarEventBus from './ToolbarEventBus'

export default {
  name: 'Toolbar',
  props: {},
  data () {
    return {
      currentModel: null
    }
  },
  computed: {
    currentToolbar () {
      const selected = this.$store.getters['eContentCreator/getSelected']
      console.log('selected is', selected)
      if (!selected) return null
      this.currentModel = getByRef(this.$store.state.eContentCreator.sections, selected)
      if (!this.currentModel) {
        // either the model was deleted before this call, or somthing else is calling this, nothing to do anyway
        return null
      }
      // the toolbar name is always 'xxxToolbar'
      return this.currentModel.constructor.name + 'Toolbar'
    }
  },
  methods: {
    addNewSection () {
      this.$store.commit('eContentCreator/pushComponent', { to: '', model: new Section() })
    },
    deleteSibling (ref, parentRef) {
      console.log('delete')
      console.log(ref, parentRef)
      // TO FUTURE ME: This method has flaw because of how `getByRef` & `findIndexOfRef` iterates.
      // They only iterate through to _value. but what if _value has { container }. The algorithm will need to change again.
      // This entire model has flaw considering the main objective is to simply produce html. vue-wysiwyg is kindof thing we should be looking at.
      if (!parentRef || !ref) return console.error('Either parentRef or ref is undefined')
      let container = getByRef(this.$store.state.eContentCreator.sections, parentRef)
      if (!container) return console.debug('Cannot find container by given parentRef')
      console.log('container is ')
      console.log(container)
      let index = findIndexOfRef(container._value, ref)
      if (index < 0) return console.debug('Cannot find index by given ref')
      this.$store.commit('eContentCreator/resetSelection')
      console.log(JSON.stringify(container, null, 2), index)
      container._value.splice(index, 1)
    }
  },
  mounted () {
    ToolbarEventBus.$on('Toolbar:deleteSelf', ({ ref, parentRef }) => {
      this.deleteSibling(ref, parentRef)
    })
  },
  components: {
    SectionToolbar,
    TabToolbar,
    ParagraphToolbar,
    GalleryToolbar
  }
}
</script>

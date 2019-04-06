<template lang="pug">
v-layout(column)
  v-layout(justify-end).white
    tooltipIconBtn(icon="mdi-content-save" tooltip="Save Webpage" @click="")
    tooltipIconBtn(icon="mdi-eraser" tooltip="Reset All" @click="")
    tooltipIconBtn(icon="mdi-plus" tooltip="Add Another Component" @click="addNewSection")
    tooltipIconBtn(icon="mdi-eye" tooltip="Preview" @click="")
  component(
    :is="currentToolbar" 
    :model="currentModel"
    ref="toolbar"
  )
</template>

<style lang="stylus" scoped>
</style>

<script>
import ParagraphToolbar from './toolbars/ParagraphToolbar'
import TabToolbar from './toolbars/TabToolbar'
import SectionToolbar from './toolbars/SectionToolbar'
import GalleryToolbar from './toolbars/GalleryToolbar'
import { getByRef } from './utils'
import Section from './models/Section'

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
      console.log(selected)
      if (!selected) return null
      this.currentModel = getByRef(this.$store.state.eContentCreator.sections, selected)
      if (!this.currentModel) console.error('No model with given ref found')
      return this.currentModel.constructor.name + 'Toolbar'
    }
  },
  methods: {
    addNewSection () {
      this.$store.commit('eContentCreator/pushComponent', { to: '', model: new Section() })
    }
  },
  components: {
    SectionToolbar,
    TabToolbar,
    ParagraphToolbar,
    GalleryToolbar
  }
}
</script>

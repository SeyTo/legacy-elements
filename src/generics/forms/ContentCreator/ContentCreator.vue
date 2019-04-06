<template lang="pug">
.content-creator
  Toolbar
  div(v-for="section in sections" :key="section.__meta.ref")
    component(
      :is="section.__meta.component" 
      :componentId="section.__meta.ref" 
      :ref="section.__meta.ref"
      :model="section"
    ) 
  pre {{ JSON.stringify($store.state.eContentCreator, null, 2) }}
</template>

<style lang="stylus" scoped>
</style>

<script>
import FormSection from './components/FormSection'
import FormParagraph from './components/FormParagraph'
import FormGallery from './components/FormGallery'
import FormTab from './components/FormTab'
import Toolbar from './Toolbar'
import Section from './models/Section'

export default {
  computed: {
    sections () {
      return this.$store.state.eContentCreator.sections
    }
  },
  mounted () {
    this.$store.commit('eContentCreator/pushComponent', { model: new Section() })
  },
  components: {
    FormSection,
    FormParagraph,
    FormGallery,
    FormTab,
    Toolbar
  }
}
</script>

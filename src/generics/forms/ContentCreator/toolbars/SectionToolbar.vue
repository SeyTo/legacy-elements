<template lang="pug">
v-layout(align-center).white.pl-3
  .subheading.grey3--text.accent--font Section 
  v-menu(bottom)
    template(v-slot:activator="{ on }")
      v-btn(icon v-on="on")
        v-icon mdi-plus
      // tooltipIconBtn(icon="mdi-plus" tooltip="Add Another Component" v-on="on")
    v-list
      v-list-tile(
        v-for="element in elements"
        :key="element.name"
        @click="createComponent(element)")
          v-icon(left) {{ element.icon }}
          | {{ element.name }}
</template>

<style lang="stylus" scoped>
</style>

<script>
import Creator from '../mixins/Creator'

export default {
  name: 'SectionToolbar',
  mixins: [ Creator ],
  props: {
    model: {}
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

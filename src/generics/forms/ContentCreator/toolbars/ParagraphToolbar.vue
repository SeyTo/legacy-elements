<template lang="pug">
v-layout(align-center).paragraph-toolbar.white.pl-3
  .subheading.grey3--text.accent--font Paragraph
  tooltipIconBtn(icon="mdi-pencil" tooltip="Edit Content in Editor" @click="openEditor")

  v-dialog(
    lazy scrollable fullscreen hide-overlay
    transition="dialog-bottom-transition"
    v-model="editor.visible"
  ).activity-dialog
    v-card
      v-toolbar
        v-btn(@click="editor.visible = false" icon)
          v-icon mdi-close
      v-card-text
        wysiwyg(v-model="editor.html" :options="editor.options")
      v-card-actions
        v-spacer
        v-btn(depressed @click="saveEditor")
          v-icon(left) mdi-content-save
          | Save
        v-btn(depressed @click="closeEditor")
          v-icon(left) mdi-close
          | Close
</template>

<style lang="stylus" scoped>
.paragraph-toolbar
  // height 80vh
</style>

<script>
import ToolbarEventBus from '../ToolbarEventBus.js'

export default {
  name: 'ParagraphToolbar',
  props: {
    // assiged main model from store
    model: {}
  },
  data () {
    return {
      editor: {
        visible: false,
        fullscreen: false,
        html: '',
        options: {
          hideModules: {
            image: true
          }
        }
      }
    }
  },
  computed: {},
  methods: {
    openEditor () {
      // console.log(this.model)
      this.editor.visible = true
    },
    saveEditor () {
      if (this.editor.html) {
        this.model._value = this.editor.html
      }
      this.closeEditor()
    },
    closeEditor () {
      this.editor.visible = false
    }
  },
  mounted () {
    ToolbarEventBus.$on('ParagraphToolbar:openEditor', (payload) => {
      this.openEditor(payload)
    })
  },
  beforeDestroy () {
    // ToolbarEventBus.$off('ParagraphToolbar:openEditor')
  },
  components: {}
}
</script>

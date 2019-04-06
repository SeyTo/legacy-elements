<template lang="pug">
v-layout
  | GalleryToolbar
  v-btn(@click="openFileExplorer" icon)
    v-icon mdi-plus

  // file uploader
  input(v-show="false" type="file" accept="image/*" @change="addImages" ref="inputImage" multiple)
</template>

<style lang="stylus" scoped>
</style>

<script>
import ToolbarEventBus from '../ToolbarEventBus'

export default {
  name: 'GalleryToolbar',
  props: {
    model: {}
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    addImages (e) {
      if (!e.target.files.length) return
      for (let file of e.target.files) {
        console.log(file)
        let fr = new FileReader()
        fr.readAsDataURL(file)
        fr.onload = e => {
          let src = e.target.result
          this.model._value.push({ file, src })
        }
      }
    },
    openFileExplorer () {
      if (this.$refs.inputImage) {
        this.$refs.inputImage.click()
      }
    }
  },
  components: {},
  mounted () {
    ToolbarEventBus.$on('GalleryToolbar:addImage', (payload) => {
      this.openFileExplorer()
    })
  }
}
</script>

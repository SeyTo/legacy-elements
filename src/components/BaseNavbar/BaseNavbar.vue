<template lang="pug">
v-toolbar(
  :app="true"
  :flat="flat"
  :scroll-off-screen="true"
  :absolute="false"
  height="72px"
  :color="baseColor"
)
  v-toolbar-items
    v-btn(
      flat icon large 
      v-if="lbtn_visible" 
      @click="lbtn_action"
    )
      v-icon {{ $store.state.basenavbar.lbtn.icon }}
  v-toolbar-title(@click="$emit('click:title')")
    img(v-if="titleIsImg" :src="logo")
    span(v-else) {{ logo }}

  v-spacer

  v-toolbar-items(:style="{ height: '42px'}")
    slot
  v-toolbar-items
    v-btn(
      v-if="rbtn_visible" 
      flat icon large 
      @click="rbtn_action"
    )
      v-icon {{ $store.state.basenavbar.rbtn.icon }}

</template>

<style lang="stylus" scoped>
.v-toolbar
  z-index 3 !important

  .v-toolbar__title
    height 100%
    img
      margin 16% 0 16% 0
      max-height 68%
    span
      height 72px
      text-decoration none
      line-height 72px
</style>

<script>
/**
 * Base navbar for all navbars that want to stay on top.
 * All actions and slotted views should be added to this navbar.
 * Dark
 */
import { mapState } from 'vuex'
import assert from 'assert'

export default {
  name: 'base-navbar',
  props: {
    titleSizeSensitive: {},
    title: {
      default: 'Logo'
    },
    titleAlternate: {
      default: 'Alter Logo'
    },
    titleIsImg: {}
  },
  data () {
    return {
      color: 'transparent',
      flat: true
    }
  },
  computed: {
    logo () {
      if (!this.titleSizeSensitive) return this.title
      if (this.$vuetify.breakpoint.smAndDown) return this.titleAlternate
      else return this.title
    },
    ...mapState({
      lbtn_visible: state => state.basenavbar.lbtn.visible,
      lbtn_action: state => state.basenavbar.lbtn.action,
      rbtn_visible: state => state.basenavbar.rbtn.visible,
      rbtn_action: state => state.basenavbar.rbtn.action
    }),
    baseColor: {
      set (v) {
        this.color = v
      },
      get () {
        return this.color
      }
    }
  },
  mounted () {
    assert(this.$store.state.basenavbar, 'Main plugin need to be inserted into vuex store.')
  },
  methods: {
    /**
     * When scroll a little make the navbar opaque.
     */
    handleScroll () {
      if (window.scrollY > 60) {
        this.baseColor = 'primary'
        this.flat = false
      } else if (window.scrollY < 60) {
        this.baseColor = 'transparent'
        this.flat = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

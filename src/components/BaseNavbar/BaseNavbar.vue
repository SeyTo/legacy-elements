<template lang="pug">
v-toolbar(
  :app="true"
  :flat="__flat"
  :absolute="false"
  :height="__height"
  :color="__baseColor"
  v-show="__visible"
).base-navbar
  v-toolbar-items
    v-btn(
      flat icon large 
      v-if="lbtn_visible" 
      @click="lbtn_action"
    )
      v-icon {{ lbtn_icon }}
  v-toolbar-title(@click="$emit('click:title')")
    img(
      v-if="titleIsImg" 
      :src="__logo"
      :style="{ padding: __padding }"
    )
    span(v-else).accent--font.accent--text {{ __logo }}

  v-spacer

  v-toolbar-items(:style="{ height: '42px'}")
    slot
  v-toolbar-items
    v-btn(
      v-if="rbtn_visible" 
      flat icon large 
      @click="rbtn_action"
    )
      v-icon {{ rbtn_icon }}

</template>

<script>
/**
 * Base navbar for all navbars that want to stay on top.
 * All actions and slotted views should be added to this navbar.
 * Dark
 */
import { mapState } from 'vuex'
import assert from 'assert'
import SizeWatcher from '@/mixins/extends/SizeWatcher'

export default {
  name: 'base-navbar',
  mixins: [SizeWatcher],
  props: {
    displayMode: {
      default: true
    },
    titleSizeSensitive: {},
    title: {
      default: 'Logo'
    },
    titleAlternate: {
      default: 'Alter Logo'
    },
    titleIsImg: {},
    flat: {}
  },
  data () {
    return {
      color: 'white',
      maxHeight: '92px',
      minHeight: '72px',
      maxPadding: '24px 0',
      minPadding: '16px 0'
    }
  },
  computed: {
    __flat () {
      if (this.displayMode) return true
      return !!this.flat
    },
    __height () {
      if (this.displayMode && !this.sizeHook) return this.maxHeight
      return this.minHeight
    },
    __padding () {
      if (this.__height === this.maxHeight) return this.maxPadding
      return this.minPadding
    },
    __scrollOffScreen () {
      if (this.displayMode) return false
      return !!this.scrollOffScreen
    },
    __logo () {
      if (!this.titleSizeSensitive) return this.title
      if (this.sizeHook) return this.titleAlternate
      else return this.title
    },
    ...mapState({
      lbtn_icon: state => state.eBaseNavbar.lbtn.icon,
      lbtn_visible: state => state.eBaseNavbar.lbtn.visible,
      lbtn_action: state => state.eBaseNavbar.lbtn.action,
      rbtn_icon: state => state.eBaseNavbar.rbtn.icon,
      rbtn_visible: state => state.eBaseNavbar.rbtn.visible,
      rbtn_action: state => state.eBaseNavbar.rbtn.action,
      __visible: state => state.eBaseNavbar.visible
    }),
    __baseColor: {
      set (v) {
        this.color = v
      },
      get () {
        return this.color
      }
    }
  },
  mounted () {
    assert(this.$store.state.eBaseNavbar, 'Main plugin need to be inserted into vuex store.')
    // if (this.transparentOnScroll === true) {
      // window.addEventListener('scroll', this.handleScroll)
    // }
  },
  methods: {
    /**
     * When scroll a little make the navbar opaque.
     */
    handleScroll () {
      if (window.scrollY > 60) {
        this.__baseColor = 'white'
        this.flat = false
      } else if (window.scrollY < 60) {
        this.__baseColor = 'transparent'
        this.flat = true
      }
    }
  },
  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

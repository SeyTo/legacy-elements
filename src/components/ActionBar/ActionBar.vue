<template lang="pug">
v-layout(
  :column="column"
).action-bar
  template(v-for="btn in buttons")
    v-tooltip(bottom)
      template(v-slot:activator="{ on }")
        v-btn(
          icon fab 
          :class="btnClasses"
          @click="emit(btn.name)"
          v-on="on"
        )
          v-icon {{ btn.icon || '?' }}
      span {{ btn.label || 'label' }}
  
</template>

<style lang="stylus" scoped>
.v-btn--tiny 
  height 26px !important
  width 26px !important
  .v-icon
    font-size 14px !important
</style>

<script>
export default {
  name: 'ActionBar',
  props: {
    column: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small',
      validator: v => ['tiny', 'small', 'large'].includes(v)
    },
    // each btn should have { icon, label, name }
    buttons: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      return {
      }
    },
    btnClasses () {
      return {
        'v-btn--tiny': this.size === 'tiny',
        'v-btn--small': this.size === 'small',
        'ma-1': this.size === 'tiny' || this.size === 'small'
      }
    }
  },
  methods: {
    emit (name) {
      if (!name) return
      this.$emit('click:' + name)
    }
  },
  components: {}
}
</script>

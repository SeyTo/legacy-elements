<template lang="pug">
div(
  :class="classes"
  :style="styles"
).basic-header.border-radius.pa-3
  v-container(style={ height: '100%', display: 'flex' } align-end).pa-0.text-xs-left
    .headers(@click="$emit('click:header')").accent--font
      .header__title(
        :class="headerClasses"
        v-html="title"
      ).display-1.accent--font
      .header__subtitle(
        v-if="!sm"
        :class="subtitleClasses"
        v-html="subtitle"
      ).display-2.accent--font
</template>

<script>
export default {
  name: 'BasicHeader',
  props: {
    sm: { },
    md: { },
    lg: { },
    title: {
      default: ''
    },
    subtitle: { },
    url: { },
    colorClass: {
      default: 'primary'
    },
    textColorClass: {
      default: 'white--text'
    },
    noOverlay: {
      default: false
    }
  },
  computed: {
    classes () {
      const c = {
        'large': !!this.lg,
        'medium': !!this.md,
        'small': !!this.sm,
        'secondary': !this.url && !this.colorClass
      }
      if (this.colorClass) c[this.colorClass] = true

      return c
    },
    styles () {
      if (this.url) {
        return {
          background: 'url(' + this.url + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      } else { return {} }
    },
    headerClasses () {
      const c = {
        'font-weight-bold': !!this.md || !!this.sm,
        'overlay': !this.noOverlay
      }
      if (this.textColorClass) c[this.textColorClass] = true
      return c
    },
    subtitleClasses () {
      const c = {
        'font-weight-bold': !!this.lg,
        'overlay': !this.noOverlay
      }
      if (this.textColorClass) c[this.textColorClass] = true
      return c
    }
  }
}
</script>

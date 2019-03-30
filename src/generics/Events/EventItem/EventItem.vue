<template lang="pug">
mixin ImgSection
  v-flex(
    :md6="!noImg" :md2="noImg" 
    :style="{ 'order': (reverse? 1: 0) }"
  ).img__section
    div(
      v-if="noImg" 
      :style="{ backgroundColor: image }"
    ).color__div
    div(
      v-else 
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ).img__div

mixin TextSection
  v-flex(
    :md6="!noImg" :md10="noImg" 
    :style="{ 'order': (reverse? 0: 1) }"
  ).text__section.pa-4
    v-layout(justify-space-between).title.accent--font
      div(:style="{ float: 'left' }") {{ event.name }}
      div.date.grey3--text.body-2 {{ event.date }}
    v-divider.my-2
    v-flex.excerpt.body-1.mb-2 
      | {{ event.excerpt }}

v-card(
  hover
  :class="{ 'mini-card': mini }"
).event-item
  v-layout(
    :style="{ flexWrap: (mini? 'nowrap' : (!reverse? 'wrap': 'wrap-reverse') )}"
  )
    +ImgSection
    +TextSection
</template>

<style lang="stylus" scoped>
.mini-card
  .text__section
    padding 16px !important
    .excerpt
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
</style>

<script>
import generateRandomColor from '@/utils/generateRandomColor'

export default {
  name: 'event-item',
  props: {
    // should be { name, excerpt, date }
    event: Object,
    reverse: {
      default: false
    },
    // creates a mini version of event card
    mini: String
  },
  data () {
    return {
      noImg: false
    }
  },
  computed: {
    image () {
      if (!this.event.imgUrl) {
        this.noImg = true
        return generateRandomColor()
      }
      this.noImg = false
      return require('@/assets/logo-sm.svg')
    }
  }
}
</script>

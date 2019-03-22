<template lang="pug">
mixin ImgSection
  v-flex(
    :md6="!noImg" :md4="noImg" 
    :style="{ 'order': (reverse? 1: 0) }"
  ).img__section
    div(
      v-if="noImg" 
      :style="{ backgroundColor: image }"
    ).color__div
      slot(name="extra")
    div(
      v-else 
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ).img__div
      slot(name="extra")

mixin TextSection
  v-flex(
    :md6="!noImg" :md8="noImg" 
    :style="{ 'order': (reverse? 0: 1) }"
  ).text__section.pa-4
    .title.mb-3 {{ event.name }}
    .excerpt.body-1.mb-2 {{ event.excerpt }}
    .date.body-2 {{ event.date }}

v-layout(
  :style="{ flexWrap: (!reverse? 'wrap': 'wrap-reverse' )}"
  @mouseover="highlighted = true"
  @mouseleave="highlighted = false"
  :class="{ 'elevation-5': highlighted, 'elevation-19': !highlighted }"
  @click="$emit('click')"
).event-item.my-3.background
  +ImgSection
  +TextSection
</template>

<script>
import generateRandomColor from '@/utils/generateRandomColor'

export default {
  name: 'event-item',
  props: {
    // should be { name, excerpt, date }
    event: Object,
    reverse: {
      default: false
    }
  },
  data () {
    return {
      highlighted: false,
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
      return require('@/assets/logo.png')
    }
  }
}
</script>

<template lang="pug">
include ../../../mixins/pug/cloud-single.pug

v-card(
  hover
  @mouseover="highlighted = true"
  @mouseleave="highlighted = false"
  :class="{ 'elevation-5': highlighted, 'elevation-19': !highlighted }"
).course-item.py-3
  .cloud__contain
    +CloudDiv('grey', '154px', '400px', '-30px', '10px', '13deg', 0, '52px')
  // TODO why is card not registering clicks??
  v-layout(
    column justify-space-between 
    @click="$emit('click')"
  )
    v-card-title
      span(v-html="course.header" style={ 'z-index': 1 }).headline.font-weight-bold
    v-card-text(style={ 'z-index': 1 }).body-1 {{ course.excerpt }}
</template>

<script>
export default {
  name: 'course-card',
  props: {
    // must have { header, excerpt }
    course: Object
  },
  data () {
    return {
      highlighted: false
    }
  }
}
</script>

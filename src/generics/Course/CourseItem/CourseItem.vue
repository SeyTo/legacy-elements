<template lang="pug">
v-card(
  hover
).course-item
  v-card-title.secondary.white--text
    v-layout(column align-start)
      .headline.font-weight-bold.accent--font.mb-2 {{ course.header }}
  v-card-text.grey4--text.body-1.text-xs-left.pa-3
    | {{ course.excerpt }}
  v-card-actions
    slot
</template>

<script>
export default {
  name: 'course-card',
  props: {
    // must have { header, excerpt }
    course: Object
  }
}
</script>

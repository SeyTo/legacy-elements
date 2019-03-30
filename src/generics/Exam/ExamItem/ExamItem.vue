<template lang="pug">
v-card(
  hover
).exam-item
  v-card-title.secondary.white--text
    v-layout(column align-start)
      .headline.font-weight-bold.accent--font.mb-2 {{ exam.header }}
      .body-2 In {{ exam.startDate }}
  v-card-text.grey4--text.body-1.text-xs-left.pa-3
    | {{ exam.excerpt }}
  v-card-actions
    slot
</template>

<script>
export default {
  name: 'ExamItem',
  props: {
    exam: Object
  }
}
</script>

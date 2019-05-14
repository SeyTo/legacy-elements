<template lang="pug">
v-layout(align-center).white
  .title.mx-3 {{ title }}
  v-spacer
  v-btn(
    icon
    @click='$emit("click:close")'
  )
    v-icon mdi-close
</template>

<script>
export default {
  name: 'TitleBar',
  props: [ 'title' ]
}
</script>

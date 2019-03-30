<template lang="pug">
.cloud-div
  template(v-for="cloud in clouds")  
    .cloud(
      :style="{ ...cloud.styles }"
    )
</template>

<style lang="stylus" scoped>
</style>

<script>
import SizeWatcher from '@/mixins/extends/SizeWatcher'

export default {
  name: 'Cloud',
  mixins: [ SizeWatcher ],
  props: {
    clouds: {
      type: Array,
      default: () => []
    }
  }
}
</script>

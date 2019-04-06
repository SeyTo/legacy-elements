<template lang="pug">
v-tooltip(bottom)
  template(v-slot:activator="{ on }")
    v-btn(@click="$emit('click')" icon v-on="on")
      v-icon {{ icon }}
  span {{ tooltip }}
</template>

<script>
export default {
  props: [ 'icon', 'tooltip' ]
}
</script>

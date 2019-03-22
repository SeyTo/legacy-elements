<template lang="pug">
// model futhurs this's own model event to the dialog's model
v-dialog(
  :lazy="lazy"
  :value="value"
  @input="$emit('input', $event)"
  width="500px"
  :fullscreen="$vuetify.breakpoint.xsOnly"
  scrollable).activity-dialog
  v-card
    v-toolbar(v-if="$vuetify.breakpoint.xsOnly || title" dense flat)
      .title.accent--font.info--text {{ title }}
      v-btn(absolute icon right @click="$emit('input', false)").my-0
        v-icon mdi-close
    v-card-text.pa-0
      slot
        | ---
</template>

<script>
/**
 * Used for dialogs with large contents. Can turn into fullscreen when small sized.
 * Use default slot to put main content.
 */
export default {
  name: 'act-dialog',
  props: {
    value: {
      default: false
    },
    lazy: {
      default: true
    },
    title: {
      default: ''
    }
  }
}
</script>

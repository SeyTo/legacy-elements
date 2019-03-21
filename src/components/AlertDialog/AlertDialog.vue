<template lang="pug">
v-dialog(
  :lazy="true"
  :value="value"
  @input="$emit('input', $event)"
  :width="width"
).alert-dialog
  v-card.pa-3
    v-card-text.subheading.pb-3
      span(v-html="message")
    v-card-actions
      v-spacer
      template(v-for="btn, i in buttons")
        v-btn(
          flat
          @click="btnAction(btn)"
          :class="btn.class"
        ) {{ btn.label }}
</template>

<script>
export default {
  name: 'c-dialog',
  props: {
    value: {
      default: false
    },
    // should contain atleast { name, label }, optionally { class, action }
    buttons: {
      default: () => []
    },
    message: {
      default: '??'
    },
    width: {
      default: '500px'
    }
  },
  methods: {
    btnAction (btn) {
      if (btn.action) return btn.action()
      this.$emit('click:' + btn.name, btn)
    }
  }
}
</script>

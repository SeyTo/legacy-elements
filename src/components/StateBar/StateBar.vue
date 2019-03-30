<template lang="pug">
v-snackbar(
  v-model="visible"
  :timeout="0"
  auto-height
  bottom
  vertical
  multi-line
  color="white"
).state-bar
  .msg__container(v-for="msg in msgs" :key="msg.msg" :style="{ color: msg.color }")
    v-icon(:style="{ color: msg.color }") {{ msg.icon }}
    .msg.pl-2 {{ msg.msg }}
  v-btn(@click="close" flat).black--text Close
</template>

<script>
export default {
  name: 'StateBar',
  computed: {
    visible: {
      set (v) {
        this.$store.state.eStateMsg.visible = v
      },
      get () {
        return this.$store.state.eStateMsg.visible
      }
    },
    msgs () {
      return this.$store.getters['eStateMsg/msgs']
    }
  },
  methods: {
    /**
     * Close all timeouts and erase all messages.
     */
    close () {
      this.$store.commit('eStateMsg/shutdown')
      this.visible = false
    }
  }
}
</script>

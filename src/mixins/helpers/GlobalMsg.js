export default {
  methods: {
    // Queuing messages
    queueStateMsg ({ msg, type = 'info', timeout = 4000 }) {
      this.$store.commit('eStateMsg/queue', { msg, type, timeout })
    },

    showStateMsg ({ msg, type = 'info', timeout = 4000 }) {
      this.$store.commit('eStateMsg/next', { msg, type, timeout })
    },

    // Dialog messages
    /**
     * @param { String } message first arg
     * @param { [{ label, class, name, action }] } buttons
     */
    showDialog (message, type = 'info', buttons) {
      this.$store.commit('eDialogMsg/showDialog', { message, type, buttons })
    },
    hideDialog () {
      this.$store.commit('eDialogMsg/hideAlertMsg')
    },
    resetDialog () {
      this.$store.commit('eDialogMsg/resetDialogButtons')
    }
  }
}

export default {
  methods: {
    showStateMsg (msg) {
      this.$store.commit('ele-app/showStateMsg', msg)
    },
    /**
     * @param { String } message first arg
     * @param { Object } buttons second arg and so on
     */
    showAlertMsg (message, buttons) {
      this.$store.commit('ele-app/showAlertMsg', { message, buttons })
    },
    hideAlertMsg () {
      this.$store.commit('ele-app/hideAlertMsg')
    }
  }
}

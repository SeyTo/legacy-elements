/**
 * Routes to certain route and also assures that back button is enabled.
 */
export default {
  methods: {
    routeTo (name, param) {
      this.$router.push({ name, param })
      this.$store.commit('basenavbar/setReturnable', {
        visible: true,
        router: this.$router
      })
    }
  }
}

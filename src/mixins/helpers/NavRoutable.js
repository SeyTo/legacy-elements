/**
 * Routes to certain route and also assures that back button is enabled.
 */
export default {
  methods: {
    routeTo (name, params, query) {
      this.$router.push({ name, params, query }, () => {
        // on complete
        this.$store.commit('eBaseNavbar/setReturnable', {
          visible: true,
          router: this.$router
        })
      })
    }
  }
}

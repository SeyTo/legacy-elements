/**
 * Routes to certain route and also assures that back button is enabled.
 */
export default {
  methods: {
    routeTo (name, param) {
      this.$router.push({ name, param }, () => {
        // on complete
        this.$store.commit('eBaseNavbar/setReturnable', {
          visible: true,
          router: this.$router
        })
      })
    }
  }
}

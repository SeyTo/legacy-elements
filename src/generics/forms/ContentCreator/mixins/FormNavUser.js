/**
 * Helps with numerous buttons that formnav bar can have.
 *
 */
export default {
  data () {
    return {
      buttons: []
    }
  },
  computed: {
    listeners () {
      const attuned = {}
      this.buttons.forEach(v => {
        attuned['click:' + v.name] = () => {
          this.$emit('click:' + v.name)
        }
      })
      return Object.assign(
        {},
        this.$listeners,
        attuned
      )
    }
  }
}

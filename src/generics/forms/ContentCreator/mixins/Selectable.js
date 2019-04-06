/**
 * Makes component selectable with given methods.
 * The template must implement a @click="selectThis"
 * Visual changes can be made with background changes.
 */
export default {
  computed: {
    isSelected () {
      return this.$store.getters['eContentCreator/getSelected'] === this.componentId
    }
  },
  methods: {
    selectThis () {
      if (this.$store.getters['eContentCreator/getSelected'] === this.componentId) return
      this.$store.commit('eContentCreator/setSelected', this.componentId)
    }
  }
}

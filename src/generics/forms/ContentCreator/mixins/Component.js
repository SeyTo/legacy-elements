export default {
  props: {
    componentId: {
      required: true,
      type: String
    },
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getRef () {
      return this.componentId
    }
  }
}

import ToolbarEventBus from '../ToolbarEventBus'

export default {
  methods: {
    deleteSelf () {
      ToolbarEventBus.$emit(
        'Toolbar:deleteSelf',
        {
          ref: this.getRef(),
          parentRef: this.getParentRef ? this.getParentRef() : null
        }
      )
    }
  }
}

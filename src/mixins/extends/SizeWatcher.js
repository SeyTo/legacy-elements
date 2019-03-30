/**
 * For components that would change state when size changes. The size
 * changing would be determined by the container component.
 * @return { Boolean } must get boolean. False -> default, True -> Size changed
 */
export default {
  props: {
    sizeHook: {
      default: false
    }
  }
}

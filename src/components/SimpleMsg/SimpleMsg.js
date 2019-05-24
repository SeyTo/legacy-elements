export default {
  props: {
    isError: { default: false },
    msg: { default: 'Msg Here' }
  },
  data () {
    return {
      classes: {
        'simple-msg': true,
        'my-2': true,
        'text-xs-center': true,
        'accent--font': true,
        'body-2': true
      }
    }
  },
  render (h) {
    return h(
      'div',
      {
        class: {
          'error-text': this.isError,
          'font-weight-bold': this.isError,
          'grey3--text': !this.isError,
          ...this.classes
        }
      },
      this.msg
    )
  }
}

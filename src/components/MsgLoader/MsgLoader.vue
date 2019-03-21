<template lang="pug">
.msg-loader
  .msg(
    v-if="msg"
    :class="msgClasses"
  ) {{ msg }}
  v-progress-linear(
    v-if="isLoading" 
    :indeterminate="true"
  ).ma-0
</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
  name: 'MsgLoader',
  data () {
    return {
      isLoading: false,
      msg: '',
      msgClasses: { }
    }
  },
  methods: {
    /**
     * @param { String, Object } message and { type: 'warn/error/normal' }
     */
    startLoading (msg, opt) {
      this.isLoading = true
      this.msg = msg
      this.setMsgType(opt.type)
    },
    stopLoading (msg, opt) {
      this.isLoading = false
      if (msg) this.msg = msg
      this.setMsgType(opt.type)
    },
    setMsgType (type) {
      switch (type) {
        case 'warn':
          Object.assign(this.msgClasses, { 'warn--text': true, 'font-weight-bold': true })
          break
        case 'error':
          Object.assign(this.msgClasses, { 'error--text': true, 'font-weight-bold': true })
          break
        default:
          this.msgClasses = {}
      }
    }
  }
}
</script>

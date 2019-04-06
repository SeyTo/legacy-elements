import Vue from 'vue'

Vue.directive('test', {
  inserted: function (el, binding, vnode) {
    console.log(el)
    console.log(binding)
    console.log(vnode)
  }
})

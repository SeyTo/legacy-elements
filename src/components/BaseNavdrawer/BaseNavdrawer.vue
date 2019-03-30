<template lang="pug">
v-navigation-drawer(
  v-if="!disabled"
  app fixed
  v-bind="navProps"
  :value="value"
  @input="$emit('input', $event)"
).base-navdrawer
  v-toolbar(
    @click="$emit('input', false)" 
    flat 
    height="72"
  ).transparent
    v-btn(icon left fixed).ma-2
      v-icon mdi mdi-arrow-left
  slot
</template>

<script>
import forEach from 'lodash/forEach'

const navPropsDefaults = {
  mobileBreakPoint: '1200',
  disableResizeWatcher: false,
  disableRouteWatcher: false
}

export default {
  name: 'base-navdrawer',
  props: {
    navProps: {
      default: () => {
        return navPropsDefaults
      },
      validator: v => {
        if (typeof v !== 'object') return false
        // also set default properties, if not already present
        forEach(navPropsDefaults, (vl, k) => {
          if (!v.hasOwnProperty(k)) v[k] = vl
        })
        return true
      }
    },
    disabled: { default: false },
    value: { default: false }
  }
}
</script>

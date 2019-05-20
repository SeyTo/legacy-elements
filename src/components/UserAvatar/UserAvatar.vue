<template lang="pug">
.user-avatar(
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  :style="{ height: getSize, width: getSize, minHeight: getSize, minWidth: getSize }"
).grey1
  img(v-if='cover' :src="cover")
  svg(v-else :style="{ width: getSize, height: getSize, padding: '8px' }" viewBox="0 0 24 24")
    path(fill="#b3b3b3" d="M21,13A9,9 0 0,1 12,22A9,9 0 0,1 3,13L3.03,4.43C5.68,2.88 8.76,2 12.05,2C15.3,2 18.36,2.87 21,4.38V13M13,19.93C16.39,19.44 19,16.5 19,13V5.59C16.9,4.57 14.54,4 12.05,4C9.5,4 7.08,4.6 4.94,5.66L5,13C5,16.5 7.63,19.44 11,19.93V18H13V19.93M11,16H8L6,13L9,14H10L11,13H13L14,14H15L18,13L16,16H13L12,15L11,16M6,9.03C6.64,8.4 7.5,8.05 8.5,8.05C9.45,8.05 10.34,8.4 11,9.03C10.34,9.65 9.45,10 8.5,10C7.5,10 6.64,9.65 6,9.03M13,9.03C13.64,8.4 14.5,8.05 15.5,8.05C16.45,8.05 17.34,8.4 18,9.03C17.34,9.65 16.45,10 15.5,10C14.5,10 13.64,9.65 13,9.03Z")
  v-slide-y-transition(mode="out-in")
    v-layout(v-if="hover && !noedit" column nowrap justify-center align-center).btn-bar
      v-btn(fab icon @click="$refs.inputAvatar.click()").accent
        v-icon mdi-pencil
      input(v-show="false" type="file" accept="image/*" @change="changeAvatar" ref="inputAvatar")
</template>

<script>
export default {
  name: 'user-avatar',
  props: {
    cover: { type: String, default: null },
    /**
     * Set non editable avatar.
     */
    noedit: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: v => ['small', 'medium', 'large'].includes(v)
    }
  },
  data () {
    return {
      hover: false,
      dialog: {
        visible: false
      },
      avatar: {
        sizes: {
          small: '32px',
          medium: '64px',
          large: '124px'
        }
      }
    }
  },
  computed: {
    getSize () {
      return this.avatar.sizes[this.size]
    }
  },
  methods: {
    changeAvatar (e) {
      if (this.noedit) return
      if (!e.target.files.length) return

      let file = e.target.files[0]
      let fr = new FileReader()

      fr.readAsDataURL(file)
      fr.onload = e => {
        let src = e.target.result
        this.$emit('update:avatar', { src, file })
        this.cover = src
      }
    }
  }
}
</script>

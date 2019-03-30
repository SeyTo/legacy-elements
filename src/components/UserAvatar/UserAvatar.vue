<template lang="pug">
.user-avatar(
  @mouseover="hover = true" 
  @mouseleave="hover = false"
  :style="{ height: getSize, width: getSize, minHeight: getSize, minWidth: getSize }"
)
  img(:src="cover")
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
    cover: {
      default: require('@/assets/logo-sm.svg')
    },
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

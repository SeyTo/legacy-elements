<template lang="pug">
v-list(
  two-line
  :dense="dense"
).avatar-list.normal--font.pa-0
  v-divider
  v-list-tile(
    v-for="(model, index) in models"
    :key="index"
    avatar
    @click="$emit('click:item', model)"
    style={ borderBottom: "1px solid #dbdbdb" }
  ).avatar-list__tile
    v-list-tile-avatar
      img(v-if="model.avatar" :src="model.avatar")
      img(v-else src="../../assets/logo.png")
    v-list-tile-content
      v-list-tile-title
        slot(name="title" :model="model")
      v-list-tile-sub-title
        slot(name="subtitle" :model="model")
    div.right
      slot(name="actionbar" :model="model")
</template>

<script>
export default {
  name: 'AvatarList',
  props: {
    // requires each to have { avatar } & from slotted scope { title, subtitle, actionbar } all returns single model as argument.
    models: {
      type: Array,
      default: () => []
    },
    dense: {
      default: false
    }
  }
}
</script>

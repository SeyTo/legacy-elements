<template lang="pug">
  #app
    v-app
      countdown(ref="ctn")
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$refs.ctn.startTimer(10, 10, 10)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template lang="pug">
  #app
    v-app
      v-content
        base-navbar(
          :title="'Paradise Institutes & Self Study Center Pvt. Ltd'"
          :title-alternate="'Paradise'"
          title-size-sensitive
        )
        base-navdrawer(v-model="navdrawer")

        activity-dialog(v-model="dialog" title="Testing title")
          | Hello Activity Dialog
          v-card-actions
            v-btn Testing

        avatar-list(:models="avatarlist")
          template(v-slot:title="{ model }")
            | {{ model.first }} {{ model.last }}
          template(v-slot:subtitle="{ model }")
            | {{ model.sub }}


        v-btn(@click="() => { dialog = true }") Open Dialog

        alert-dialog(v-model="alert" message="Testing title" :buttons="[{ name: 'test', label: 'nbame', action: () => {} }]")
          | 
        v-btn(@click="() => { alert = true }") Open Alert

        v-layout(row)
          v-flex(:style={ height: '130px' }).primary
            | primary
          v-flex(:style={ height: '130px' }).secondary
            | secondary
          v-flex(:style={ height: '130px' }).accent
            | accent
          v-flex(:style={ height: '130px' }).info
            | info
          v-flex(:style={ height: '130px' }).error
            | error
          v-flex(:style={ height: '130px' }).success
            | success
          v-flex(:style={ height: '130px' }).warning
            | warning

        v-layout(row)
          course-item(:course="course").ma-2
          course-item(:course="course").ma-2
          course-item(:course="course").ma-2

        user-avatar

        event-item(:event="eventA" :reverse="true")
          template(v-slot:extra="") 
            v-btn(style={ position: "absolute", bottom: 0, right: 0 }) Test
        event-item(:event="eventB" :reverse="false")
          template(v-slot:extra="") 
            v-btn Test

        speed-dial(
          bottom
          right
          :buttons="buttons"
        ).fixed
        | {{ $store.state }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dialog: false,
      alert: false,
      buttons: [
        { icon: 'mdi-close', text: 'testing' }, { icon: 'mdi-close', text: 'testing' }
      ],
      icontitle: require('@/assets/logo.png'),
      navdrawer: false,
      eventA: {
        imgUrl: require('@/assets/logo.png'),
        name: 'Test Name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2016-2-2'
      },
      eventB: {
        name: 'Test Name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2016-2-2'
      },
      course: {
        header: 'Example Header',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      avatarlist: [
        { first: 'Hello', last: 'Name', sub: 'Visitor' },
        { first: 'Hello', last: 'Name', sub: 'Visitor' },
        { first: 'Hello', last: 'Name', sub: 'Visitor' }
      ]
    }
  },
  mounted () {
    this.$store.commit('basenavbar/showrbtn')
    this.$store.commit('basenavbar/setlbtn', { visible: true, action: () => { this.navdrawer = !this.navdrawer } })
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

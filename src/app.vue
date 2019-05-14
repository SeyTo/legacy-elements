<template lang="pug">
  mixin ContentCreator
    v-container
      // ContentCreator

  #app
    v-app
      v-content
        baseNavbar(
          :title="logoLg"
          :title-alternate="logoSm"
          title-size-sensitive
          title-is-img
          :display-mode="true"
          :flat="false"
          :sizeHook="$vuetify.breakpoint.smAndDown"
        )
          v-btn(flat)  Testing
          v-btn(flat)  Testing
          v-btn(flat)  Testing

        baseNavdrawer(
          v-model="navdrawer"
          :navProps="{ dark: true, right: true }"
        )

        basicHeader(lg title="This is a basic header" subtitle="Subtitle" :url="image")

        basicHeader(md noOverlay title="This is a basic header" colorClass="secondary").my-2
        v-container

          EditableList(:editable='true' :items='editableList.items' @click:addNewItem='addEditableItem')
          basicHeader(sm noOverlay title="This is a basic header" textColorClass="warning--text")

          div(
            :style="{ position: 'relative' }"
          )
            cloud(
              :clouds="clouds"
              :style="{ position: 'absolute' }"
            )

          activityDialog(v-model="dialog" title="Testing title")
            | Hello Activity Dialog
            v-card-actions
              v-btn Testing

          avatarList(:models="avatarlist")
            template(v-slot:title="{ model }")
              | {{ model.first }} {{ model.last }}
            template(v-slot:subtitle="{ model }")
              | {{ model.sub }}

          stateBar

          v-btn(@click="openStateMsg") Open StateMsg

          v-btn(@click="() => { dialog = true }") Open Dialog

          alertDialog(
            v-model="$store.state.eDialogMsg.visible" 
            :message="$store.state.eDialogMsg.message" 
            :buttons="$store.state.eDialogMsg.buttons"
            :icon="$store.state.eDialogMsg.icon"
            :color="$store.state.eDialogMsg.color"
          )

          v-btn(@click="openAlert") Open Alert

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
            courseItem(:course="course").ma-2
            courseItem(:course="course").ma-2
            courseItem(:course="course").ma-2

          v-layout(row)
            v-flex
              examItem(:exam="exam").ma-2
            v-flex
              examItem(:exam="exam").ma-2
            v-flex
              examItem(:exam="exam").ma-2

          userAvatar

          eventItem(:event="eventA" :reverse="true").ma-2
            template(v-slot:extra="") 
              v-btn(style={ position: "absolute", bottom: 0, right: 0 }) Test
          eventItem(:event="eventB" :reverse="false").ma-2
            template(v-slot:extra="") 
              v-btn Test
          v-layout(wrap)
            v-flex(md6)
              eventItem(:event="eventB" :reverse="false" mini).ma-2
                template(v-slot:extra="") 
                  v-btn Test
            v-flex(md6)
              eventItem(:event="eventB" :reverse="false" mini).ma-2
                template(v-slot:extra="") 

          // password-form

        speedDial(
          bottom
          right
          :buttons="buttons"
        ).fixed
</template>

<style lang="stylus" scoped>
</style>

<script>
import GlobalMsg from '@/mixins/helpers/GlobalMsg.js'

export default {
  name: 'app',
  mixins: [GlobalMsg],
  data () {
    return {
      snackbar: true,
      dialog: false,
      alert: false,
      buttons: [
        { icon: 'mdi-close', text: 'testing' }, { icon: 'mdi-close', text: 'testing' }
      ],
      icontitle: require('@/assets/logo-sm.svg'),
      navdrawer: false,
      image: require('@/assets/test.jpg'),
      eventA: {
        imgUrl: require('@/assets/logo-lg.svg'),
        name: 'Test Name ,Test NameTest NameTest',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2016-2-2'
      },
      eventB: {
        name: 'Test Name',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2016-2-2'
      },
      course: {
        header: 'Long Long Long Example Header',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      exam: {
        header: 'Header For Exam',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        startDate: '2016-2-2'
      },
      avatarlist: [
        { first: 'Hello', last: 'Name', sub: 'Visitor' },
        { first: 'Hello', last: 'Name', sub: 'Visitor' },
        { first: 'Hello', last: 'Name', sub: 'Visitor' }
      ],
      logoLg: require('@/assets/logo-lg.svg'),
      logoSm: require('@/assets/logo-sm.svg'),
      clouds: [
        {
          key: 'upper',
          styles: {
            height: '20px',
            width: '30px',
            backgroundColor: 'green',
            transform: 'rotate(45deg)',
            top: 30,
            left: 30
          }
        },
        {
          key: 'downer',
          styles: {
            height: '40px',
            width: '50px',
            transform: 'rotate(-45deg)',
            top: 30,
            left: 30,
            backgroundColor: 'blue'
          }
        }
      ],
      sections: [],
      editableList: {
        items: [
          {
            name: 'itema',
            component: 'v-checkbox',
            props: {
              label: 'Item b'
            },
            events: {
              click: (event) => {
                console.log(event)
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    openStateMsg () {
      this.$store.commit('eStateMsg/queue', { msg: 'Hello 10000', type: 'success', timeout: 30000 })
      this.$store.commit('eStateMsg/queue', { msg: 'Hello 5000', type: 'error', timeout: 5000 })
      this.$store.commit('eStateMsg/queue', { msg: 'Hello 7000', type: 'info', timeout: 7000 })
      this.$store.dispatch('eStateMsg/next')
      setTimeout(() => {
        this.$store.commit('eStateMsg/queue', { msg: 'Hello NEW 7000', type: 'info', timeout: 45000 })
        this.$store.dispatch('eStateMsg/next')
      }, 3000)
    },
    openAlert () {
      this.showDialog('Hello this is msg')
    },
    addNewSection () {
      this.sections.push('FormSection')
    },
    clearAllSections () {
      this.sections = []
    },
    saveAllContent () {
    },
    previewMode () {},
    removeSection (index) {
      console.log(index)
      this.sections.splice(index, 1)
    },
    selectedThis (index) {
      console.log(index)
    },
    addEditableItem () {
      this.editableList.items.push({
        name: 'itema',
        component: 'v-checkbox',
        props: {
          label: 'Item b'
        }
      })
    }
  },
  mounted () {
    this.$store.commit('eBaseNavbar/showrbtn')
    this.$store.commit('eBaseNavbar/setlbtn', { visible: true, action: () => { this.navdrawer = !this.navdrawer } })
    this.resetDialog()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

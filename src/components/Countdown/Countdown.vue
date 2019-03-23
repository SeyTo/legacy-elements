<template lang="pug">
div.countdown
  div(v-if="title").text-xs-center.title {{ title }}
  v-layout(nowrap).pa-2.title.font-weight-thin
    v-flex.time-unit {{ countdown.hrs }} 
      .body-2 hrs
    v-flex(v-if="!noMin").time-unit {{ countdown.min }} 
      .body-2 min
    v-flex(v-if="!noSec && !noMin").time-unit {{ countdown.sec }} 
      .body-2 sec
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    title: {
      type: String
    },
    // interval will only update in one hour
    noMin: {
      type: Boolean,
      default: false
    },
    // interval will only update in one minute
    noSec: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      countdown: {
        timer: null,
        cancel: false,
        hr: 0,
        min: 0,
        sec: 0
      }
    }
  },
  methods: {
    startTimer (hrs, min, sec) {
      this.countdown.timer = new Promise(resolve => {
        const setTimer = (hrs, min, sec) => {
          this.countdown.hrs = hrs
          this.countdown.min = min
          this.countdown.sec = sec
        }
        setTimer(hrs, min, sec)

        const decreaseHour = () => {
          hrs -= 1
          if (hrs < 1) {
            hrs = 0
            min = 0
            sec = 0
            setTimer(hrs, min, sec)
            resolve()
          }
        }

        const decreaseMin = () => {
          min -= 1
          if (min < 1) {
            min = 60
            decreaseHour()
          }
        }

        const decreaseSec = () => {
          sec -= 1
          if (sec < 1) {
            sec = 60
            decreaseMin()
          }
        }

        const then = () => {
          if (!this.countdown.cancel) resolve()
          setTimer(hrs, min, sec)
        }

        if (this.noSec === true) {
          setInterval(() => {
            decreaseMin()
            then()
          }, 60 * 1000)
        } else if (this.noMin === true) {
          setInterval(() => {
            decreaseHour()
            then()
          }, 60 * 60 * 1000)
        } else {
          setInterval(() => {
            decreaseSec()
            then()
          }, 1000)
        }
      })
    },
    stopTimer () {
      this.countdown.cancel = !this.coundown.cancel
    },
    /**
     * Sync with external api which must return { hrs, min, sec } at continuously at given interval until time runs out.
     */
    startSync (callAPI, interval) {
      // TODO
    },
    stopSync () {
      // TODO
    }
  }
}
</script>

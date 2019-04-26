import { iconOfType, colorOfType } from '@/utils/constants.js'

export default {
  namespaced: true,
  state: {
    parcels: [],
    visible: false,
    defaults: {
      timeout: 6000,
      type: 'normal'
    }
  },

  getters: {
    /**
     * Gets filtered messages that are not null.
     */
    msgs (state) {
      return state.parcels
          .filter(p => p !== null)
          .map(parcel => {
            return {
              msg: parcel.msg,
              icon: parcel.icon,
              color: parcel.color
            }
          })
    }
  },

  mutations: {
    /**
     * Queue messages. But will not yet be shown. Until `next` is called.
     */
    queue (state, { msg, type, timeout }) {
      let _type = type || state.defaults.type
      let _timeout = timeout || state.defaults.timeout
      let color = colorOfType[type] || colorOfType['default']
      let icon = iconOfType[type] || ''
      state.parcels.push({ msg, type: _type, timeout: _timeout, color, icon })
    },

    /**
     * Closes self's timer and assigns null to itself.
     */
    close (state, index) {
      const parcel = state.parcels[index]
      if (parcel === null) {
        // exceptional case, very unlikely
        console.log('an undefined parcel is passed' + index)
        return
      }
      // close timer
      if (parcel.timer) clearTimeout(parcel.timer)
      // whenever a timer runs out set it null so that indexes do not scramble up. down side is that you have to filter every getters
      state.parcels[index] = null
      // creating a new array will allow vue to update getters
      state.parcels = [...state.parcels]
      if (state.parcels.filter(v => v !== null).length === 0) {
        state.visible = false
        state.parcels = []
      }
    },

    /**
     * Closes all timers and resets everything.
     */
    shutdown (state) {
      if (state.parcels.length > 0) {
        state.parcels.forEach(parcel => {
          if (parcel && parcel.timer) { clearTimeout(parcel.timer) }
        })
        state.parcels = []
      }
    }
  },
  actions: {
    /**
     * Show msg and runs for certain time.
     * Internally, creates timer and closes self when finished.
     * @params { Array } queue arr of { msg, type, timeout }
     */
    next ({ state, commit }, queue) {
      // start timer for each parcel where timer is not found
      if (queue) commit('queue', queue)
      if (state.parcels.length > 0) {
        // show each parcels' timer if not already
        state.parcels.forEach((parcel, index) => {
          if (!parcel.timer) {
            // in anycase make stateMsg visible
            parcel.timer = setTimeout(() => {
              // on finish close self
              commit('close', index)
            }, parcel.timeout)
          }
        })
        state.visible = true
      }
    }
  }
}

export default {
  methods: {
    deleteThis (preFun, onDelete, postFun, preMessage) {
      const confirmDelete = () => {
        this.$store.commit('ele-app/hideAlertMsg')
        if (typeof onDelete === 'boolean') {
          if (postFun) postFun(onDelete)
        } else {
          onDelete()
            .then(() =>
              this.$store.commit('ele-app/showStateMsg', 'Successfully deleted.')
            )
            .then(() => {
              if (postFun) postFun(true)
            })
            .catch(err => {
              this.$store.commit(
                'ele-app/showStateMsg',
                'Error occured while deleting.'
              )
              console.debug(err)
              if (postFun) postFun(false)
            })
        }
      }

      if (preFun()) {
        this.$store.commit('showAlertMsg', {
          message:
            preMessage ||
            'Are you sure you want to this? No recovery options could be present.',
          buttons: [
            {
              label: 'Delete',
              class: 'red',
              name: 'delete',
              action: () => confirmDelete()
            },
            {
              label: 'Cancel',
              name: 'cancel',
              action: () => this.$store.commit('ele-app/hideAlertMsg')
            }
          ]
        })
      }
    }
  }
}

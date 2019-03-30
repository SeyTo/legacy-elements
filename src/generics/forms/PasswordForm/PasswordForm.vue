<template lang="pug">
v-form(lazy-validation ref="form")
  v-layout(column)
    v-flex
      v-text-field(
        autofocus
        label="Confirm Old Password"
        v-model="oldPassword.value"
        :rules="oldPassword.rules"
        required
        type="password"
      )
    v-flex
      v-text-field(
        label="New Password"
        v-model="newPassword.value"
        :rules="newPassword.rules"
        required
        type="password"
      )
    v-flex
      v-text-field(
        label="Retype New Password"
        v-model="newConfirmPassword.value"
        :rules="newConfirmPassword.rules"
        required
        type="password"
      )
</template>

<script>
export default {
  name: 'PasswordForm',
  data () {
    return {
      oldPassword: {
        value: '',
        rules: [
          v => !!v || 'Old password is required'
        ]
      },
      newPassword: {
        value: '',
        rules: [
          v => v.length < 8 || 'Should be atleast 8 characters long'
        ]
      },
      newConfirmPassword: {
        value: '',
        rules: [
          v => v === this.newPassword.value || 'Is not same as new password'
        ]
      }
    }
  },
  methods: {
    validate () {
      return this.$refs.form.validate()
    }
  }
}
</script>

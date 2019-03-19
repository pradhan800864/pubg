<template>
    <div>
        <input type="email" v-model="email" name="email">
        <input type="password" v-model="password" name="password">
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      } catch (err) {
        console.log('ERROR AT THE TIME OF ADMIN REGISTER', err)
      }
    }
  }
}
</script>

<style>

</style>


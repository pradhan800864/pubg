<template>
<v-layout row>
    <v-flex md6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-0 pt-2 pb-2">
          <v-flex xs6 sm10 offset-xs1><v-text-field name="email" v-model="email" placeholder="email" required/></v-flex>
          <br>
          <v-flex xs6 sm10 offset-xs1><v-text-field type="password" name="password" v-model="password" placeholder="password"/></v-flex>
          <br>
          <div class="danger-alert" v-html="error"/>
          <v-btn class="cyan" @click="login" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout></template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log('ENTERED IN THE LOOP')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<style>

</style>

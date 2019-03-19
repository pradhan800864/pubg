<template>
  <div>
    <v-layout row>
    <v-flex md6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense class="blue-grey darken-3" dark>
            <v-toolbar-title>
                Login
            </v-toolbar-title>
            </v-toolbar>
            <div classs="pl-4 pr-0 pt-2 pb-2">
            <v-flex xs10 offset-xs1><v-text-field name="email" v-model="email" placeholder="email" required/></v-flex>
            <br>
            <v-flex xs10 offset-xs1><v-text-field type="password" name="password" v-model="password" placeholder="password"/></v-flex>
            <br>
            <div class="danger-alert" v-html="error"/>
            <v-btn class="blue-grey darken-3" dark @click="login">Login</v-btn>
            </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

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
        const response = await AuthenticationService.userlogin({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'MainPage'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>

</style>

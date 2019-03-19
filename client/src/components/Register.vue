<template>
  <div>
    <v-layout row>
    <v-flex md6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense class="blue-grey darken-3" dark>
            <v-toolbar-title>
                Register
            </v-toolbar-title>
            </v-toolbar>
            <div classs="pl-4 pr-0 pt-2 pb-2">
            <v-flex xs10 offset-xs1><v-text-field name="email" v-model="email" placeholder="Email" required/></v-flex>
            <v-flex xs10 offset-xs1><v-text-field type="password" name="password" v-model="password" placeholder="Password"/></v-flex>
            <v-flex xs10 offset-xs1><v-text-field type="text" name="age" v-model="age" placeholder="Age"/></v-flex>
            <v-flex xs10 offset-xs1><v-text-field type="text" name="locality" v-model="country" placeholder="Country"/></v-flex>
            <br>
            <div class="danger-alert" v-html="error"/>
            <v-btn class="blue-grey darken-3" dark @click="register">Register</v-btn>
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
      age: '',
      country: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.userregister({
          email: this.email,
          password: this.password,
          age: this.age,
          country: this.country
        })
        this.$router.push({
          name: 'Login'
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

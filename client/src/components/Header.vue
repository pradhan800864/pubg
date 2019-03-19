<template>
    <v-toolbar fixed class="blue-grey darken-3" dark>
        <v-toolbar-title class="mr-4" dark>
            PUBG
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark :to="{name: 'Register'}" v-if="!$store.state.isUserLoggedIn">
                Sign Up
            </v-btn>
            <v-btn flat dark :to="{name: 'Login'}" v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>
            <v-btn flat dark :to="{name: 'Logout'}" @click="logout" v-if="$store.state.isUserLoggedIn">
                Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'MainPage'
      })
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="hello">
    <h2 class="red--text" v-if="!$store.state.isUserLoggedIn">***** LOGIN TO REGISTER ANY TOURNMENTS *****</h2>
  <v-flex xs12 v-for="tournment in Tournments" :key="tournment.id">
      <v-card color="blue-grey darken-3" class="white--text">
        <v-layout class="mb-4">
          <v-flex xs5>
            <v-img
              src="https://static-news.moneycontrol.com/static-mcnews/2018/06/pubg-hero_1527570270606-770x433.jpg"
              height="280px"
              contain
            ></v-img>
          </v-flex>
          <v-flex xs7 >
            <v-card-title primary-title class="mt-4">
              <div class="pa-4">
                <div class="headline">Tournment Id : {{tournment.id}}</div>
                <div class="headline">Server : {{tournment.server}}</div>
                <div class="headline">Map : {{tournment.map}}</div>
                <div class="headline">Mode : {{tournment.mode}}</div>
                <div class="headline">TeamSize : {{tournment.teamsize}}</div>
              </div>
                      <v-divider vertical color="white"></v-divider>

              <div class="text-lg-right pa-4">
                <div class="headline">Date : {{tournment.date}}</div>
                <div class="headline">Time : {{tournment.time}}</div>
                <div class="headline">Entry Fee : {{tournment.entryfee}}</div>
                <div class="headline">Cash Prize : {{tournment.cashprize}}</div>
              </div>
                      <v-divider vertical color="white" v-if="$store.state.isUserLoggedIn"></v-divider>
              <v-btn class="amber accent-4 ml-4" :to="{name: 'RegisterTournment', params: {TournmentId: tournment.id}}" dark v-if="$store.state.isUserLoggedIn">
                Register
              </v-btn>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import TournmentService from '@/services/TournmentService'

export default {
  data () {
    return {
      Tournments: []
    }
  },
  async mounted () {
    try {
      this.Tournments = (await TournmentService.show()).data
      // console.log(this.Tournments.data)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    // async register () {
    //   try {
    //     await TournmentService.register({
    //     })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

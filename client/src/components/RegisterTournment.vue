<template>
    <div>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="text-md-center pa-4 blue-grey darken-3 white--text elevation-20">
        <v-img
          class="black--text"
          height="320px"
          src="https://static-news.moneycontrol.com/static-mcnews/2018/06/pubg-hero_1527570270606-770x433.jpg"
        >
        </v-img>
        <v-card-title class="text-xs-center pa-3" xs12>
          <div class="headline" >Tournment Id : {{UsersInfo.id}}</div>
                    <v-spacer></v-spacer>
        <div class="headline" >Date : {{UsersInfo.date}}</div>
        </v-card-title>
        <v-card-title class="text-md-left pa-3" xs12>
            <div class="headline" >Server : {{UsersInfo.server}}</div>
                    <v-spacer></v-spacer>
        <div class="headline text-xs-left">Time : {{UsersInfo.time}}</div>
        </v-card-title>
        <v-card-title class="text-xs-right pa-3" xs12>
          <div class="headline" >Map : {{UsersInfo.map}}</div>
                    <v-spacer></v-spacer>
        <div class="headline" >Entry Fee : {{UsersInfo.entryfee}}</div>
        </v-card-title>
        <v-card-title class="text-md-center pa-3" xs12>
          <div class="headline" >Mode : {{UsersInfo.mode}}</div>
                    <v-spacer></v-spacer>
        <div class="headline" >Cash Prize : {{UsersInfo.cashprize}}</div>
        </v-card-title>
        <v-card-title class="text-xs-right pa-3" xs12>
          <div class="headline" >TeamSize : {{UsersInfo.teamsize}}</div>
        </v-card-title>
        <v-btn class="amber accent-4 ml-4" @click="registertournment" v-if="isUserLoggedIn && !tournmentregister" dark>
                Register
              </v-btn>
        <v-btn class="green ml-4" v-if="isUserLoggedIn && tournmentregister" dark>
                Registered
              </v-btn>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import TournmentService from '@/services/TournmentService'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn', 'user'
    ])
  },
  data () {
    return {
      props: [
        'user'
      ],
      UsersInfo: {
        tournmentid: null,
        server: null,
        map: null,
        mode: null,
        teamsize: null,
        date: null,
        time: null,
        entryfee: null,
        cashprize: null
      },
      tournmentregister: null
    }
  },
  async mounted () {
    try {
      const tournmentid = this.$store.state.route.params.TournmentId
      const userid = this.$store.state.user.id
      this.UsersInfo = (await TournmentService.showdetails(tournmentid)).data
      this.tournmentregister = (await TournmentService.check(userid, tournmentid)).data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async registertournment () {
      try {
        const tournmentid = this.$store.state.route.params.TournmentId
        const userid = this.$store.state.user.id
        console.log(userid)
        console.log(tournmentid)
        this.tournmentregister = (await TournmentService.registertournment(userid, tournmentid)).data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>

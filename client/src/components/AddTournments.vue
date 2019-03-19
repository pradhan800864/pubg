<template>
<div>
  <v-layout row>
    <v-flex md6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense class="blue-grey darken-3" dark>
            <v-toolbar-title>
                Add Tournments
            </v-toolbar-title>
            </v-toolbar>
            <div classs="pl-4 pr-0 pt-2 pb-2">
            <v-flex xs10 offset-xs1><v-select prepend-icon="cloud" v-model="servers" :items="server" item-text="name" item-value="name" label="Server" persistent-hint return-object single-line></v-select></v-flex>
            <v-flex xs10 offset-xs1><v-select prepend-icon="map" v-model="maps" :items="map" label="Map" item-text="name" item-value="name" persistent-hint return-object single-line></v-select></v-flex>
            <v-flex xs10 offset-xs1><v-select prepend-icon="watch" :items="mode" v-model="modes" label="Mode" item-text="name" item-value="name" persistent-hint return-object single-line></v-select></v-flex>
            <v-flex xs10 offset-xs1><v-select prepend-icon="people" :items="teamsize" v-model="teamsizes" label="TeamSize" item-text="name" item-value="name" persistent-hint return-object single-line></v-select></v-flex>
            <v-flex xs10 offset-xs1>
                <v-menu
                    :close-on-content-click="false"
                    v-model="menu2"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px">
        <v-text-field slot="activator" v-model="date" label="Picker The Date Of Tournment" prepend-icon="event" readonly></v-text-field>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
            </v-flex>
            <v-flex xs10 offset-xs1><v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="time"
          label="Picker The Time Of Tournment"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal3 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
            </v-flex>
            <v-flex xs10 offset-xs1><v-text-field prepend-icon="money" name="entryfee" label="Entry Fee" v-model="entryfee"/></v-flex>
            <v-flex xs10 offset-xs1><v-text-field prepend-icon="money" name="cashprize" label="Cash Prize" v-model="cashprize"/></v-flex>
            <br>
            <div class="danger-alert" v-html="error"/>
            <v-btn class="blue-grey darken-3" dark @click="addtournment">Add Tournment</v-btn>
            </div>
            <!-- <p>This is Server : {{servers.name}}</p>
            <p>This is Map : {{maps.name}}</p>
            <p>This is Mode : {{modes.name}}</p>
            <p>This is Teamsize : {{teamsizes.name}}</p> -->
            <!-- <p>This is time : {{time}}</p>
            <p>This is date : {{date}}</p> -->

        </div>
      </v-flex>
    </v-layout>
  </div></template>

<script>
import TournmentService from '@/services/TournmentService'
export default {
  data () {
    return {
      date: '',
      menu: false,
      modal: false,
      menu2: false,
      time: null,
      modal2: false,
      servers: '',
      maps: '',
      modes: '',
      teamsizes: '',
      cashprize: '',
      entryfee: '',
      server: [
        { name: 'Asia' },
        { name: 'NorthAmerica' },
        { name: 'South America' },
        { name: 'Europe' },
        { name: 'KRJP' }
      ],
      map: [
        { name: 'Erangle' },
        { name: 'Miramar' },
        { name: 'Sanhok' }
      ],
      mode: [
        { name: 'TPP' },
        { name: 'FPP' }
      ],
      teamsize: [
        { name: 'Solo' },
        { name: 'Duo' },
        { name: 'Squad' }
      ],
      error: null
    }
  },
  methods: {
    async addtournment () {
      try {
        await TournmentService.savetournment({
          server: this.servers.name,
          map: this.maps.name,
          mode: this.modes.name,
          teamsize: this.teamsizes.name,
          date: this.date,
          time: this.time,
          cashprize: this.cashprize,
          entryfee: this.entryfee
        })
        this.$router.push({
          name: 'TournmentAdded'
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

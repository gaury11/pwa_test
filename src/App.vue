<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SOON</span>
        <span class="font-weight-light">API TEST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <router-link to="/" exact>msg-api</router-link>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

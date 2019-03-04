<template>
  <div id="app">
    <v-app id="inspire" >
      <v-navigation-drawer
        clipped
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>send</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Mag-Api 테스트</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/timeline">
            <v-list-tile-action>
              <v-icon>timeline</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>타임 라인</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/test">
            <v-list-tile-action>
              <v-icon>code</v-icon> 
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Test</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left color="orange lighten-1">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>E.S.C</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
        <!--
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <v-tooltip right>
                <v-btn
                  icon
                  large
                  :href="source"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon large>code</v-icon>
                </v-btn>
                <span>Source</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
        -->
      </v-content>
      <v-footer app fixed>
        <span>&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
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

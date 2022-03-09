<template>
  <v-app id="app-root">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        書籍管理アプリ
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view :key="$route.path"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {}
  },
  created () {}
})
</script>

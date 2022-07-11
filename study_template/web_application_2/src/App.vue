<template>
  <v-app id="app-root">
    <v-app-bar
      app
      dark
      color="primary"
    >
      <v-toolbar-title>
        書籍管理アプリ
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <books />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="js">
import Vue from 'vue'
import Books from '@/components/Books'

export default Vue.extend({
  components: {
    Books
  },
  data () {
    return {}
  },
  created () {}
})
</script>

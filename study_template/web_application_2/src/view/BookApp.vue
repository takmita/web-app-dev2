<template>
  <!-- <div>
    書籍管理アプリだよ
  </div> -->
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="books"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  computed: {},
  methods: {}
}
</script>

<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="books"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-simple-checkbox
          v-model="item.actions"
          disabled
        ></v-simple-checkbox>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['books'],
  data () {
    return {
      headers: [
        {
          text: 'タイトル',
          value: 'name'
        },
        { text: 'ジャンル', value: 'genre' },
        { text: '購入日', value: 'purchaseDate' },
        { text: '購入者', value: 'purchaser' },
        { text: '削除／修正',
          align: 'center',
          sortable: false,
          value: 'actions' }
      ]
    }
  },
  created () {},
  computed: {},
  methods: {}
}
</script>

<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="bookList"
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
      ],
      bookList: ''
    }
  },
  // 検索結果を検知しリストに表示する
  watch: {
    books: function () {
      this.setTable()
    }
  },
  created () {
    // 全データ（配列）を初期表示する
    this.setTable()
  },
  computed: {},
  methods: {
    /**
     * data tableの表示エリアにセットする
     */
    setTable () {
      this.bookList = this.books
    }
  }
}
</script>

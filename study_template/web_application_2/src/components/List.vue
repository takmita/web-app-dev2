<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="books"
      class="elevation-1"
    >
      <!-- 修正と削除のアイコンボタン -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
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
      showDialogAdd: false,
      showDialogDelete: false,
      headers: [
        { text: 'タイトル', value: 'title' },
        { text: 'ジャンル', value: 'genre' },
        { text: '購入日', value: 'purchaseDate' },
        { text: '購入者', value: 'purchaser' },
        { text: '修正／削除', value: 'actions', sortable: false }
      ],
      editedIndex: -1,
      deleteIndex: -1,
      editedItem: {
        title: '',
        genre: '',
        purchaseDate: '',
        purchaser: '',
        review: ''
      }
    }
  },
  created () {},
  computed: {},
  methods: {
    /**
     * editedIndexにbooksの中で修正するitemの位置をセット
     * editedItemにitemを返す
     * 削除ダイアログを表示(true)する
     */
    editItem (item) {
      this.editedIndex = this.books.indexOf(item)
      this.editedItem = item
      this.showDialogAdd = true
      this.showDialogDelete = false
      // 編集したbook情報をBookAppに受け渡します
      this.$emit('edited-BookInfo', this.editedIndex, this.editedItem, this.showDialogAdd, this.showDialogDelete)
    },
    /**
     * deleteIndexにbooksの中で削除するitemの位置をセット
     * 削除ダイアログを表示(true)する
     */
    deleteItem (item) {
      this.deleteIndex = this.books.indexOf(item)
      this.showDialogAdd = false
      this.showDialogDelete = true
      // 削除したbook情報をBookAppに受け渡します
      this.$emit('delete-BookInfo', this.deleteIndex, this.showDialogAdd, this.showDialogDelete)
    }
  }
}
</script>

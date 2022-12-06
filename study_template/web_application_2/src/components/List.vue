<template>
  <div>
    <v-dialog
      v-model="dialogAdd"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          class="mb-2"
          v-bind="attrs"
           v-on="on"
        >
          Add to Book
        </v-btn>
      </template>
      <!-- 登録と修正の入力フォーム -->
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row dense>
              <v-col
                cols="6"
              >
                <v-text-field
                  v-model="editedItem.title"
                  label="題名"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col
                cols="6"
              >
                <v-select
                  v-model="editedItem.genre"
                  :items="selectGenre"
                  filled
                  label="分類"
                  clearable
                ></v-select>
              </v-col>
              <v-col
                cols="6"
              >
                <v-text-field
                  v-model="editedItem.purchaser"
                  label="購入者"
                ></v-text-field>
              </v-col>
              <v-col
              >
                <label>購入日付
                  <input type="date"
                  v-model="editedItem.purchaseDate">
                </label>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  v-model="editedItem.review"
                  label="書評"
                  dense
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="close"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import { selectGenre } from '@/modules/constants'
export default {
  name: 'List',
  props: ['books'],
  data () {
    return {
      dialogAdd: false,
      dialogDelete: false,
      selectGenre: selectGenre,
      headers: [
        { text: 'タイトル', value: 'title' },
        { text: 'ジャンル', value: 'genre' },
        { text: '購入日', value: 'purchaseDate' },
        { text: '購入者', value: 'purchaser' },
        { text: '修正／削除', value: 'actions', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        title: '',
        genre: '',
        purchaseDate: '',
        purchaser: '',
        review: ''
      },
      defaultItem: {
        title: '',
        genre: '',
        purchaseDate: '',
        purchaser: '',
        review: ''
      }
    }
  },
  created () {},
  computed: {
    // 登録はeditedIndexが「テーブルに該当なし(-1)」
    // 修正はeditedIndexが「テーブルにある対象の行番号」
    formTitle () {
      return this.editedIndex === -1 ? '登録用画面' : '修正用画面'
    }
  },
  methods: {
    /**
     * 修正(該当データあり)の場合、修正データをbooksの該当データに上書き
     * 登録(該当データなし)の場合、登録データをbooksに追加
     * 最後にダイアログを閉じる
     */
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.books[this.editedIndex], this.editedItem)
      } else {
        this.books.push(this.editedItem)
      }
      this.close()
    },
    /**
     * ダイアログを非表示にする
     * editedItemに空のitemを返す
     * editedIndexに"booksに該当なし"(-1)をセット
     */
    close () {
      this.dialogAdd = false
      this.nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    /**
     * editedIndexにbooksに含まれるitemの位置をセット
     * editedItemにitemを返す
     * 削除ダイアログを表示(true)する
     */
    editItem (item) {
      this.editedIndex = this.books.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogAdd = true
    },
    /**
     * editedIndexにbooksに含まれるitemの位置をセット
     * editedItemにitemを返す
     * 削除ダイアログを表示(true)する
     */
    deleteItem (item) {
      this.editedIndex = this.books.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    /**
     * 削除確認でOKならbooksから削除(splice)する
     * 削除ダイアログを閉じる
     */
    deleteItemConfirm () {
      this.books.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    /**
     * 削除確認でCancelなら削除ダイアログを非表示にする
     * 削除確認でOKの場合も削除ダイアログを非表示にする
     * editedItemに空のitemを返す
     * editedIndexに"booksに該当なし"(-1)をセット
     */
    closeDelete () {
      this.dialogDelete = false
      this.nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    }
  }
}
</script>

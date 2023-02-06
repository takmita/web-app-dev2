<template>
  <div>
    <v-dialog
      v-model="showDialogAdd"
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
          editedIndex="-1"
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
                  :items="genres"
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
    <v-dialog v-model="showDialogDelete" max-width="500px">
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
  </div>
</template>

<script>
import { genres } from '@/modules/constants'
export default {
  name: 'Form',
  props: [
    'books',
    'showDialogAdd',
    'showDialogDelete',
    'editedIndex',
    'deleteIndex',
    'editedItem'
  ],
  data () {
    return {
      genres: genres,
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
    /**
     * タイトルの表示を切り替えます
     */
    formTitle () {
      return this.isAddMode ? '登録用画面' : '修正用画面'
    },
    /**
     * 登録の場合にtrueを返します
     * 登録はeditedIndexが無し(-1)「テーブルに該当データなし」
     * 修正はeditedIndexが有り(対象データ位置）「テーブルに該当データあり」
     */
    isAddMode () {
      return this.editedIndex === -1
    }
  },
  methods: {
    /**
     * 修正(該当データあり)の場合、修正データをbooksの該当データに上書き
     * 登録(該当データなし)の場合、登録データをbooksに追加
     * 最後にダイアログを閉じる
     */
    save () {
      if (this.isAddMode) {
        this.books.push(this.editedItem)
      } else {
        Object.assign(this.books[this.editedIndex], this.editedItem)
      }
      // BookAppに編集削除後のbooksを受け渡します
      this.$emit('afterEditing-books', (this.books))
      this.close()
    },
    /**
     * ダイアログを非表示にする
     * editedItemに空のitemを返す
     */
    close () {
      this.resetEditedItem()
    },
    /**
     * 修正後にインデックスをリセットすることで
     * 再度、登録を可能とします
     */
    resetEditedItem () {
      // this.editedItem = Object.assign({}, this.defaultItem)
      this.editedItem = this.defaultItem
      this.editedIndex = -1
      this.showDialogAdd = false
      this.showDialogDelete = false
      // dialogの初期状態をBookAppに通知します
      this.$emit('dialog-status', this.editedItem, this.editedIndex, this.showDialogAdd, this.showDialogDelete)
    },
    /**
      * 削除確認でOKならbooksから対象データを削除する
      * ダイアログを非表示にする
     */
    deleteItemConfirm () {
      this.books.splice(this.deleteIndex, 1)
      this.closeDelete()
    },
    /**
     * 削除確認でCancelなら削除せずダイアログを非表示にする
     */
    closeDelete () {
      this.resetEditedItem()
    }
  }
}
</script>

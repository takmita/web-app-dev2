<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="searchTitle"
            filled
            label="タイトル"
            clearable
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-select
            v-model="searchGenre"
            :items="items"
            filled
            label="ジャンル"
            clearable
          >
            <template v-slot:append-outer>
              <v-btn @click="searchBook"
                small
                color="primary">検索
              </v-btn>
            </template>
          </v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { selectBook } from '@/modules/constants'
export default {
  data: () => ({
    searchTitle: '',
    searchGenre: '',
    items: selectBook,
    searchResult: []
  }),
  created () {},
  computed: {},
  methods: {
    searchBook () {
      // 検索入力の状態をチェックします
      if (!this.searchValidation()) {
        return
      }
      // DBを検索します
      // BookAppに検索結果を受け渡します
      this.$emit('search-book', (
        this.searchResult.push = (
          {
            name: 'うまくいっている人の考え方',
            genre: 'ビジネス・経済',
            purchaseDate: '2021/12/20',
            purchaser: '藤井フミヤ',
            actions: false
          }
        )
      ))
    },
    searchValidation () {
      // 検索入力の状態をチェックします
      // 空文字もしくはnullはエラー
      // クリア後に再度未入力だとnullになる
      if (!this.searchTitle) {
        alert('タイトルを入力してください。')
        return false
      } else if (!this.searchGenre) {
        alert('ジャンルを選択してください。')
        return false
      } else {
        alert('正しく入力されました。検索を開始します。')
        return true
      }
    }
  }
}
</script>

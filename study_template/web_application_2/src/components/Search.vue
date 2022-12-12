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
            :items="genres"
            filled
            label="ジャンル"
            clearable
          >
            <template v-slot:append-outer>
              <v-btn @click="searchBook"
                small
                color="primary">Search Book
              </v-btn>
            </template>
          </v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { genres } from '@/modules/constants'
export default {
  data: () => ({
    searchTitle: '',
    searchGenre: '',
    genres: genres,
    searchResult: '',
    obtainedBooks: []
  }),
  created () {},
  computed: {},
  methods: {
    /**
     * 検索入力の状態をチェックします
     */
    searchBook () {
      if (!this.searchValidation()) {
        return
      }
      // DBを検索します
      this.obtainedBooks.push(
        {
          title: 'うまくいっている人の考え方',
          genre: 'ビジネス・経済',
          purchaseDate: '2021-12-02',
          purchaser: '藤井フミヤ'
        },
        {
          sequentialNumber: '005',
          title: '中曽根康弘が語る戦後日本外交',
          genre: '政治・社会',
          purchaseDate: '2021-12-31',
          purchaser: '来生たかお'
        }
      )
      // BookAppに検索結果を受け渡します
      this.$emit('search-book', (
        this.searchResult = this.obtainedBooks
      ))
    },
    /**
     * 検索入力の空文字もしくはnullをチェックします
     */
    searchValidation () {
      if (!this.searchTitle) {
        alert('タイトルを入力してください。')
        return false
      }

      if (!this.searchGenre) {
        alert('ジャンルを選択してください。')
        return false
      }

      alert('正しく入力されました。検索を開始します。')
      return true
    }
  }
}
</script>

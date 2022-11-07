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
            v-model="searchGenres"
            :items="items"
            filled
            label="ジャンル"
            clearable
          >
            <template v-slot:append-outer>
              <v-btn @click="searchBook"
                small
                color="secondary">検索
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
    searchGenres: selectBook,
    // itemsを別に定義しないとクリア後の再選択ができない
    // 前回選択した（バインドされた）ものだけが表示される
    items: selectBook
  }),
  created () {},
  computed: {},
  methods: {
    searchBook () {
      // 検索入力の状態をチェックします
      if (!this.searchTitle) {
        // 空文字もしくはnullはエラー
        // クリア後に再度未入力だとnullになる
        alert('タイトルを入力してください。')
      } else if (typeof this.searchGenres !== 'string') {
        // 選択する前は'object'(メニュー全て)がバインドされる
        // 選択後にクリアすると'undefined'がバインドされる
        alert('ジャンルを選択してください。')
      } else {
        alert('正しく入力されました。検索を開始します。')
      }
      // DBを検索します
      // BookAppに検索結果を受け渡します
    }
  }
}
</script>

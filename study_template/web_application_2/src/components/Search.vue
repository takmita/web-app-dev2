<template>
  <v-form>
    <v-container>
      <!-- <v-row align-content:start> -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="message3"
            filled
            label="タイトル"
            clearable
          >
            <template v-slot:append>
              <v-btn
                small
                color="primary">検索
              </v-btn>
            </template>
          </v-text-field>
        </v-col>

        <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
          <v-select
            :items="items"
            filled
            label="ジャンル"
            clearable=true
          >
            <template v-slot:append-outer>
              <v-btn
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
export default {
  data: () => ({
    items: [
      '文学・評論',
      'ノンフィクション',
      'ビジネス・経済',
      '歴史・地理',
      '政治・社会',
      '芸能・エンタメ',
      '芸術・デザイン',
      '人文・思想・宗教',
      '暮らし・健康',
      'サイエンス・テクノロジー',
      '趣味・実用',
      '教育・自己啓発',
      'スポーツ・アウトドア',
      '辞典・ことば',
      '音楽',
      '旅行・紀行',
      '絵本・児童書',
      'コミックス'
    ]
  }),
  created () {},
  computed: {},
  methods: {}
}
</script>

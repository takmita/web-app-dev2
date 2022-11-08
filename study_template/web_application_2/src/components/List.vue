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
  props: ['bookList'],
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
      books: []
    }
  },
  // 検索結果を検知しリストに表示する
  watch: {
    bookList: function () {
      this.books.splice(0)
      this.books.push(this.bookList)
    }
  },
  created () {
    // DBから全データを取得し表示する。
    this.books.push(
      {
        name: 'カラマーゾフの兄弟',
        genre: '文学・評論',
        purchaseDate: '2021/11/27',
        purchaser: '井上陽水',
        actions: true
      },
      {
        name: '植村直己 妻への手紙',
        genre: 'ノンフィクション',
        purchaseDate: '2021/11/29',
        purchaser: '稲垣潤一',
        actions: false
      },
      {
        name: 'うまくいっている人の考え方',
        genre: 'ビジネス・経済',
        purchaseDate: '2021/12/20',
        purchaser: '藤井フミヤ',
        actions: false
      },
      {
        name: 'サピエンス全史',
        genre: '歴史・地理',
        purchaseDate: '2021/12/31',
        purchaser: '斉藤和義',
        actions: false
      },
      {
        name: '中曽根康弘が語る戦後日本外交',
        genre: '政治・社会',
        purchaseDate: '2021/12/31',
        purchaser: '来生たかお',
        actions: false
      },
      {
        name: 'ちあきなおみ　沈黙の理由',
        genre: '芸能・エンタメ',
        purchaseDate: '2022/1/1',
        purchaser: '吉田拓郎',
        actions: false
      },
      {
        name: '謎解き　フェルメール',
        genre: '芸術・デザイン',
        purchaseDate: '2022/1/10',
        purchaser: '松山千春',
        actions: false
      },
      {
        name: 'カントの人間学',
        genre: '人文・思想・宗教',
        purchaseDate: '2022/1/15',
        purchaser: '松任谷由実',
        actions: false
      },
      {
        name: 'おやこレシピ',
        genre: '暮らし・健康',
        purchaseDate: '2022/2/3',
        purchaser: '松田聖子',
        actions: false
      },
      {
        name: 'フェルマーの最終定理',
        genre: 'サイエンス・テクノロジー',
        purchaseDate: '2022/2/8',
        purchaser: '槇原敬之',
        actions: false
      },
      {
        name: 'やきもの鑑定入門',
        genre: '趣味・実用',
        purchaseDate: '2022/2/22',
        purchaser: '浜田省吾',
        actions: false
      },
      {
        name: '受験脳の作り方―脳科学で考える効率的学習法―',
        genre: '教育・自己啓発',
        purchaseDate: '2022/3/4',
        purchaser: '中島みゆき',
        actions: false
      },
      {
        name: '百年前の山を旅する',
        genre: 'スポーツ・アウトドア',
        purchaseDate: '2022/4/30',
        purchaser: '山下達郎',
        actions: false
      },
      {
        name: '新潮日本語漢字辞典',
        genre: '辞典・ことば',
        purchaseDate: '2022/5/5',
        purchaser: '竹内まりや',
        actions: false
      },
      {
        name: '小澤征爾さんと、音楽について話をする',
        genre: '音楽',
        purchaseDate: '2022/8/17',
        purchaser: '織田哲郎',
        actions: false
      },
      {
        name: 'ロシア日記―シベリア鉄道に乗って―',
        genre: '旅行・紀行',
        purchaseDate: '2022/8/23',
        purchaser: '原由子',
        actions: false
      },
      {
        name: '思い出のマーニー',
        genre: '絵本・児童書',
        purchaseDate: '2022/10/9',
        purchaser: '桑田佳祐',
        actions: false
      },
      {
        name: '極主夫道',
        genre: 'コミックス',
        purchaseDate: '2022/10/13',
        purchaser: '小田和正',
        actions: false
      }
    )
  },
  computed: {},
  methods: {}
}
</script>

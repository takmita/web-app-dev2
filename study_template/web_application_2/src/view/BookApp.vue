<template>
  <div>
    <!-- 受け取ったSearch-bookイベントをsearchBookで定義する -->
    <Search
      @search-book="searchBook"
    >
    </Search>

    <!-- 表示するbookデータをListコンポーネントに連携する -->
    <List
      :books="books"
    >
    </List>
  </div>
</template>

<script>
import Search from '@/components/Search'
import List from '@/components/List'
export default {
  components: {
    Search,
    List
  },
  data () {
    return {
      books: []
    }
  },
  created () {
    // DBから全件データを取得する
    // 取得したデータをListコンポーネント受け渡す
    this.books.push(
      {
        title: 'カラマーゾフの兄弟',
        genre: '文学・評論',
        purchaseDate: '2021-11-27',
        purchaser: '井上陽水'
      },
      {
        title: '植村直己 妻への手紙',
        genre: 'ノンフィクション',
        purchaseDate: '2021-11-29',
        purchaser: '稲垣潤一'
      },
      {
        title: 'うまくいっている人の考え方',
        genre: 'ビジネス・経済',
        purchaseDate: '2021-12-20',
        purchaser: '藤井フミヤ'
      },
      {
        title: 'サピエンス全史',
        genre: '歴史・地理',
        purchaseDate: '2021-12-31',
        purchaser: '斉藤和義'
      },
      {
        title: '中曽根康弘が語る戦後日本外交',
        genre: '政治・社会',
        purchaseDate: '2021-12-31',
        purchaser: '来生たかお'
      },
      {
        title: 'ちあきなおみ　沈黙の理由',
        genre: '芸能・エンタメ',
        purchaseDate: '2022-01-01',
        purchaser: '吉田拓郎'
      },
      {
        title: '謎解き　フェルメール',
        genre: '芸術・デザイン',
        purchaseDate: '2022-01-10',
        purchaser: '松山千春'
      },
      {
        title: 'カントの人間学',
        genre: '人文・思想・宗教',
        purchaseDate: '2022-01-15',
        purchaser: '松任谷由実'
      },
      {
        title: 'おやこレシピ',
        genre: '暮らし・健康',
        purchaseDate: '2022-02-03',
        purchaser: '松田聖子'
      },
      {
        title: 'フェルマーの最終定理',
        genre: 'サイエンス・テクノロジー',
        purchaseDate: '2022-02-08',
        purchaser: '槇原敬之'
      },
      {
        title: 'やきもの鑑定入門',
        genre: '趣味・実用',
        purchaseDate: '2022-02-22',
        purchaser: '浜田省吾'
      },
      {
        title: '受験脳の作り方―脳科学で考える効率的学習法―',
        genre: '教育・自己啓発',
        purchaseDate: '2022-03-04',
        purchaser: '中島みゆき'
      },
      {
        title: '百年前の山を旅する',
        genre: 'スポーツ・アウトドア',
        purchaseDate: '2022-04-30',
        purchaser: '山下達郎'
      },
      {
        title: '新潮日本語漢字辞典',
        genre: '辞典・ことば',
        purchaseDate: '2022-05-05',
        purchaser: '竹内まりや'
      },
      {
        title: '小澤征爾さんと、音楽について話をする',
        genre: '音楽',
        purchaseDate: '2022-08-17',
        purchaser: '織田哲郎'
      },
      {
        title: 'ロシア日記―シベリア鉄道に乗って―',
        genre: '旅行・紀行',
        purchaseDate: '2022-08-23',
        purchaser: '原由子'
      },
      {
        title: '思い出のマーニー',
        genre: '絵本・児童書',
        purchaseDate: '2022-10-09',
        purchaser: '桑田佳祐'
      },
      {
        title: '極主夫道',
        genre: 'コミックス',
        purchaseDate: '2022-10-13',
        purchaser: '小田和正'
      }
    )
  },
  computed: {},
  methods: {
    /**
     * Search.vueからの戻り値を
     * books(data部)を経由してList.vueに受け渡す
     */
    searchBook (result) {
      this.books = result
    }
  }
}
</script>

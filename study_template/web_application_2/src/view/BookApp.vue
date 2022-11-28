<template>
  <div>
    <Form
      @add-form="addForm"
    >
    </Form>
    <!-- 受け取ったSearch-bookイベントをsearchBookで定義する -->
    <Search
      @search-book="searchBook"
    >
    </Search>
    <!-- 表示するデータをListコンポーネントに受け渡す -->
    <List
      :books="books"
    >
    </List>
  </div>
</template>

<script>
import Search from '@/components/Search'
import List from '@/components/List'
import Form from '@/components/Form'

export default {
  components: {
    Form,
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
        sequentialNumber: '001',
        title: 'カラマーゾフの兄弟',
        genre: '文学・評論',
        purchaseDate: '2021/11/27',
        purchaser: '井上陽水'
      },
      {
        sequentialNumber: '002',
        title: '植村直己 妻への手紙',
        genre: 'ノンフィクション',
        purchaseDate: '2021/11/29',
        purchaser: '稲垣潤一'
      },
      {
        sequentialNumber: '003',
        title: 'うまくいっている人の考え方',
        genre: 'ビジネス・経済',
        purchaseDate: '2021/12/20',
        purchaser: '藤井フミヤ'
      },
      {
        sequentialNumber: '004',
        title: 'サピエンス全史',
        genre: '歴史・地理',
        purchaseDate: '2021/12/31',
        purchaser: '斉藤和義'
      },
      {
        sequentialNumber: '005',
        title: '中曽根康弘が語る戦後日本外交',
        genre: '政治・社会',
        purchaseDate: '2021/12/31',
        purchaser: '来生たかお'
      },
      {
        sequentialNumber: '006',
        title: 'ちあきなおみ　沈黙の理由',
        genre: '芸能・エンタメ',
        purchaseDate: '2022/1/1',
        purchaser: '吉田拓郎'
      },
      {
        sequentialNumber: '007',
        title: '謎解き　フェルメール',
        genre: '芸術・デザイン',
        purchaseDate: '2022/1/10',
        purchaser: '松山千春'
      },
      {
        sequentialNumber: '008',
        title: 'カントの人間学',
        genre: '人文・思想・宗教',
        purchaseDate: '2022/1/15',
        purchaser: '松任谷由実'
      },
      {
        sequentialNumber: '009',
        title: 'おやこレシピ',
        genre: '暮らし・健康',
        purchaseDate: '2022/2/3',
        purchaser: '松田聖子'
      },
      {
        sequentialNumber: '010',
        title: 'フェルマーの最終定理',
        genre: 'サイエンス・テクノロジー',
        purchaseDate: '2022/2/8',
        purchaser: '槇原敬之'
      },
      {
        sequentialNumber: '011',
        title: 'やきもの鑑定入門',
        genre: '趣味・実用',
        purchaseDate: '2022/2/22',
        purchaser: '浜田省吾'
      },
      {
        sequentialNumber: '012',
        title: '受験脳の作り方―脳科学で考える効率的学習法―',
        genre: '教育・自己啓発',
        purchaseDate: '2022/3/4',
        purchaser: '中島みゆき'
      },
      {
        sequentialNumber: '013',
        title: '百年前の山を旅する',
        genre: 'スポーツ・アウトドア',
        purchaseDate: '2022/4/30',
        purchaser: '山下達郎'
      },
      {
        sequentialNumber: '014',
        title: '新潮日本語漢字辞典',
        genre: '辞典・ことば',
        purchaseDate: '2022/5/5',
        purchaser: '竹内まりや'
      },
      {
        sequentialNumber: '015',
        title: '小澤征爾さんと、音楽について話をする',
        genre: '音楽',
        purchaseDate: '2022/8/17',
        purchaser: '織田哲郎'
      },
      {
        sequentialNumber: '016',
        title: 'ロシア日記―シベリア鉄道に乗って―',
        genre: '旅行・紀行',
        purchaseDate: '2022/8/23',
        purchaser: '原由子'
      },
      {
        sequentialNumber: '017',
        title: '思い出のマーニー',
        genre: '絵本・児童書',
        purchaseDate: '2022/10/9',
        purchaser: '桑田佳祐'
      },
      {
        sequentialNumber: '018',
        title: '極主夫道',
        genre: 'コミックス',
        purchaseDate: '2022/10/13',
        purchaser: '小田和正'
      }
    )
  },
  computed: {},
  methods: {
    /**
     * Search.vueからの戻り値を
     * data部を経由してList.vueに受け渡す
     */
    searchBook (result) {
      this.books = result
    }
  }
}
</script>

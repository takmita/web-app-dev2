<template>
  <!-- <div>
    書籍管理アプリだよ
  </div> -->
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="books"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'タイトル',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'ジャンル', value: 'genre' },
        { text: '購入日', value: 'purchaseDate' },
        { text: '購入者', value: 'purchaser' },
        { text: 'レビュー', value: 'review' }
      ],
      books: [
        {
          name: 'カラマーゾフの兄弟',
          genre: '文学・評論',
          purchaseDate: '2021/11/27',
          purchaser: '井上陽水',
          review: '人生が二度あれば'
        },
        {
          name: '植村直己 妻への手紙',
          genre: 'ノンフィクション',
          purchaseDate: '2021/11/29',
          purchaser: '稲垣潤一',
          review: '夏のクラクション'
        },
        {
          name: 'うまくいっている人の考え方',
          genre: 'ビジネス・経済',
          purchaseDate: '2021/12/20',
          purchaser: '藤井フミヤ',
          review: 'TRUE LOVE'
        },
        {
          name: 'サピエンス全史',
          genre: '歴史・地理',
          purchaseDate: '2021/12/31',
          purchaser: '斉藤和義',
          review: '歌うたいのバラッド'
        },
        {
          name: '中曽根康弘が語る戦後日本外交',
          genre: '政治・社会',
          purchaseDate: '2021/12/31',
          purchaser: '来生たかお',
          review: '夢の途中'
        },
        {
          name: 'ちあきなおみ　沈黙の理由',
          genre: '芸能・エンタメ',
          purchaseDate: '2022/1/1',
          purchaser: '吉田拓郎',
          review: 'どうしてこんなに悲しいんだろう'
        },
        {
          name: '謎解き　フェルメール',
          genre: '芸術・デザイン',
          purchaseDate: '2022/1/10',
          purchaser: '松山千春',
          review: '大空と大地の中で'
        },
        {
          name: 'カントの人間学',
          genre: '人文・思想・宗教',
          purchaseDate: '2022/1/15',
          purchaser: '松任谷由実',
          review: 'やさしさに包まれたなら'
        },
        {
          name: 'おやこレシピ',
          genre: '暮らし・健康',
          purchaseDate: '2022/2/3',
          purchaser: '松田聖子',
          review: '野ばらのエチュード'
        },
        {
          name: 'フェルマーの最終定理',
          genre: 'サイエンス・テクノロジー',
          purchaseDate: '2022/2/8',
          purchaser: '槇原敬之',
          review: 'もう恋なんてしない'
        },
        {
          name: 'やきもの鑑定入門',
          genre: '趣味・実用',
          purchaseDate: '2022/2/22',
          purchaser: '浜田省吾',
          review: '愛の世代の前に'
        },
        {
          name: '受験脳の作り方―脳科学で考える効率的学習法―',
          genre: '教育・自己啓発',
          purchaseDate: '2022/3/4',
          purchaser: '中島みゆき',
          review: 'いけてると思う'
        },
        {
          name: '百年前の山を旅する',
          genre: 'スポーツ・アウトドア',
          purchaseDate: '2022/4/30',
          purchaser: '山下達郎',
          review: 'なかなかじゃない'
        },
        {
          name: '新潮日本語漢字辞典',
          genre: '辞典・ことば',
          purchaseDate: '2022/5/5',
          purchaser: '竹内まりや',
          review: 'ありだと思います'
        },
        {
          name: '小澤征爾さんと、音楽について話をする',
          genre: '音楽',
          purchaseDate: '2022/8/17',
          purchaser: '織田哲郎',
          review: '楽しかった'
        },
        {
          name: 'ロシア日記―シベリア鉄道に乗って―',
          genre: '旅行・紀行',
          purchaseDate: '2022/8/23',
          purchaser: '原由子',
          review: '実に感動しました'
        },
        {
          name: '思い出のマーニー',
          genre: '絵本・児童書',
          purchaseDate: '2022/10/9',
          purchaser: '桑田佳祐',
          review: 'やっぱ、最高です'
        },
        {
          name: '極主夫道',
          genre: 'コミックス',
          purchaseDate: '2022/10/13',
          purchaser: '小田和正',
          review: '大変、おもしろい'
        }
      ]
    }
  },
  created () {},
  computed: {},
  methods: {}
}
</script>

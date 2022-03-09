<template>
  <div>
    <v-row dense>
      <v-col>
        <v-card outlined>
          <v-card-title>登録内容</v-card-title>
          <v-card-text>
            <v-form>
              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                    label="管理番号"
                    v-model="upsertParam.controlNo"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-col cols="3">
                  <v-select
                    label="カテゴリ"
                    v-model="upsertParam.category"
                    :items="categories"
                    item-text="name"
                    item-value="code"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    label="本の名前"
                    v-model="upsertParam.bookName"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-col cols="3">
                  <v-select
                    label="状態"
                    v-model="searchParam.status"
                    :items="statuses"
                    item-text="name"
                    item-value="code"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    label="購入日"
                    v-model="upsertParam.purchaseDate"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    label="購入者"
                    v-model="upsertParam.purchasePerson"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-spacer />
                <v-col cols="2">
                  <v-btn
                    color="primary"
                    block
                    depressed
                    @click="upsert"
                  >登録・更新する</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card outlined>
          <v-card-title>フィルター条件</v-card-title>
          <v-card-text>
            <v-form>
              <v-row dense>
                <v-col cols="3">
                  <v-select
                    label="カテゴリ"
                    v-model="searchParam.category"
                    :items="categories"
                    item-text="name"
                    item-value="code"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    label="本の名前"
                    v-model="searchParam.bookName"
                    outlined
                    dense
                    clearable
                  />
                </v-col>
                <v-spacer />
                <v-col cols="2">
                  <v-btn
                    color="primary"
                    block
                    depressed
                    @click="search"
                  >フィルターする</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card outlined>
          <v-card-title>検索結果</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="books"
              disable-pagination
              hide-default-footer
              @click:row="openDetail"
              dense
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: '管理番号',
          value: 'controlNo'
        },
        {
          text: 'カテゴリ',
          value: 'category'
        },
        {
          text: '本の名前',
          value: 'bookName'
        },
        {
          text: '状態',
          value: 'status'
        },
        {
          text: '購入日',
          value: 'purchaseDate'
        },
        {
          text: '購入者',
          value: 'purchasePerson'
        }
      ],
      books: [
        {
          controlNo: '11111',
          category: 'ホラー',
          bookName: 'おばけの話',
          status: '未読',
          purchaseDate: '2022/1/1',
          purchasePerson: '佐藤さん'
        },
        {
          controlNo: '22222',
          category: 'サスペンス',
          bookName: '警察24時',
          status: '完読',
          purchaseDate: '2022/2/1',
          purchasePerson: '伊藤さん'
        },
        {
          controlNo: '33333',
          category: 'ファンタジー',
          bookName: 'ファンタジスタ太郎',
          status: '読中',
          purchaseDate: '2022/3/1',
          purchasePerson: '加藤さん'
        }
      ],
      upsertParam: {
        controlNo: '',
        category: '',
        bookName: '',
        status: '',
        purchaseDate: '',
        purchasePerson: ''
      },
      searchParam: {
        category: '',
        bookName: ''
      },
      categories: [
        {
          code: '1',
          name: 'ホラー'
        },
        {
          code: '2',
          name: 'サスペンス'
        },
        {
          code: '3',
          name: 'ファンタジー'
        }
      ],
      statuses: [
        {
          code: '1',
          name: '未読'
        },
        {
          code: '2',
          name: '読中'
        },
        {
          code: '3',
          name: '完読'
        }
      ]
    }
  },
  async created () {
    const result = await this.$script.sample()
    console.log('サーバー関数実行結果: ', result)
  },
  computed: {},
  methods: {
    upsert () {
      console.log('upsertクリック')
    },
    search () {
      console.log('searchクリック')
    },
    openDetail (rowData) {
      console.log('行クリック', rowData)
    }
  }
}
</script>

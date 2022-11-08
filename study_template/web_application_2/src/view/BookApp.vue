<template>
  <div>
    <!-- 受け取ったSearch-bookイベントをsearchBookで定義する -->
    <Search
      @search-book="searchBook"
    >
    </Search>
    <!-- List.vueに検索結果を受け渡す -->
    <List
      :bookList="bookList"
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
      bookList: {}
    }
  },
  created () {},
  computed: {},
  methods: {
    // searchBook.vueからの戻り値を
    // data部を経由してList.vueに受け渡す
    searchBook (result) {
      this.bookList = result
    }
  }
}
</script>

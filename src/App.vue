<template>
  <div id="app">
    <auto-complete
      v-model="value"
      :fetch-suggestions="querySearch"
      :popperAppendToBody="true"
      placeholder="请输入"
      size="mini"
      value-key="name"
      :clearable="true"
    >
    </auto-complete>
  </div>
</template>

<script>
import AutoComplete from '@/components/AutoComplete'
export default {
  name: 'App',
  components: {
    AutoComplete
  },
  data() {
    return {
      value: '',
      searchList: [],
      selectSearchType: 1,
      valueKey: 'name'
    }
  },
  mounted() {
    const arr = new Array(10000).fill(1).map((v, i) => {
      return {
        statId: i,
        name: 'test' + i
      }
    })
    this.searchList = arr
  },
  methods: {
    querySearch(queryString, cb) {
      let filterData = this.searchList

      if (queryString && queryString.indexOf('所有') === -1) {
        filterData = this.searchList.filter(this.createFilter(queryString))
      }
      const results = [{ name: '所有', statId: 0 }, ...filterData]
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return string =>
        string[this.valueKey]
          .toLowerCase()
          .indexOf(queryString.toLowerCase()) !== -1
    }
  }
}
</script>

<style>
</style>

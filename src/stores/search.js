import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { reqSearchRes, reqTest } from '@/api/index'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      pageList: [{k1:'v1', k2:'v2'}, {k1:'s1', k2: 's2'}],
    }
  },
  getters: {
    tableHeader() {
      return this.pageList.length!=0 ? Object.keys(this.pageList[0]) : []
    }
  },
  actions: {
    async getSeachRes(data) {
      let result = await reqSearchRes(data)
      console.log(result)
      if(result.code == 0) {
        this.pageList = result.data.map((item) => {
          return JSON.parse(item)
      })
        console.log(this.pageList)
      } else {
        throw new Error('搜索失败')
      }
    },
    async test(key) {
      let result = await reqTest(key)
      console.log(result)
      if(result.status == 0) {
        this.page = result.data
      } else {
        throw new Error('搜索失败')
      }
    }
  }
})

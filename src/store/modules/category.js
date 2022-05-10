import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,

  state () {
    return {
      list: topCategory.map(item => ({ name: item }))    }
  },
  mutations: {
    setList (state, headCategory) {
      state.list = headCategory
    }
  },
  actions: {
    async getList ({ commit }) {
      const { result } = await findAllCategory()
      // 获取数据成功，提交mutations进行数据修改
      commit('setList', result)
    }
  }
}
import {
  GET_INDEX_IMG,
} from '../types'

const state = {
  indexImg: '',
}

const mutations = {
  [GET_INDEX_IMG](state, action){
    state.indexImg = action.indexImg
  }
}

export default {
  state,
  mutations
}
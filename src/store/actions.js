import api from '../api'
import * as types from './types'
import img from '../assets/images/demo.jpg'

export const showMsg = ({commit}, content,type='error') => {
  commit(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({commit}) => {
  commit(types.HIDE_MSG)
}

export const getIndexImage = ({commit}) => {
  api.getIndexImage().then(response => {
    if(!response.ok){
      return commit(types.GET_INDEX_IMG, {indexImg: img})
    }
    commit(types.GET_INDEX_IMG, {indexImg: response.data.img})
  }, response => {
    commit(types.GET_INDEX_IMG, {indexImg: img})
  })
}
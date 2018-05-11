import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api/index'

import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex)



const state = {
  articleList: [],
  spilderList:[],
  spiderOneData:[],
  spiderArticleList:[],
  articleDetail:[],
  classifyList:[],
  labelList:[]       
}   
  
export default new Vuex.Store({
  state,
  actions,
  mutations, 
})
 
import * as api from '../api/index'

const actions = {
  async getArticleList({
    commit
  }, data, callback) {
    console.log(callback);

    try {
      const res = await api.getArticleListRequest(data)
      if (res.status == 200) {
        res.data.filter((x) => {
          x.utime = x.utime.substring(0, 10)
        })
        console.log(res.data)
        commit('getArticleList', res.data);
      } else {
        throw new Error('获取文章列表失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async getSpiderList({
    commit
  }, data) {
    try {
      const res = await api.getSpiderListRequest(data)
      if (res.status == 200) {
        console.log(res.data);
        commit('getSpiderList', res.data);
      } else {
        throw new Error('获取文章列表失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async getSpiderOneData({
    commit
  }, data) {
    try {
      const res = await api.getSpiderOneDataRequest(data)
      if (res.status == 200) {
        console.log(res.data);
        commit('getSpiderOneData', res.data);
      } else {
        throw new Error('获取文章列表失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async getSpiderArticleList({
    commit
  }, data) {
    try {
      const res = await api.getSpiderArticleListRequest(data)
      if (res.status == 200) {
        console.log(res.data);
        commit('getSpiderArticleList', res.data);
      } else {
        throw new Error('获取文章列表失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async getArticleDetail({
    commit
  },data){
    try{
      const res = await api.getArticleDetailRequest(data)
      if (res.status == 200) {
        console.log(res.data);
        commit('getArticleDetail', res.data);
      } else { 
        throw new Error('获取文章列表失败')
      }
    } catch (err){
      console.log('您尚未登陆或者session失效')
    }
  }
  ,async getClassifyList({
    commit
  },data){
    try{
      const res = await api.getClassifyListRequest(data)
      if (res.status == 200) {
        commit('getClassifyList', res.data);
      } else { 
        throw new Error('获取文章列表失败')
      } 
    } catch (err){
      console.log('您尚未登陆或者session失效')
    }
  }
}

export default actions

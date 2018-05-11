const mutations = {
  getArticleList(state, articleList) {
    state.articleList = articleList
  },
  getSpiderList(state, spiderList) {
    state.spiderList = spiderList
  },
  getSpiderOneData(state, spiderOneData) {
    state.spiderOneData = spiderOneData
  },
  getSpiderArticleList(state, spiderArticleList) {
    state.spiderArticleList = spiderArticleList
  },  
  getArticleDetail(state, articleDetail) {
    state.articleDetail = articleDetail
  },     
  getClassifyList(state, classifyList) {
    state.classifyList = classifyList
  },      
  getLabelList(state, labelList) {
    state.labelList = labelList
  }       
}

export default mutations
 
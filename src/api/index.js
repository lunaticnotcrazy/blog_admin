import http from "./http";

export const getArticleListRequest = (data) => {
  return http
    .get("articleList", {
      params: data
    })
}
export const getSpiderArticleListRequest = (data) => {
  return http
    .get("articleList", data)
}
export const getSpiderListRequest = (type) => {
  return http
    .get("articleList", {
      params: type
    })
}
export const getSpiderOneDataRequest = (data) => {
  return http
    .post("spider", data)
}
export const getArticleDetailRequest = (data) => {
  return http
    .get("article/", data)
}
export const getClassifyListRequest = (data) => {
  return http
    .get("classify/", data)
} 


// 不走vuex 接口

// 二次编辑 文章同步 
export const saveArtcileDetail = (data) => {
  return http 
    .post('articleSave', data) 
}
export const removeArticle = (data) => {
  return http 
    .get('removeArticle', data) 
}

// 分类接口

// 获取article 表 所有 类型

export const getAllArticleClassify = (data) => {
  return http 
    .get('classify/getAll', data)  
} 
 
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login'

const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const list = r => require.ensure([], () => r(require('@/page/list')), 'list');
const spider = r => require.ensure([], () => r(require('@/page/spider')), 'spider');
const article = r => require.ensure([], () => r(require('@/page/article')), 'article');
const detail = r => require.ensure([], () => r(require('@/page/articleDetail')), 'detail');
const classifyAdd = r => require.ensure([], () => r(require('@/page/classify_add')), 'classify_add');

 
Vue.use(Router)

const routes = [{
  path: '/',
  component: login
}, { 
  path: '/manage',
  component: manage,
  name: '',
  children: [{ 
    path: '',   
    component: home,
  },{ 
    path: 'spider',   
    component: spider,
    meta:['抓取文章'] 
  },{ 
    path: 'home',   
    component: home, 
    meta:['文章列表'] 
  }
  ,{ 
    path: 'article_add',   
    component: article,   
    meta:['添加文章'] 
  }
  ,{ 
    path: 'classify_add',   
    component: classifyAdd,   
    meta:['文章类型'] 
  } 
  ,{ 
    path: 'article_detail/:article_id',   
    component: detail,  
    name:'detail',
    meta:['文章详情']  
  }]   
}, {
  path: '/list',
  component: list
}]
export default new Router({
  routes,
}) 

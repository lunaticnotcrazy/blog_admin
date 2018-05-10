<template>
    <div>
    <admin-head></admin-head>
    <div class="spider-page">
        <el-row class="url-input">
          <el-input v-model="input" placeholder="请输入网址"></el-input>
        </el-row>
      <el-row>
        <el-button type="primary" @click="doSpider('掘金')">掘金</el-button>
      </el-row>
     <el-footer>
       <div class="spider-article-list">
       <el-table
                :data="spiderArticleList"
                highlight-current-row 
                style="width: 100%">  
                <el-table-column
                  prop="article_id" 
                  label="id"
                  width="100">
                   <template slot-scope="scope">
                   <router-link :to="{name:'detail',params:{'article_id':scope.row.article_id}}">
                    <span>{{scope.row.article_id}}</span>  
                   </router-link>  
                </template>  
                </el-table-column>
                <el-table-column
                  prop="title"
                  label="标题"
                  width="200"> 
                </el-table-column>
                <el-table-column
                  prop="source"
                  label="来源"
                  width="50"
                  > 
                </el-table-column> 
                <el-table-column
                  prop="source_url"
                  label="来源网址"
                  width="200"
                  > 
                </el-table-column> 
                <el-table-column
                  prop="ctime"
                  label="抓取时间"
                  
                  > 
                </el-table-column>
            </el-table>
       </div> 
     </el-footer>
    </div> 
    </div>  
</template>
<script>
import adminHead from "@/components/adminHead";
import { mapState, mapActions } from "vuex";
import * as api from "../api/index";

export default {
  data() {
    return {
      input: ""
    };
  },
  computed: {
    ...mapState(["articleList", "spiderArticleList", "spiderOneData"])
  },
  components: {
    adminHead
  },
  methods: {
    ...mapActions([
      "getArticleList",
      "getSpiderArticleList",
      "getSpiderOneData"
    ]),
    async doSpider(data) {
      const url = "https://juejin.im/post/5acf29a26fb9a028d20854c0";
      // !!this.input && this.getSpiderOneData({ url: this.input, source: data });
      if (!this.input) {
        return;
      }
      let res = await api.getSpiderOneDataRequest({
        url: this.input,
        source: data
      });
      console.log(res);
      if (res.data.ok == 1) {
        console.log(213);
        this.getSpiderArticleList({ source_url: this.input });
      }
      // this.getSpiderArticleList({ source_url: url});
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scroped>
.spider-page .url-input {
  margin-bottom: 10px;
}
.spider-page {
  padding: 20px;
}
.spider-article-list {
  margin-top: 20px;
}
</style>
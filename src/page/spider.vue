<template>
    <div>
    <admin-head></admin-head>
    <div class="spider-page">
        <el-row class="url-input">
          <el-input v-model="input" placeholder="请输入网址"></el-input>
        </el-row>
      
      <el-row class="add-label-block"> 
        <span class="spider-tags">标签:</span>
          <el-button type="primary" plain size="mini"  v-for="(item,index) in labelList" :key="index" @click="chooseLabel(item.label)">{{item.label}}</el-button>
      </el-row> 
      <el-row>
        <span class="spider-tags"></span>
        <el-button type="primary" @click="doSpider('掘金')" plain size="mini">掘金</el-button>
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
      input: "",
      label:""
    };
  },
  computed: {
    ...mapState(["articleList", "spiderArticleList", "spiderOneData","labelList"])
  },
  components: {
    adminHead
  },
  methods: {
    ...mapActions([
      "getArticleList",
      "getSpiderArticleList",
      "getSpiderOneData",
      "getLabelList"
    ]),
    async doSpider(data) { 
      // !!this.input && this.getSpiderOneData({ url: this.input, source: data });
      if (!this.input) {
        this.$message({
          message: "请输入地址",
          type: "warning"
        });
        return;
      }
      if (!this.label) {
        this.$message({
          message: "请输入标签",
          type: "warning"
        });
        return;
      }
      let res = await api.getSpiderOneDataRequest({
        url: this.input,
        label:this.label,
        source: data
      });
      if (res.data.ok == 1) {
        this.getSpiderArticleList({ source_url: this.input });
      }  
      // this.getSpiderArticleList({ source_url: url});
    },
    chooseLabel(label){
      this.label = label
    }
  },
  created() {
    this.getLabelList()
  }, 
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
.spider-tags {
  font-size: 12px; 
  margin-right: 20px;
}
.add-label-block {
  margin: 20px 0;
}
</style>
<template>
    <div>
    <admin-head></admin-head>
    <div class="spider-page">
      <div class="classify-input"> 
       <el-input v-model="classify_name" placeholder="请输入名称"></el-input>
       <el-input v-model="classify" placeholder="请输入分类"></el-input>
        <el-button type="primary" plain @click="addClassify()">添加类型</el-button>
       </div>
      <el-row>
        <el-button type="primary" >更改类型</el-button>
      </el-row> 
     <el-footer>
       <div class="spider-article-list">
       <el-table
                :data="classifyList"
                highlight-current-row 
                style="width: 100%">  
                <el-table-column
                  prop="name"
                  label="名称"
                  width="200"> 
                </el-table-column>
                <el-table-column
                  prop="classify"
                  label="分类"
                  > 
                </el-table-column> 
                <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="removeClassify(scope.row.classify)">删除</el-button>
                </template>  
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
      classify_name: "",
      classify: ""
    };
  },
  computed: {
    ...mapState(["classifyList"])
  },
  components: {
    adminHead
  },
  methods: {
    ...mapActions(["getClassifyList"]),
    addClassify() {
      if (!this.classify_name) {
        this.$message({
          message: "请输入类别名称",
          type: "warning"
        });
        return;
      }
      if (!this.classify) {
        this.$message({
          message: "请输入类别英文",
          type: "warning"
        });
        return;
      }
      api
        .addArticleClassify({
          name: this.classify_name,
          classify: this.classify
        })
        .then(doc => {
          if (doc.data.result.ok == 1 && doc.data.result.n) {
            this.getClassifyList();
            this. classify_name = "";
            this. classify = "";
          }  
        });
    },
    removeClassify(classify){
      api.deleteArticleClassify({
        classify:classify
      }).then(doc =>{
        console.log(doc)
       if (doc.status  == 200) {
            this.getClassifyList();
          } 
      }) 
    }
  },
  created() {
    this.getClassifyList();
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
.classify-input {
  margin-bottom: 10px;
  .el-input {
    display: inline-block;
    width: 180px;
  }
}
</style>
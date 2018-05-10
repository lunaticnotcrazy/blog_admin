<template>
    <div >
        <admin-head></admin-head>
        <div class="article-table">
            <div class="handle-block">
               <el-button type="primary" @click="removeArticle()">删除</el-button>
            </div>
            <el-table
                :data="articleList"
                highlight-current-row
                style="width: 100%"
                @selection-change="handleSelectionChange"
                >
                <el-table-column
                  type="selection"
                   width="55">
                </el-table-column>
                <el-table-column
                  label="id"
                  width="70"
                  prop="article_id">
                </el-table-column>
                <el-table-column
                  label="pv"
                  width="70"
                  prop="pv"
                >

                </el-table-column>
                <el-table-column
                  prop="source"
                  label="来源"
                  width="100">  
                  
                </el-table-column>
                <el-table-column
                  prop="utime"  
                  label="时间"
                  width="120"
                  > 
                </el-table-column> 
                <el-table-column
                  prop="title"
                  label="标题"
                  > 
                </el-table-column> 

                <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                   >
                   <router-link :to="{name:'detail',params:{'article_id':scope.row.article_id}}">
                    <span>编辑</span>  
                   </router-link> 
                   </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="removeArticle(scope.row.article_id)">删除</el-button>
                </template>  
              </el-table-column>
            </el-table>
        </div>
    </div>
</template> 
<script>
import adminHead from "@/components/adminHead";
import * as api from "@/api/index";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      multipleSelection: []
    };
  },
  computed: {
    ...mapState(["articleList"])
  },
  created() {
    this.getArticleList();
  },
  components: {
    adminHead
  },
  methods: {
    ...mapActions(["getArticleList"]),
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    removeArticle(id) {
      const removeList = [];
      if (id) {
        removeList.push(id);
      } else {
        this.multipleSelection.forEach(element => {
          removeList.push(element.article_id);
        });
      }
      api.removeArticle({ removeList: removeList }).then(doc => {
        if (doc.data.ok == 1) {
          this.getArticleList();
        }
      });
    }
  }
};
</script>
<style lang="less" scroped>
.article-table {
  margin: 10px;
  border: 1px solid #dfe6ec;
}
.article-table table {
}
.article-table .el-table th {
  background: #eef1f6;
  color: #333;
}
.handle-block {
  margin: 10px auto;
  padding: 0 15px;
}
</style>
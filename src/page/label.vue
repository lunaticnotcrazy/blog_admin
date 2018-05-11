<template>
    <div>
    <admin-head></admin-head>
    <div class="spider-page">
      <div class="classify-input"> 
       <el-input v-model="label" placeholder="请输入标签"></el-input>
        <el-button type="primary" plain @click="addLabel()">添加标签</el-button>
       </div>  
     <el-footer>
       <div class="spider-article-list">
       <el-table 
                :data="labelList"
                highlight-current-row 
                style="width: 100%">  
                <el-table-column
                  prop="label"
                  label="名称"
                  width="200"> 
                </el-table-column> 
                <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="removeLabel(scope.row.label)">删除</el-button>
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
      label: "",
    };
  },
  computed: {
    ...mapState(["labelList"])
  },
  components: {
    adminHead
  },
  methods: {
    ...mapActions(["getLabelList"]),
    addLabel() {
      if (!this.label) {
        this.$message({
          message: "请输入标签名称",
          type: "warning"
        });
        return;
      }
      api
        .addlabel({
          label: this.label,
        })
        .then(doc => {
          if (doc.status == '200') {
            this.getLabelList();
            this. label = "";
          }  
        }); 
    }, 
    removeLabel(label){
      api.deletelabel({
        label:label 
      }).then(doc =>{
       if (doc.status  == 200) {
            this.getLabelList(); 
          } 
      }) 
    }  
  },
  created() {
    this.getLabelList();
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
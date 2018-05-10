<template>
    <div>
    <admin-head></admin-head>
    <div class="spider-page">
      <el-row>
        <el-button type="primary" >获取类型</el-button>
        <el-button type="primary" >添加类型</el-button>
        <el-button type="primary" >删除类型</el-button>
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
    ...mapState(["classifyList"])
  }, 
  components: {
    adminHead
  },
  methods: {
    ...mapActions([
      "getClassifyList",
    ]),
      
  },
  created() {
    this.getClassifyList()
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
</style>
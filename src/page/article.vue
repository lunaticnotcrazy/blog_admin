<template>
    <div class="page-article-release">
        <admin-head></admin-head>
        <div >
          <el-form ref="form" class="article-form" label-width="80px">
            <el-form-item label="文章标题">
              <el-input v-model="title"></el-input>
            </el-form-item>
            </el-form>        
           <el-row class="article-tags-block"> 
            <span class="spider-tags">标签:</span>
            <el-button type="primary" plain size="mini"  v-for="(item,index) in labelList" :key="index" @click="chooseLabel(item.label)">{{item.label}}</el-button>
          </el-row>   
        </div>
         <div class="editor-container">  
          <UE :config=config ref="ue"></UE>
        </div>
        <div class="release-wrap">
            <el-button type="primary" class="release-btn" @click="saveContent()">提交</el-button>
        </div>
    </div>
</template> 
<script>
import adminHead from "@/components/adminHead";
import { mapState, mapActions } from "vuex";

import "../../static/UE/ueditor.config.js";
import "../../static/UE/ueditor.all.min.js";
import "../../static/UE/lang/zh-cn/zh-cn.js";
import "../../static/UE/ueditor.parse.min.js";
import UE from "@/components/ue.vue";
import * as api from "@/api/index";
export default {
  components: {
    adminHead,
    UE
  },
  data() {
    return {
      title: "",
      label:"", 
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      }
    };
  },
  computed: {
    ...mapState(["labelList"])
  },
  methods: {
    ...mapActions(["getLabelList"]),
    saveContent() {
      let content = this.$refs.ue.getUEContent();
      if (!this.title) {
        this.$notify({
          title: "标题不能为空"
        });
        return;
      }
      if (!content) {
        this.$notify({
          title: "内容不能为空"
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
      api
        .saveArtcileDetail({
          title: this.title,
          content: content,
          label:this.label
        }) 
        .then(doc => {
          if (doc.data.ok == 1) {
            this.$notify({
              title: "保存成功",
              type: "success"
            });
          }
        });
    },
    chooseLabel(label) {
      this.label = label;
    }
  }
};
</script>
<style lang="less" scroped>
.article-table {
  padding: 20px;
  border: 1px solid #ccc;
}
.article-form {
  padding: 20px;
  width: 500px;
}
.editor-container {
  padding: 0 20px 0;
}
.release-wrap {
  padding: 20px;
}
.release-btn {
  float: right;
}
.article-tags-block {
  margin: 0 20px 20px;
}
</style>
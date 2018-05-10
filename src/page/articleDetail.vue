<template>
  <div class="det-wrap">
    <el-container style="height:700px"> 
      <el-header class="det-header">
       <el-button type="primary"  @click="saveContent()">保存内容</el-button>        
      </el-header>
      <el-main class="det-con">
        <div >
          <el-form ref="form" class="article-form" label-width="80px">
            <el-form-item label="文章标题">
              <el-input v-model="articleDetail[0].title"></el-input>
            </el-form-item>
            </el-form>            
        </div>
        <div class="editor-container">  
          <UE :defaultMsg=articleDetail[0].content :config=config ref="ue"></UE>
        </div>
      </el-main>
    </el-container> 
    
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import "../../static/UE/ueditor.config.js";
import "../../static/UE/ueditor.all.min.js";
import "../../static/UE/lang/zh-cn/zh-cn.js";
import "../../static/UE/ueditor.parse.min.js";
import UE from "@/components/ue.vue";
import * as api from "@/api/index";
export default {
  components: { UE },
  data() {
    return {
      //   defaultMsg: "",
      title: "",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      }
    };
  },
  computed: {
    ...mapState(["articleDetail"])
  },
  created() {
    this.getArticleDetail({ article_id: this.$route.params.article_id });
  },
  methods: {
    ...mapActions(["getArticleDetail"]),
    getUEContent() {
      let content = this.$refs.ue.getUEContent();
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
    },
    saveContent() {
      let content = this.$refs.ue.getUEContent();
      let title = this.articleDetail[0].title;
      api
        .saveArtcileDetail({
          title: title,
          content: content,
          article_id: this.$route.params.article_id
        })
        .then(doc => {
          if (doc.data.ok == 1) {
            this.$notify({
              title: "保存成功",
              type: "success"
            });
          }
        });
    }
  },
  mounted() {}
};
</script>
<style lang="less" scroped>
.det-wrap {
  padding: 20px;
}
.det-con {
}

.article-form {
  padding: 20px;
  width: 500px;
}
.det-header {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.det-con {
  border: 1px solid #ccc;
}
</style> 


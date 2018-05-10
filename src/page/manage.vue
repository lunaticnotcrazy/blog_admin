<template>
<div class="manage-page">
    <left-side></left-side>
</div>     
</template> 
<script>
import leftSide from "../components/leftSide";
export default {
  components: {
    leftSide, 
  }
};
</script>
<style lang="less">
.manage-page {
  height: 100%; 
}
.manage-page .el-menu{
    // background: rgb(50, 64, 87)
} 
</style>
 
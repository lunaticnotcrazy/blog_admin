<template>
    <div class="header_container">
        <el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>     
        <el-dropdown menu-align='start'> 
			<img src="http://cangdu.org:8001/img/162ada5f4518976.jpg" class="avator" width="36" height="36">
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">首页</el-dropdown-item>
				<el-dropdown-item command="singout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown> 
    </div>  
</template>
<script>
</script> 
<style lang="less">
@import "../style/common";
.header_container {
  background-color: #eff2f7;
  padding: 0 10px;
  height: 60px;
  .flex-space;
}
</style>
<template>
    <div class="manage_page fillcontain">
		<el-row style="height: 100%;"> 
	  		<el-col :span="4"  style="min-height: 100%; " class="manage_left_side" > 
				<el-menu  style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="/manage/"><i class="el-icon-menu"></i>首页</el-menu-item>
					<!-- <el-submenu index="2">   
						<template slot="title"><i class="el-icon-document"></i>文章管理</template>
						<el-menu-item index="home">文章列表</el-menu-item>
					</el-submenu> -->  
					<el-menu-item index="/manage/home">  
						<template slot="title"><i class="el-icon-document"></i>
						<span>文章列表</span>
						</template>
					</el-menu-item> 
					<el-menu-item index="/manage/spider">  
                        <i class="el-icon-star-on"></i>
						<span>抓取管理</span>
					</el-menu-item>   
                    <el-menu-item index="/manage/article_add">
                        <i class="el-icon-edit"></i>
						<span>添加文章</span>
                        </el-menu-item> 
					<el-menu-item index="/manage/classify_add">
                        <i class="el-icon-edit"></i>
						<span>文章类型</span>
                        </el-menu-item>  
					<el-menu-item index="/manage/label">
                        <i class="el-icon-edit"></i>
						<span>文章标签</span> 
                        </el-menu-item>  
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-setting"></i>
						<span>设置</span>
						</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>  
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<!-- <keep-alive> -->
				    <router-view></router-view>
				<!-- </keep-alive> -->
			</el-col>
		</el-row>
  	</div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "../style/mixin.less";
.manage_left_side {
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
}
.manage_left_side .el-menu {
  border-right: none;
  overflow: hidden;
}
</style>
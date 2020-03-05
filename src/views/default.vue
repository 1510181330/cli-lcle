<template>
	<el-container style="height: 500px; border: 1px solid #eee">
	  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
		  <h4>为之则易，不为则难</h4>
	    <el-menu :default-openeds="[]">
	      <el-submenu index="1">
	        <template slot="title"><i class="el-icon-user"></i>人员相关</template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1"><router-link to="/default/personsumary"><el-link type="info">人员汇总</el-link></router-link></el-menu-item>
	          <el-menu-item index="1-2"><router-link to="/default/onduty"><el-link type="info">值班表相关</el-link></router-link></el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-submenu index="2">
	        <template slot="title"><i class="el-icon-document"></i>文件相关</template>
	        <el-menu-item-group>
	          <el-menu-item index="2-1"><router-link to="/default/rStep1"><el-link type="info">记录制作</el-link></router-link></el-menu-item>
			  <el-menu-item index="2-1"><router-link to="/default/recordsumary"><el-link type="info">历史记录</el-link></router-link></el-menu-item>
			  <el-menu-item index="2-1"><router-link to="/default/sumaryfile"><el-link type="info">文件生成</el-link></router-link></el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-submenu index="3">
	        <template slot="title"><i class="el-icon-sugar"></i>系统相关</template>
	        <el-menu-item-group>
				<el-menu-item index="2-1"><router-link to="/default/configadmin"><el-link type="info">管理员设置</el-link></router-link></el-menu-item>
				<el-menu-item index="2-1"><router-link to="/default/about"><el-link type="info">关于系统</el-link></router-link></el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
		  <el-submenu index="4">
		    <template slot="title"><i class="el-icon-magic-stick"></i>黑科技</template>
		    <el-menu-item-group>
				<el-menu-item index="2-1"><router-link to="/default/classinfo"><el-link type="info">班级信息一揽子计划</el-link></router-link></el-menu-item>
				<el-menu-item index="2-1"><router-link to="/default/enablemates"><el-link type="info">我和我的小伙伴</el-link></router-link></el-menu-item>
				<el-menu-item index="2-1"><router-link to="/default/matespro"><el-link type="info">超级空课表</el-link></router-link></el-menu-item>
		    </el-menu-item-group>
		  </el-submenu>
	    </el-menu>
	  </el-aside>
	  
	  <el-container>
	    <el-header style="text-align: right;">
				<a href="javascript:;" style="font-size: 15px;" id="touxiang">
					<img src="http://39.108.110.147:888/touxiang.jpg" class="layui-nav-img">
					{{name}}
				</a>
	    </el-header>
	    
	    <el-main>
			<transition mode="out-in">
				<router-view></router-view>
			</transition>
	    </el-main>
	  </el-container>
	</el-container>
</template>

<script>
	export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
		name:'上官瑞谦'
      }
    }
  };
</script>

<style>
	.el-header {
	    background-color: #409EFF;
	    color: #333;
	    line-height: 60px;
	}
	  
	.el-aside {
	    color: #333;
	}
	.layui-nav-img{width:45px;height:45px;margin-right:10px;border-radius:50%;margin-top: 8px;}
	#touxiang {
		margin-left: 850px;
		font-size: 15px;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	
	.v-enter,
	.v-leave-to{
		opacity: 0;
		transform: translateX(80px);
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.4s ease;
	}
</style>
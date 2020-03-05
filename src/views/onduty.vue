<template>
	<div style="text-align: center;">
		<div>
			<el-tag>无聊的周一</el-tag>
		    <el-checkbox-group v-model="day1">
		      <el-checkbox-button v-for="lession in lessions" :label="lession" :key="lession">{{lession}}</el-checkbox-button>
			  <el-divider direction="vertical"></el-divider>
		    </el-checkbox-group>
		</div>
		<el-divider></el-divider>
		<div>
			<el-tag>犯困的周二</el-tag>
		    <el-checkbox-group v-model="day2">
		      <el-checkbox-button v-for="lession in lessions" :label="lession" :key="lession">{{lession}}</el-checkbox-button>
		    </el-checkbox-group>
		</div>
		<el-divider></el-divider>
		<div>
			<el-tag>有趣的周三</el-tag>
		    <el-checkbox-group v-model="day3">
		      <el-checkbox-button v-for="lession in lessions" :label="lession" :key="lession">{{lession}}</el-checkbox-button>
		    </el-checkbox-group>
		</div>
		<el-divider></el-divider>
		<div>
			<el-tag>闭馆的周四</el-tag>
		    <el-checkbox-group v-model="day4">
		      <el-checkbox-button v-for="lession in lessions" :label="lession" :key="lession">{{lession}}</el-checkbox-button>
		    </el-checkbox-group>
		</div>
		<el-divider></el-divider>
		<div>
			<el-tag>愉快的周五</el-tag>
		    <el-checkbox-group v-model="day5">
		      <el-checkbox-button v-for="lession in lessions" :label="lession" :key="lession">{{lession}}</el-checkbox-button>
		    </el-checkbox-group>
		</div>
		<el-divider></el-divider>
		<el-row>
			<el-button type="primary" v-on:click="submit">提交信息</el-button>
			<el-button type="success" v-on:click="create">生成值班表</el-button>
		</el-row>
		<el-dialog title="老肖的模态框" :visible.sync="dialogFormVisible">
		  <h2>制作值班表</h2>
		  <el-progress type="circle" :percentage="percentage"></el-progress>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		methods:{
			axiosSubmit:function(param){
				this.$axios.post('/freeclass/addFreeClass', param).then((data)=>{
					console.log(data)
				}).catch((error)=>{
					console.log(error)
				})
			},
			submit:function(){
				var param = {
					day1:this.day1,
					day2:this.day2,
					day3:this.day3,
					day4:this.day4,
					day5:this.day5
				}
				this.$confirm('此操作将会更新空课信息, 是否继续?', '老肖的提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					//1069070069
				}).then(()=>{
					console.log("我点击了确定操作！")
					this.axiosSubmit(param)
				}).catch(() => {
					console.log("我点击了取消操作！")        
				});
			},
			create:function(){
				this.dialogFormVisible = true
			}
		},
		data:function(){
			return {
				lessions:[
					"第一大节",
					"第二大节",
					"第三大节",
					"第四大节"
				],
				day1:[],
				day2:[],
				day3:[],
				day4:[],
				day5:[],
				dialogFormVisible:false,
				percentage:25
			}
		}
	}
</script>

<style>
</style>

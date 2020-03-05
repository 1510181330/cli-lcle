<template>
	<div>
		<el-tag effect="dark">使用下拉框和输入框，对班级信息进行调整，点击按钮提交信息</el-tag>
		<div>
			<h2>1.选择年级</h2>
			<el-select v-model="gradle" placeholder="请选择">
			    <el-option
			      v-for="item in allGradles"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<br><br><br><br>
		<div>
			<h2>2.选择班级</h2>
			<div style="float: left" v-for="item in classnames">
				<label for="name1" style="font-size: 20px">班级{{item.id}}</label>
				<br><br>
				<el-select v-model="item.name" placeholder="请选择" v-on:change="onclass(item.name)">
				    <el-option
				      v-for="item in selectNames"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
				<el-divider direction="vertical"></el-divider>
			</div>
		</div>
		<div style="margin-top: 220px;">
			<el-button type="primary" round v-on:click="submit">确认</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			//console.log(filename1+"--->"+filename2+"--->"+filename3)
			//获取当前所有年级
			this.$axios.get('/record/selectAllGradles').then((data)=>{
				if(data.data.code==100){
					this.allGradles = []
					var before = data.data.data.data
					for(var i = 0; i < before.length; i++){
						var item = {id:(i+1), lable:before[i], value:before[i]}
						this.allGradles.push(item)
					}
				}
				else{
					//弹窗信息
					this.$alert('页面渲染失败，请联系系统管理员', '老肖的提示', {
						confirmButtonText: '确定'
					});
				}
			}).catch((error)=>{
				console.log(error)
			})
			
			//初始化班级下拉框
			var num = this.$store.classNumber
			this.classnames=[]
			for(var i = 0; i < num; i++){
				var exp = {id:(i+1), name:''}
				this.classnames.push(exp)
			}
		},
		methods:{
			onclass:function(one){
				//unable获取到当前已经被选中的班级
				this.unable = []
				var select = this.classnames
				for(var i = 0; i < select.length; i++){
					if(select[i].name!=''){
						this.unable.push(select[i].name)
					}
				}
			},
			submit:function(){
				this.unable.sort()
				var flag = 0;
				//如果this.unable的数组长度不等于班级数量则说明有空
				if(this.unable.length!=this.$store.classNumber){
					this.$alert('班级选择框不能为空', '老肖的提示', {
						confirmButtonText: '确定'
					});
					return ;
				}
				//排序后检查是否存在重复
				for(var i = 1; i < this.unable.length; i++){
					if(this.unable[i]==this.unable[i-1]){
						flag = 1;
					}
				}
				if(flag==1){
					this.$alert('班级名称不可重复！', '老肖的提示', {
						confirmButtonText: '确定'
					});
				}
				else{
					//将信息储存到vuex中，以便以后使用
					this.$store.selectGradle = this.gradle
					this.$store.selectClasses = this.unable
					this.$router.push('/default/rStep3')
				}
			}
		},
		watch:{
			//选中年级发生变化
			'gradle':function(){
				this.$store.selectGradle=this.gradle
				var param = this.gradle
				this.$axios.get('/record/selectClassname?gradle='+param).then((data)=>{
					if(data.data.code==100){
						var gnames = data.data.data.data
						this.selectNames = []
						this.rootselectNames = []
						for(var i = 0; i < gnames.length; i++){
							var selectName = {id:(i+1), lable:gnames[i], value:gnames[i]}
							this.selectNames.push(selectName)
							this.rootselectNames.push(selectName)
						}
					}
					else{
						//弹窗信息
						this.$alert('页面渲染失败，请联系系统管理员', '老肖的提示', {
							confirmButtonText: '确定'
						});
					}
				}).catch((error)=>{
					
				})
			}
		},
		data:function(){
			return {
				gradle:'',
				allGradles:[],
				classnames:[
					{id:1, name:''},
					{id:2, name:''},
					{id:3, name:''},
					{id:4, name:''},
					{id:5, name:''}
				],
				selectNames:[
					{id:1, lable:'', value:''}
				],
				rootselectNames:[],
				unable:[]
			}
		}
	}
</script>

<style>
</style>

<template>
	<div>
		<el-tag effect="dark">很好，现在，我们需要填充缺课人员和请假人员</el-tag>
		<div>
			<h2>1.选择课节</h2>
			<div style="float: left">
				<label style="font-size: 20px">周几</label>
				<br><br>
				<el-select v-model="week1" placeholder="请选择">
				    <el-option
				      v-for="item in weeks"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div style="float: left; margin-left: 40px">
				<label style="font-size: 20px">第几大节</label>
				<br><br>
				<el-select v-model="week2" placeholder="请选择">
				    <el-option
				      v-for="item in weeks"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
		</div>
		<br><br>
		<br><br>
		<br><br>
		<div>
			<h2>2.输入任课教师与课程名</h2>
			<div style="float: left">
				<label style="font-size: 20px">课程名称</label>
				<br><br>
				<el-input v-model="lession" placeholder="请输入内容" style="width: 200px;"></el-input>
			</div>
			<div style="float: left; margin-left: 40px">
				<label style="font-size: 20px">教师名称</label>
				<br><br>
				<el-input v-model="teacher" placeholder="请输入内容" style="width: 200px;"></el-input>
			</div>
		</div>
		<br><br>
		<br><br>
		<br><br>
		<div>
			<h2>3.请选中缺课人数</h2>
			<div style="float: left" v-for="item in this.absenNumber">
				<label style="font-size: 20px">{{item.name}}</label>
				<br><br>
				<el-select v-model="item.num" placeholder="请选择">
				    <el-option
				      v-for="item in numbers"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
				<el-divider direction="vertical"></el-divider>
			</div>
		</div>
		<br><br>
		<br><br>
		<br><br>
		<div>
			<h2>4.请输入缺课人员姓名，如有多人用加号连接</h2>
			<div style="float: left" v-for="item in this.absenNumber">
				<label style="font-size: 20px">{{item.name}}</label>
				<br><br>
				<el-input v-model="item.person1" placeholder="请输入内容" style="width: 200px;"></el-input>
				<el-divider direction="vertical"></el-divider>
			</div>
		</div>
		<br><br>
		<br><br>
		<br><br>
		<div>
			<h2>5.请输入请假人员姓名，如有多人用加号连接</h2>
			<div style="float: left" v-for="item in this.absenNumber">
				<label style="font-size: 20px">{{item.name}}</label>
				<br><br>
				<el-input v-model="item.person2" placeholder="请输入内容" style="width: 200px;"></el-input>
				<el-divider direction="vertical"></el-divider>
			</div>
		</div>
		<br><br>
		<br><br>
		<br><br>
		<div>
			<el-button type="primary" round v-on:click="submit">确认</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		mounted:function(){
			this.absenNumber = []
			for(var i = 0; i < this.$store.selectClasses.length; i++){
				var item = {id:(i+1), name:this.$store.selectClasses[i], num:'', person1:'', person2:''}
				this.absenNumber.push(item)
			}
		},
		methods:{
			submit:function(){
				//确定当前为周几第几大节
				if((this.week1=='')&&(this.week2=='')){
					//弹窗信息
					this.$alert('请确定当前为周几第几大节', '老肖的提示', {
						confirmButtonText: '确定'
					});
				}
				//教师以及课程的输入框是否为空
				if((this.lession=='')&&(this.teacher=='')){
					//弹窗信息
					this.$alert('任课教师和课程值得拥有姓名', '老肖的提示', {
						confirmButtonText: '确定'
					});
				}
			}
		},
		watch:{
			'absenNumber':function(){
				console.log("我看到了！")
			}
		},
		data:function(){
			return {
				weeks:[
					{id:1, lable:'一', value:'一'},
					{id:2, lable:'二', value:'二'},
					{id:3, lable:'三', value:'三'},
					{id:4, lable:'四', value:'四'},
					{id:5, lable:'五', value:'五'}
				],
				numbers:[
					{id:1, lable:1, value:1},
					{id:2, lable:2, value:2},
					{id:3, lable:3, value:3},
					{id:4, lable:4, value:4},
					{id:5, lable:5, value:5},
					{id:6, lable:6, value:6},
					{id:7, lable:7, value:7},
					{id:8, lable:8, value:8},
					{id:9, lable:9, value:9},
					{id:10, lable:10, value:10},
					{id:11, lable:11, value:11},
					{id:12, lable:12, value:12},
					{id:13, lable:13, value:13},
					{id:14, lable:14, value:14},
					{id:15, lable:15, value:15},
					{id:16, lable:16, value:16},
					{id:17, lable:17, value:17},
					{id:18, lable:18, value:18},
					{id:19, lable:19, value:19},
					{id:20, lable:20, value:20},
					{id:21, lable:21, value:21},
					{id:22, lable:22, value:22},
					{id:23, lable:23, value:23},
					{id:24, lable:24, value:24},
					{id:25, lable:25, value:25}
				],
				week1:'',
				week2:'',
				absenNumber:[
					{id:1, name:'', num:'', person1:'', person2:''}
				],
				lession:'',
				teacher:''
			}
		}
	}
</script>

<style>
</style>

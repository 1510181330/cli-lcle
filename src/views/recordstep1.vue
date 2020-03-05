<template>
	<div>
		<el-tag effect="dark">首先你要选择班级的数量，和查课人（限定两人♪(^∇^*)），制表人（本次操作者）</el-tag>
		<div>
			<h2>1.班级数量</h2>
			<el-select v-model="classNumber" placeholder="请选择">
			    <el-option
			      v-for="item in classNumbers"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div>
			<h2>2.查课人</h2>
			<div style="float: left">
				<label for="name1" style="font-size: 20px">查课人1</label>
				<br><br>
				<el-input v-model="name1" id="name1" placeholder="请输入内容" style="width: 200px;"></el-input>
			</div>
			<div style="float: left; margin-left: 40px">
				<label for="name2" style="font-size: 20px">查课人2</label>
				<br><br>
				<el-input v-model="name2" id="name2" placeholder="请输入内容" style="width: 200px;"></el-input>
			</div>
		</div>
		<br><br>
		<br><br>
		<br>
		<div>
			<h2>3.制表人</h2>
			<div>
				<label for="name3" style="font-size: 20px">制表人</label>
				<br><br>
				<el-input v-model="name3" id="name3" placeholder="请输入内容" style="width: 200px;"></el-input>
			</div>
		</div>
		<br><br>
		<br><br>
		<el-button type="primary" round v-on:click="submit">确认</el-button>
	</div>
</template>

<script>
	export default {
		methods:{
			submit:function(){
				var name1 = this.name1
				var name2 = this.name2
				var name3 = this.name3
				var number = this.classNumber
				if(name1==''||name2==''||name3==''){
					this.$alert('信息未完全填充', '老肖的提示', {
					    confirmButtonText: '确定',
					});
				}
				else if((name1!=name2)&&(name3==name1||name3==name2)){
					//使用vuex保存相关数据
					this.$store.classNumber=number
					this.$store.optname1=name1
					this.$store.optname2=name2
					this.$store.optname3=name3
					this.$router.push('/default/rStep2')
				}
				else{
					this.$alert('制表人应为两个不同查课人中的一个', '老肖的提示', {
					    confirmButtonText: '确定',
					});
				}
			}
		},
		data:function(){
			return {
				classNumber:1,
				classNumbers:[
					{id:1, lable:1, value:1},
					{id:2, lable:2, value:2},
					{id:3, lable:3, value:3},
					{id:4, lable:4, value:4},
					{id:5, lable:5, value:5}
				],
				name1:'',
				name2:'',
				name3:''
			}
		}
	}
</script>

<style>
</style>

<template>
	<div>
		<el-row>
			<el-select v-model="depvalue" placeholder="请选择">
			    <el-option v-for="item in depnames" v-bind:label="item.label" v-bind:value="item.value" v-bind:key="item.id"></el-option>
			</el-select>
			<el-divider direction="vertical"></el-divider>
			<el-button type="primary" round v-on:click="add">添加成员</el-button>
		</el-row>
		<el-divider></el-divider>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="addTime" label="加入日期" width="150"></el-table-column>
			<el-table-column prop="username" label="姓名" width="120"></el-table-column>
			<el-table-column prop="depname" label="部门" width="120"></el-table-column>
			<el-table-column prop="phone" label="电话" width="300"></el-table-column>
			<el-table-column prop="qq" label="QQ" width="120"></el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button type="text" size="small">查看</el-button>
					<el-button type="text" size="small" v-on:click="edit(scope.row)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog title="老肖的模态框" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="姓名" :label-width="formLabelWidth" v-bind:required="form.username == '' ? true:false">
		      <el-input v-model="form.username"></el-input>
		    </el-form-item>
			<el-form-item label="密码" :label-width="formLabelWidth" v-bind:required="form.password == '' ? true:false">
			  <el-input v-model="form.password" type="password" v-on:change="pasChange"></el-input>
			</el-form-item>
			<el-form-item label="重复密码" :label-width="formLabelWidth" v-bind:required="form.repassword == '' ? true:false">
			  <el-input v-model="form.repassword" type="password" v-on:change="repasChange"></el-input>
			</el-form-item>
		    <el-form-item label="所属部门" :label-width="formLabelWidth">
		      <el-select v-model="form.depname" placeholder="请选择部门">
		        <el-option label="学风督察部" value="学风督察部"></el-option>
		        <el-option label="信息管理部" value="信息管理部"></el-option>
				<el-option label="组织宣传部" value="组织宣传部"></el-option>
				<el-option label="思想教育部" value="思想教育部"></el-option>
				<el-option label="办公室" value="办公室"></el-option>
		      </el-select>
		    </el-form-item>
			<el-form-item label="电话号码" :label-width="formLabelWidth" v-bind:required="form.phone == '' ? true:false">
			  <el-input v-model="form.phone"></el-input>
			</el-form-item>
			<el-form-item label="QQ" :label-width="formLabelWidth" v-bind:required="form.qq == '' ? true:false">
			  <el-input v-model="form.qq"></el-input>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" v-on:click="updatebtn">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			let that = this;
			that.getallDefault();
		},
		methods: {
			getallDefault:function(){
				this.$axios.get('/user/getAllDefault').then((data)=>{
					//数据存储到本地，方便部门查询
					this.primaryData = data.data.data.data
					this.tableData = data.data.data.data
				}).catch((error)=>{
					console.log(error)
				})
			},
			edit:function(row){
				//回显数据
				this.form.id=row.id
				this.form.username = row.username
				this.form.depname = row.depname
				this.form.phone = row.phone
				this.form.qq = row.qq
				this.dialogFormVisible = true
			},
			//密码验证
			pasChange:function(){
				if(this.form.repassword!=undefined&&this.form.repassword!=''){
					if(this.form.password!=this.form.repassword){
						this.$alert('密码与重复密码不匹配！', '老肖的提示', {
						    confirmButtonText: '确定',
						});
						this.form.password=''
						this.form.repassword=''
					}
				}
			},
			repasChange:function(){
				if(this.form.password!=undefined&&this.form.password!=''){
					if(this.form.password!=this.form.repassword){
						this.$alert('密码与重复密码不匹配！', '老肖的提示', {
						    confirmButtonText: '确定',
						});
						this.form.password=''
						this.form.repassword=''
					}
				}
			},
			textIsempty:function(){
				if((this.form.username!='')&&(this.form.password!='')&&(this.form.repassword!='')&&(this.form.phone!='')&&(this.form.qq!='')){
					//弹窗信息
					//不含有空串
					this.isEmpty = 1;
				}
				else{
					this.isEmpty = 0;
					this.$alert('部分选项为必填项，不可以为空', '老肖的提示', {
					    confirmButtonText: '确定'
					});
				}
			},
			updateurl:function(param){
				this.$axios.post('/user/updateUserInfo', param).then((data)=>{
					//更改data中的数据，从而刷新页面数据
					if(data.data.code==100){
						//弹窗信息
						this.$alert('操作完成', '老肖的提示', {
							confirmButtonText: '确定'
						});
						//更新操作完成，更新data数据
						this.getallDefault();
					}
					else{
						//发生错误
						//弹窗信息
						this.$alert('操作出了点问题', '老肖的提示', {
							confirmButtonText: '确定'
						});
					}
				}).catch((error)=>{
					console.log(error)
				})
			},
			updatebtn:function(){
				this.textIsempty();
				if(this.isEmpty==1){
					//设置url参数
					//咱也不知道为啥，进到回调函数以后，数据就没了，在这里缓存一下
					var param = {
						id:this.form.id,
						username:this.form.username,
						password:this.form.password,
						depname:this.form.depname,
						phone:this.form.phone,
						qq:this.form.qq
					}
					this.$confirm('此操作将更新数据, 是否继续?', '老肖的提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning',
						//1069070069
					}).then(()=>{
						console.log("我点击了确定操作！")
						this.updateurl(param)
					}).catch(() => {
						console.log("我点击了取消操作！")        
					});
					this.dialogFormVisible = false
					this.form.username = ''
					this.form.depname = ''
					this.form.password = ''
					this.form.repassword = ''
					this.form.phone = ''
					this.form.qq = ''
				}
			},
			add:function(){
				this.form.id=-1
				this.form.username = ''
				this.form.depname = ''
				this.form.password = ''
				this.form.repassword = ''
				this.form.phone = ''
				this.form.qq = ''
				this.dialogFormVisible = true
			}
		},
		watch:{
			depvalue:function(){
				this.tableData = []
				this.primaryData.forEach((item,index,array)=>{
				    if(item.depname==this.depvalue){
						this.tableData.push(item)
					}
				})
			}
		},
		data() {
			return {
				isEmpty:null,
				primaryData: [],
				tableData: [],
				depvalue: '',
				depnames:[
					{id:1, label:'学风督察部', value:'学风督察部'},
					{id:2, label:'组织宣传部', value:'组织宣传部'},
					{id:3, label:'信息管理部', value:'信息管理部'},
					{id:4, label:'思想教育部', value:'思想教育部'},
					{id:5, label:'办公室', value:'办公室'}
				],
				dialogFormVisible:false,
				form:{
					id:null,
					username:'',
					password:'',
					repassword:'',
					depname:'',
					phone:'',
					qq:''
				},
				formLabelWidth: '120px'
			}
		}
	}
</script>
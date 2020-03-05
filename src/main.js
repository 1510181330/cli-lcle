import Vue from 'vue'
//我们挂载的组件文件
import App from './App.vue'
//我们使用的路由js
import router from './router'
import store from './store'
//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './views/login.vue'
//import './assets/style.css'
//import './assets/flows.js'
import axios from 'axios'

Vue.prototype.$axios = axios
//这里设置了一个根url,我们所有的请求都会在localhost:8080后面加一个/api
//举个例子:原来请求localhost:8080/admin/login---->localhost:8080/api/admin/login
//而我们新加上的vue.config.js里面配置了一个代理,他会把/api和之前的内容变成target的值
//还是上面的例子, 假设target: 'http://localhost:8088/'
//那么最终的请求是localhost:8088/admin/login,确实神奇
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

//启动外部插件
Vue.use(ElementUI)
Vue.config.productionTip = false

var filename1, filename2, filename3

new Vue({
	el:'#app',
	data:{
		
	},
	methods:{
		mounted:function(){
			router.push('/login')
		}
	},
	router,
	store,
	render: h => h(App)
})

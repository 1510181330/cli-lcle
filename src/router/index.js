import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Default from '../views/default.vue'
import PersonSumary from '../views/personsumary.vue'
import OnDuty from '../views/onduty.vue'
import rStep1 from '../views/recordstep1.vue'
import rStep2 from '../views/recordstep2.vue'
import rStep3 from '../views/recordstep3.vue'
import RecordSumary from '../views/recordsumary.vue'
import SumaryFile from '../views/sumaryfile.vue'
import ConfigAdmin from '../views/configadmin.vue'
import About from '../views/about.vue'
import ClassInfo from '../views/classinfo.vue'
import EnableMates from '../views/enablemates.vue'
import MatesPro from '../views/matespro.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Login
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/default',
		component: Default,
		children:[
			{path:'personsumary', component:PersonSumary},
			{path:'onduty', component:OnDuty},
			{path:'rStep1', component:rStep1},
			{path:'rStep2', component:rStep2},
			{path:'rStep3', component:rStep3},
			{path:'recordsumary', component:RecordSumary},
			{path:'sumaryfile', component:SumaryFile},
			{path:'configadmin', component:ConfigAdmin},
			{path:'about', component:About},
			{path:'classinfo', component:ClassInfo},
			{path:'enablemates', component:EnableMates},
			{path:'matespro', component:MatesPro}
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

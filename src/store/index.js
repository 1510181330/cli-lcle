import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  classNumber:1,
	  optname1:'',
	  optname2:'',
	  optname3:'',
	  selectGradle:'',
	  selectClasses:[],
	  selectWeek1:'',
	  selectWeek2:'',
	  teacher:'',
	  lession:'',
	  absenceNumber:[],
	  absencePerson:[],
	  leavePerson:[]
  },
  mutations: {
	  classNumberSetter:function(state, num1){
		  state.classNumber = num1
	  },
	  optname1Setter(state, name){
		  state.optname1=name
	  },
	  optname2Setter(state, name){
		  state.optname2=name
	  },
	  optname3Setter(state, name){
		  state.optname3=name
	  },
	  selectGradleSetter(state, gradle){
		  state.selectGradle = gradle
	  },
	  selectClassesSetter(state, classes){
		  state.selectClasses=classes
	  },
	  selectWeek1Setter(state, week1){
		  state.selectWeek1=week1
	  },
	  selectWeek2Setter(state, week2){
		  state.selectWeek2=week2
	  },
	  teacherSetter(state, teacher){
		  state.teacher=teacher
	  },
	  lessionSetter(state, lession){
		  state.lession=lession
	  },
	  absenceNumberSetter(state, absenceNumber){
		  state.absenceNumber=absenceNumber
	  },
	  absencePersonSetter(state, absencePerson){
		  state.absencePerson=absencePerson
	  },
	  leavePersonSetter(state, leavePerson){
		  state.leavePerson=leavePerson
	  }
  },
  actions: {
  },
  modules: {
  }
})

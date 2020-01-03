import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/question'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		questions
	}
})

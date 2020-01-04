import axios from 'axios';

const url = 'http://localhost:5000/api/questions/';

const state = {
	questions: [],
};

const getters = {
	allQuestions: (state) => state.questions,
	dowolna(state) {
        return state.questions;
    },
	html(state) {
        return state.questions.filter(item => item.technology === "html");
    },
    css(state) {
        return state.questions.filter(item => item.technology === "css");
	},
	javascript(state) {
        return state.questions.filter(item => item.technology === "javascript");
	},
	nodejs(state) {
        return state.questions.filter(item => item.technology === "nodejs");
	},
	angular(state) {
        return state.questions.filter(item => item.technology === "angular");
	},
	react(state) {
        return state.questions.filter(item => item.technology === "react");
	},
	vue(state) {
        return state.questions.filter(item => item.technology === "vue");
	}
};

const mutations = {
	setQuestions: (state, questionsItems) => {
		state.questions = questionsItems;
	}
};

const actions = {
	async fetchQuestions({ commit }) {
		const response = await axios.get(url);

		commit('setQuestions', response.data);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
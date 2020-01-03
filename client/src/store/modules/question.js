import axios from 'axios';

const url = 'http://localhost:5000/api/questions/';

const state = {
	questions: [],
};

const getters = {
	allQuestions: (state) => state.questions,
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
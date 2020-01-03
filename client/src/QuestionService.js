import axios from 'axios';

const url = 'http://localhost:5000/api/questions/';

class QuestionService {
	// Get Questions
	static getQuestions() {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(question => ({
						...question
					}));
				);
			} catch (error) {
				reject(error);
			}
		})
	}

	// Create Question
	static insertQuestion(text, answer, type) {
		return axios.post(url, {
			text,
			answer,
			type
		})
	}

	// Delete Question
	static deleteQuestion(id) {
		return axios.delete(`${url}${id}`);
	}

}

export default QuestionService;
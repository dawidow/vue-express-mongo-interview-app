<template>
	<div>
		<div v-for="question in allQuestions" :key="question._id">
			<h3>{{ question.text }}</h3>
			<p>{{ question.answer }}</p>
			<p>{{ question.technology }}</p>
			<p>{{ question.difficulty }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'Questions',
	data() {
		return {
			lang: '',
			level: ''
		}
	},
	methods: {
		...mapActions(['fetchQuestions'])
	},
	computed: {
		...mapGetters(['allQuestions']),

	},
	created() {
		this.fetchQuestions();
	}
}
</script>

<style lang="scss" scoped>

</style>
<template>
	<div>
		<div class="select-group">
            <label class="select__label">Technologia</label>
            <select class="select" v-model="technology">
                <option value="dowolna">dowolna</option>
                <option value="html">html5</option>
                <option value="css">css3</option>
                <option value="javascript">javascript</option>
                <option value="nodejs">nodejs</option>
                <option value="angular">angular</option>
                <option value="react">react</option>
                <option value="vue">vue</option>
            </select>
        </div>

		<div v-for="question in data" :key="question._id">
			<h3>{{ question.text }}</h3>
			<p>{{ question.answer }}</p>
			<p>{{ question.technology }}</p>
			<p>{{ question.difficulty }}</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	name: 'Questions',
	data() {
		return {
			technology: 'dowolna'
		}
	},
	methods: {
		...mapActions(['fetchQuestions'])
	},
	computed: {
		data() {
                if(this.technology === "html") {
                    return this.html;
                } else if(this.technology === "css") {
                    return this.css;
                } else if(this.technology === "javascript") {
					return this.javascript;
				} else if(this.technology === "nodejs") {
					return this.nodejs;
				} else if(this.technology === "angular") {
					return this.angular;
				}  else if(this.technology === "react") {
					return this.react;
				} else if(this.technology === "vue") {
					return this.vue;
				} else {
					return this.dowolna;
				}
		},
		...mapState(['questions']),
		...mapGetters(['allQuestions', 'html', 'css', 'javascript', 'nodejs', 'angular', 'react', 'vue', 'dowolna']),
	},
	created() {
		this.fetchQuestions();
	}
}
</script>

<style lang="scss" scoped>

</style>
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

		<div v-for="question in data" :key="question._id" class="question">
			<h2 class="question__title">{{ question.text }}</h2>
			<button class="question__btn">Pokaż odpowiedź</button>
			<p class="question__answer">{{ question.answer }}</p>
			<p class="question__technology">{{ question.technology }}</p>
			<p class="question__difficulty">{{ question.difficulty }}</p>
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

	.question {
		width: 700px;
		max-width: 90%;
		height: 300px;
		background-color: #151515;
		border-radius: 8px;
		color: #fff;
		display: block;
		margin: 50px auto;
		padding: 10px;
		position: relative;

		&__title {
			color: #fff;
		}

		&__answer {
			color: #6F6F6F;
		}

		&__btn {
			background-color: transparent;
			border: 1px solid #6F6F6F;
			color: #fff;
			border-radius: 5px;
			padding: 10px;
			text-transform: uppercase;
			cursor: pointer;
			transition: .3s all ease-in-out;

			&:hover {
				background-color: #6F6F6F;
				color: #151515;
				border: 1px solid #fff;
			}
		}

		&__difficulty {
			position: absolute;
			top: -15px;
			left: 50%;
			transform: translate(-50%, -50%);
			text-transform: uppercase;
			padding: 5px 20px;
			border-radius: 5px;
			color: #6F6F6F;
			background-color: #151515;
		}
	}

</style>
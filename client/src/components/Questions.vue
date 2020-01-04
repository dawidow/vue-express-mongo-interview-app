<template>
	<div>
		<div class="select-group">
            <label class="select__label">Sortuj według technologii</label>
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

		<div v-for="(question, index) in data" :key="question._id" class="question">
			<h2 class="question__title" v-html="question.text">{{ question.text }}</h2>
			<button  v-if="!isOpen" class="question__btn" @click="showAnswer(index)">Pokaż/ukryj odpowiedź</button>
			<button  v-else class="question__btn" @click="hideAnswer()">Pokaż/ukryj odpowiedź</button>
			<p  class="question__answer" :class="{active: index === activeItem}">{{ question.answer }}</p>
			<p class="question__information">{{ question.technology }} / {{ question.difficulty }}</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	name: 'Questions',
	data() {
		return {
			technology: 'dowolna',
			activeItem: -1,
			isOpen: false
		}
	},
	methods: {
		...mapActions(['fetchQuestions']),
		showAnswer(idx) {
			this.activeItem = idx;
			this.isOpen = true;
		},
		hideAnswer() {
			this.activeItem = -1;
			this.isOpen = false;
		}
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

	.select-group {
		.select {
			display: block;
			margin: 10px auto 0;
			width: 200px;
		}
	}

	.question {
		width: 900px;
		max-width: 80%;
		background-color: #fff;
		border-radius: 8px;
		color: #fff;
		display: block;
		font-size: 16px;
		margin: 50px auto;
		padding: 10px 15px;
		box-shadow: 0 5px 15px 0 hsla(0,2%,49%,.14);
		position: relative;

		&__title {
			color: #151515;
			line-height: 32px;
		}

		&__answer {
			color: #444444;
			font-weight: 500;
			padding: 10px 30px;
			display: none;

			&.active {
				display: block;
			}
		}

		&__btn {
			background-color: transparent;
			border: 2px solid #4A47C7;
			color: #4A47C7;
			border-radius: 5px;
			font-size: .8em;
			font-weight: 500;
			min-width: 220px;
			padding: 10px 5px;
			margin: 5px 0 15px;
			text-transform: uppercase;
			outline: none;
			cursor: pointer;
			transition: .2s all ease-in-out;

			&:hover {
				background-color: #4A47C7;
				color: #fff;
				border: 2px solid #4A47C7;
			}
		}

		&__information {
			position: absolute;
			top: -15px;
			left: 50%;
			transform: translate(-50%, -50%);
			text-transform: uppercase;
			font-weight: 500;
			padding: 5px 20px;
			border-radius: 5px;
			color: #4A47C7;
			background-color: #fff;
		}
	}

	@media screen and (max-width: 768px) {

	}

</style>
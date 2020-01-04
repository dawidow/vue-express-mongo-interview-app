<template>
	<div>
			<h2 class="question__title" v-html="question.text">{{ question.text }}</h2>
			<button class="question__btn" @click="toggle()">Pokaż/ukryj odpowiedź</button>
			<p class="question__answer" v-show="isActive">{{ question.answer }}</p>
			<p class="question__information">{{ question.technology }} / {{ question.difficulty }}</p>
	</div>
</template>

<script>
export default {
	name: 'Question',
	props: ['question'],
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
		}
	},
}
</script>

<style lang="scss">
		.question__title {
			color: #151515;
			line-height: 32px;
		}

		.question__answer {
			color: #444444;
			font-weight: 500;
			padding: 10px 30px;
		}

		.question__btn {
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

		.question__information {
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

		@media screen and (max-width: 768px) {
			.question__information {
				padding: 5px 8px;
				font-size: .8em;
			}

			.question__answer {
				padding: 0;
			}
		}

</style>
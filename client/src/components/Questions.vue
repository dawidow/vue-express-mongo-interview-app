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

		 <div v-for="question in data" :key="question._id" class="question">
			<Question :question="question" />
		 </div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Question from './Question';

export default {
	name: 'Questions',
	components: {
		Question
	},
	data() {
		return {
			technology: 'dowolna',
		}
	},
	methods: {
		...mapActions(['fetchQuestions']),
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

<style lang="scss">

	.select-group {
		margin-top: 40px;

		select {
			display: block;
			margin: 10px auto;
			width: 150px;
			padding: 5px 35px 5px 5px;
			font-size: 16px;
			border: 1px solid #ccc;
			height: 34px;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			cursor: pointer;
			background: url(https://image.flaticon.com/icons/svg/636/636035.svg) 96% / 15% no-repeat #eee;
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

	}

</style>
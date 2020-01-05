<template>
  <div class="quote">
	  <h4 class="quote__text">"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."</h4>
	  <p class="quote__author">~Albert Einstain</p>
  </div>
</template>

<script>
export default {
	name: 'Quote'
}
</script>

<style lang="scss">

	.quote {
		max-width: 65%;
		margin: 120px auto;
		font-size: 1.1em;
		position: relative;

		&__text {
			position: relative;
			margin: 0;
			color: #141414;
		}

		&__author {
			font-style: italic;
			color: #141414;
		}

		&::before {
			content:  url('../assets/quote.svg');
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 150px;
			height: 150px;
			opacity: .05;
		}
	}

	@media screen and (max-width: 768px) {
		.quote {
			max-width: 90%;
			font-size: 1.2em;
		}
	}

</style>
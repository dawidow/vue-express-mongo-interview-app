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
		max-width: 60%;
		margin: 120px auto;
		position: relative;

		&__text {
			position: relative;
			margin: 0;
		}

		&__author {
			font-style: italic;
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

</style>
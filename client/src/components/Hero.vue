<template>
  <div>
	  	<img class="hero__image" src="../assets/interview.svg" alt="interview flat image">
		<h1 class="hero__title">Rozmowa rekrutacyjna? Pikuś!</h1>
		<p class="hero__description">Na tym portalu poznasz najczęściej spotykane pytania na rozmowie o prace na stanowisko Front-End Developera.</p>
  </div>
</template>

<script>
export default {
	name: 'Hero',
}
</script>

<style lang="scss">

	.hero__image {
		width: 300px;
	}

	.hero__title {
		color: #fff;
		font-size: 2em;
	}

	.hero__description {
		color: #fff;
	}

	@media screen and (max-width: 768px) {
		.hero__image {
			width: 180px;
		}

		.hero__title {
			font-size: 1.5em;
		}
	}

</style>
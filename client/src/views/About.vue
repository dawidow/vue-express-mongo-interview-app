<template>
  <div class="about">
    <h1 class="about__header">O projekcie</h1>
	<div class="about__wrapper">
		<p class="about__description">Projekt powstał na potrzeby własne jak i do osobistego portfolio.</p>
		<p class="about__description--main">Poniższy projekt został stworzony przy użyciu takich technologii jak: <br /><b>HTML5, CSS3, JavaScript (ES6+), VueJS (Vuex, Vue-router, Axios), NodeJS (Express, MongoDB)</b></p><p class="about__description--main">Dane są pobierane dzięki napisanemu przeze mnie API typu REST. Baza danych znajduje się na serwerach MongoDB Atlas a strona została umieszczona na platformie Heroku..</p>
		<p class="about__description--main">Link do repozytorium tego projektu dostępny jest pod <a href="https://github.com/dawidow/vue-express-mongo-interview-app">tym linkiem.</a></p>
	</div>
  </div>
</template>

<style lang="scss" scoped>
	.about {

		&__header {
			margin: 60px 0 20px;
		}

		&__wrapper {
			width: 90%;
			margin: 0 auto;
		}

		.about__description {
			color: #141414;
			font-size: 18px;

			&--main {
				font-size: 16px;

				a {
					text-decoration: none;
					color: #4A47C7;
				}
			}
		}
	}
</style>
<template>
  <div id="app">
	  <div class="hero">
		  <div class="content">
				<div class="nav">
					<router-link to="/">Home</router-link>
					<router-link to="/about">About</router-link>
				</div>
				<h1 class="hero__title">Rozmowa rekrutacyjna? Pikuś!</h1>
				<p class="hero__description">Na tym portalu poznasz najczęściej spotykane pytania na rozmowie o prace o stanowisko Front-End Developera.</p>
		  </div>
	  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss">
*, *::before, *::after {
	box-sizing: border-box;
}

body, html {
	margin: 0;
	background-color: #F4F5F6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
//   color: #2c3e50;
}

.hero {
	height: 90vh;
	background-color: #F4F5F6;
	position: relative;
	overflow: hidden;

	.content {
		max-width: 90%;
		margin: 0 auto;
		padding: 0 20px;
		position: relative;

		.hero__title {
			color: #fff;
			font-size: 2em;
		}

		.hero__description {
			color: #fff;
		}
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(-225deg, #4A47C7 0%, rgb(70, 68, 207) 48%, rgb(58, 56, 190) 100%);
		border-radius: 0% 0% 50% 50% / 0% 0% 70% 70%;
		transform: scalex(1.5);
	}

	.nav {
		padding: 30px;
		display: flex;

		a {
			font-weight: bold;
			color: #fff;
			padding: 0 5px;
			text-decoration: none;

			&.router-link-exact-active {
			font-weight: 700;
			}
	}
	}
}

@media screen and (max-width: 768px) {
	.hero::before {
		border-radius: 0% 0% 50% 50% / 0% 0% 35% 35%;
	}
}
</style>

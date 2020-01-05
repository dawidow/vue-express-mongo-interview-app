<template>
  <div id="app">
	  <div class="hero">
		  <div class="content">
				<div class="nav">
					<router-link to="/">Strona główna</router-link>
					<router-link to="/about">O projekcie</router-link>
				</div>
				<Hero />
		  </div>
	  </div>
    <router-view/>
	<Quote />
	<Footer />
  </div>
</template>

<script>
import Hero from './components/Hero';
import Footer from './components/Footer';
import Quote from './components/Quote';

export default {
	name: 'App',
	components: {
		Hero,
		Footer,
		Quote
	}
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
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(220deg, #4A47C7 0%, #2929a3 99%, #2929a3 100%);
		border-radius: 0% 0% 50% 50% / 0% 0% 70% 70%;
		transform: scalex(1.5);
	}

	.nav {
		padding: 30px;
		display: flex;
		justify-content: space-between;

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

@media screen and (max-width: 330px) {
	.hero {
		height: 90vh;
	}
}

@media screen and (min-width: 331px) and (max-width: 768px) {

	.hero {
		height: 70vh;

		&::before {
			border-radius: 0% 0% 50% 50% / 0% 0% 35% 35%;
		}
	}
}
</style>

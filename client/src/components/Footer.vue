<template>
  <div class="footer">
	  <p class="footer__info">Made with   <span class="footer__heart"></span>  by <a class="footer__link" href="https://dowczarz.pl">Dawid Owczarz.</a></p>
  </div>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss">
	.footer {
		margin: 0 auto 30px;

		&__info {
			color: #4946C6;
		}

		&__link {
			text-decoration: none;
			color: #4946C6;
			font-weight: 700;
		}

		&__heart {
			display: inline-block;
			width: 20px;
			height: 20px;
			background: #ff0000;
			top: 50%;
			opacity: 1;
			margin: 0 10px;
			position: relative;
			transform: translateY(-50%) rotate(45deg) scale(1);
			animation-name: heartbeat;
			animation-duration: 2s;
			animation-iteration-count: infinite;
			}

			&__heart::after, &__heart::before {
			content: '';
			width: 20px;
			height: 20px;
			background: #ff0000;
			border-radius: 50%;
			position: absolute;
			top: 0;
			left: -50%;
			}

			&__heart::after {
			top: -50%;
			left: 0;
			}

			@keyframes heartbeat {
			0% { transform: rotate(45deg) scale(1); opacity: 1; }
			50% { transform: rotate(45deg) scale(0.5); opacity: 0.5; }
			100% { transform: rotate(45deg) scale(1); opacity: 1; }
			}
	}
</style>
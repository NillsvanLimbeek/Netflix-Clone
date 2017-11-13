<template lang="html">
	<div class="footer-wrapper">
		<div class="black-fade"></div>
		<div class="background">
			<p>Coded with <span><i class="fa fa-heart" aria-hidden="true"></i></span> by <a href="https://github.com/NillsvanLimbeek" target="_blank">Nills van Limbeek</a></p>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>
	@import "../../scss/_reset.scss";
	@import "../../scss/_variables.scss";

	.footer-wrapper {
		@include open-sans;
		width: 100%;
		background-color: #141414;
		position: relative;
	}

	.black-fade {
		width: 100vw;
		height: 100px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
	}

	.background {
		@include flex-center;
		height: 75px;

		p {
			color: white;
		}

		i {
			margin: 0 5px;
		}

		a {
			color: white;

			&:active,
			&:visited {
				color: white;
			}
		}
	}
</style>
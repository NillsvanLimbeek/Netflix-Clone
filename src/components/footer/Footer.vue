<template lang="html">
	<div class="footer-wrapper">
		<div class="black-fade"></div>
		<div class="background"></div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>
	@import "../../scss/reset.scss";
	@import "../../scss/variables.scss";

	.footer-wrapper {
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
		height: 150px;
	}
</style>
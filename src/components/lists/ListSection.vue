<template lang="html">
	<div class="list-wrapper">
		<app-poster-list :input="this.$store.state.netflix" class="netflix"></app-poster-list>
		<app-item-list :input="this.$store.state.action" class="action"></app-item-list>
		<app-item-list :input="this.$store.state.drama" class="drama"></app-item-list>
		<app-item-list :input="this.$store.state.comedy" class="comedy"></app-item-list>
		<app-item-list :input="this.$store.state.fantasy" class="fantasy"></app-item-list>
	</div>
</template>

<script>
	import PosterList from "./PosterList.vue"
	import ItemList from "./ItemList.vue"

	export default {
		components: {
			appPosterList: PosterList,
			appItemList: ItemList,
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/reset.scss";
	@import "../../scss/variables.scss";

	.list-wrapper {
		background-color: black;
	}

	.netflix,
	.action,
	.drama,
	.comedy {
		margin-bottom: 45px;
	}
</style>
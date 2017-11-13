<template lang="html">
	<div class="search-wrapper">
			<app-search-detail 
				v-for="(result, index) in filterArray" 
				:key="result.id"
				@showIndex="showIndex(index)">
				
				<img slot="image" class="backdrop-img" :src="baseUrl + result.backdrop_path" alt="">
				<p slot="text" class="backdrop-text">{{ result.title || result.name }}</p>
			</app-search-detail>
	</div>
</template>

<script>
	import SearchDetail from "./SearchDetail.vue"

	export default {
		data() {
			return {
				baseUrl: "https://image.tmdb.org/t/p/w500/",
				// results: this.input
			}
		},
		methods: {
			//Push index number to selectedIndex
			showIndex(index) {
				this.$store.state.selectedIndex = index;
			}
		},
		computed: {
			filterArray() {
				return this.input.filter(function(result) {
					if (result.media_type == "movie" || "tv") {
						if(result.backdrop_path !== null) {
							return true;	
						}
					}
				});
			}	
		},
		props: ["input"],
		components: {
			appSearchDetail: SearchDetail
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/_reset.scss";
	@import "../../scss/_variables.scss";
	@import "../../scss/_elements.scss";

	.search-wrapper {
		@include flex-center;
		flex-flow: row wrap;
		width: 100vw;
		margin-top: 75px;
		color: white;
		background-color: black;
	}
</style>
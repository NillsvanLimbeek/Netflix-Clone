<template>
	<div class="app">
		<app-header class="header"></app-header>

		<transition-group name="fade">
			<app-hero-section class="hero-section" v-if="showMainSection" key="hero"></app-hero-section>
			<app-list-section class="list-section" v-if="showMainSection" key="list"></app-list-section>
		</transition-group>

		<app-search-section class="search-section" :input="this.$store.state.search" v-if="!showMainSection"></app-search-section>
		<app-footer></app-footer>

		<modal	name="item-detail"
				width="80%" 
				height="50%"
				transition="ease-in-out">
			<app-item-detail-modal></app-item-detail-modal>
		</modal>
	</div>
</template>

<script>
	import Header from "./components/header/Header.vue";
	import HeroSection from "./components/hero/HeroSection.vue";
	import ListSection from "./components/lists/ListSection.vue";
	import SearchSection from "./components/search/SearchSection.vue";
	import Footer from "./components/footer/Footer.vue";
	import ItemDetailModal from "./components/itemDetail/ItemDetailModal.vue"

	export default {
		data() {
			return {

			}
		},
		computed: {
			showMainSection() {
				return this.$store.state.mainSection;
			}
		},
		components: {
			appHeader: Header,
			appHeroSection: HeroSection,
			appListSection: ListSection,
			appSearchSection: SearchSection,
			appFooter: Footer,
			appItemDetailModal: ItemDetailModal
		}
	}
</script>

<style lang="scss" scoped>
	@import "./scss/_reset.scss";
	@import "./scss/_variables.scss";
	@import "./scss/_elements.scss";


	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.header {
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.85);
		flex: 1 0 auto;
	}

	.hero-section {
		flex: 1 0 auto;
		z-index: 1;
	}

	.list-section {
		margin-top: -100px;
		z-index: 2;
		flex: 1 0 auto;
	}

	.search-section {
		flex: 1 0 auto;
		z-index: 1;
	}

	.footer {
		flex: 1 0 auto;
		z-index: 0;
	}

	//Modal Overlay Background
	.v--modal-overlay {
		background: rgba(0, 0, 0, 0.9);
	}

	//Fade Transition
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity .35s ease-in-out .25s;
	}

	.fade-enter-to {
		opacity: 1;
	}

	.fade-leave {
		opacity: 1;
	}

	.fade-leave-active {
		transition: opacity .35s ease-in-out .25s;
	}

	.fade-leave-to {
		opacity: 0;
	}
</style>
<template>
	<div class="header-wrapper">
		<img src="logo.png" alt="Netflix Logo">

		<div class="header-menu">
			<div class="left" @mouseover="showExploreDropdown = true" @mouseleave="showExploreDropdown = false">
				<p>Explore
					<i class="fa fa-play"></i>
				</p>
				<transition name="fade">
					<app-explore-dropdown v-if="showExploreDropdown" :genres="genres" :menus="menus"></app-explore-dropdown>
				</transition>
			</div>

			<div class="right">
				<div class="search-field">
					<app-search-bar></app-search-bar>
				</div>

				<div class="alert-btn" @mouseover="showAlertDropdown = true" @mouseleave="showAlertDropdown = false">
					<i class="fa fa-bell bell-icon"></i>
					<transition name="fade">
						<app-alert-dropdown v-if="showAlertDropdown" :alerts="alerts"></app-alert-dropdown>
					</transition>
				</div>

				<div class="user-btn" @mouseover="showUserDropdown = true" @mouseleave="showUserDropdown = false">
					<p>
						<i class="fa fa-square user-icon" :style="{ color: selectedColor }"></i>
						<span class="name-text">{{ selectedUser }}</span>
						<i class="fa fa-play arrow"></i>
					</p>
					<transition name="fade">
						<app-user-dropdown v-if="showUserDropdown" :users="users"></app-user-dropdown>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ExploreDropdown from "./ExploreDropdown.vue";
	import AlertDropdown from "./AlertDropdown.vue";
	import UserDropdown from "./UserDropdown.vue";
	import SearchBar from "./SearchBar.vue";

	export default {
		data() {
			return {
				//Conditions for dropdown menus
				showExploreDropdown: false,
				showAlertDropdown: false,
				showUserDropdown: false,

				//User objects for UserDropdown
				users: [{
						color: "#4ada4a",
						name: "Nills"
						},
						{
						color: "#e2e259",
						name: "Marissa"
						},
						{
						color: "#cc993c",
						name: "Charlie"
						}
				],

				//Genres & Menus for ExploreDropdown
				genres: ["Series", "Action", "Anime", "Comedy", "Documentaries", "Drama", "Horror", "International", "War",
					"Romance", "Sci-Fi & Fantasy", "Stand Up", "Thriller", "Family"
				],
				menus: ["Homepage", "My List", "Originals", "New", "Audio & Subtitles", "How can you watch Netflix?"],

				//Alerts objects for AlertDropdown
				alerts: [{
						title: "Rick & Morty",
						message: "New Episodes",
						dateAdded: "2 weeks ago",
						imgUrl: "https://image.tmdb.org/t/p/w500/pfTlxypaLQ8KHecKrD7EFcAzEUs.jpg"
						},
						{
						title: "Mindhunter",
						message: "Newcomer",
						dateAdded: "1 month ago",
						imgUrl: "https://image.tmdb.org/t/p/w500/63tvg7N3o1bodWb2Vjzo9jxbPWc.jpg"
						},
						{
						title: "Boogie Nights",
						message: "Newcomer",
						dateAdded: "2 months ago",
						imgUrl: "https://image.tmdb.org/t/p/w500/wWRL5dG2UTF08OyBEG7235rqFnu.jpg"
						}
				]
			}
		},
		//Display the selectedUser & selectedColor
		computed: {
			selectedUser() {
				return this.$store.state.selectedUser;
			},
			selectedColor() {
				return this.$store.state.selectedColor;
			}
		},
		components: {
			appExploreDropdown: ExploreDropdown,
			appAlertDropdown: AlertDropdown,
			appUserDropdown: UserDropdown,
			appSearchBar: SearchBar
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/_reset.scss";
	@import "../../scss/_variables.scss";
	@import "../../scss/_elements.scss";

	.header-wrapper {
		@include open-sans;
		display: flex;
		width: 100%;
		height: 75px;
	}

	img {
		height: 85px;
		margin: 0 35px;
		transform: translateY(-10px);
	}

	.header-menu {
		display: flex;
		justify-content: space-between;
		width: 100%;

		.left {
			@include flex-align;
			position: relative;
			cursor: pointer;

			p {
				color: $netflix-red;
				font-weight: 700;
			}

			i {
				margin-left: 10px;
				font-size: 15px;
				color: $netflix-red;
				transform: rotate(90deg) scaleX(0.5) translateX(5px);
			}
		}

		.right {
			@include flex-align;
			padding-right: 75px;

			.search-field {
				color: white;

				.search-text {
					font-size: 16px;
				}

				.search-icon {
					font-size: 12px;
					margin-right: 10px;
					transform: translateY(-2px);
				}
			}

			.alert-btn {
				display: flex;
				position: relative;
				color: white;
				margin: 0 35px;
				cursor: pointer;

				.bell-icon {
					font-size: 25px;
				}
			}

			.user-btn {
				display: flex;
				position: relative;
				color: white;
				cursor: pointer;

				.name-text {
					margin: 0 5px 0 10px;
				}

				.arrow {
					font-size: 10px;
					transform: rotate(90deg) scaleX(0.5) translateX(-1px);
				}

				.user-icon {
					font-size: 20px;
				}
			}
		}
	} 
	
	//Dropdown Transition
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-to {
		@include fade-in;
	}

	.fade-leave {
		opacity: 1;
	}

	.fade-leave-to {
		opacity: 0;
		@include fade-in;
	}
</style>
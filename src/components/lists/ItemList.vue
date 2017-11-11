<template lang="html">
	<div class="list">
		<p class="title-text">{{ input.title }}
			<span>
				<i class="fa fa-chevron-right arrow"></i>
			</span>
		</p>

		<div class="poster-list">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(movie, index) in input.arr" :key="movie.id">

					<app-backdrop-detail 
						@showInfo="showItemDetail = $event" 
						@showIndex="showIndex(index)" 
						:genre="genre">

						<img slot="image" class="backdrop-img" :src="baseUrl + movie.backdrop_path" alt="">
						<p slot="text" class="backdrop-text">{{ movie.title || movie.name }}</p>
					</app-backdrop-detail>
				</swiper-slide>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
		</div>

		<transition name="open">
			<div class="wrapper" v-if="showItemDetail">
				<app-item-detail></app-item-detail>
			</div>
		</transition>
	</div>
</template>

<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	import BackdropDetail from "./detail/BackdropDetail.vue"
	import ItemDetail from "../itemDetail/ItemDetail.vue"

	export default {
		data() {
			return {
				genre: this.input.genre,
				baseUrl: "https://image.tmdb.org/t/p/w500/",
				swiperOption: {
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					slidesPerView: 5,
					slidesPerGroup: 5,
					speed: 750,
					autoHeight: true
				}
			}
		},
		props: ["input"],
		components: {
			swiper,
			swiperSlide,
			appBackdropDetail: BackdropDetail,
			appItemDetail: ItemDetail
		},
		methods: {
			//HTTP Request
			getData() {
				this.$http.get(this.input.url)
					.then(response => {
						return response.json();
					})
					.then(data => {
						for (let key in data.results) {
							this.input.arr.push(data.results[key]);
						}
					})
			},
			//Push Index number to selectedIndex
			showIndex(index) {
				this.$store.state.selectedIndex = index;
			}
		},
		computed: {
			showItemDetail() {
				switch(this.genre) {
					case "action":
						return this.$store.state.action.itemDetail;
						break;
					case "drama":
						return this.$store.state.drama.itemDetail;
						break;
					case "comedy":
						return this.$store.state.comedy.itemDetail;
						break;
					case "fantasy":
						return this.$store.state.fantasy.itemDetail;
						break;
				}
			}
		},
		//Excexute on start up
		mounted: function () {
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/_reset.scss";
	@import "../../scss/_variables.scss";
	@import "../../scss/_elements.scss";
	@import "../../../node_modules/swiper/dist/css/swiper.css";

	.list {
		@include open-sans;
		width: 99vw;
	}

	.title-text {
		@include title-text;

		.arrow {
			opacity: 0;
		}

		i {
			margin-left: 7px;
			transition: all .4s ease-in-out;
		}

		&:hover .arrow {
			opacity: 1;
			margin-left: 15px;
		}
	}

	.poster-list {
		@include flex-center-align;
		overflow-x: hidden;

		img {
			width: 100%;
		}
	}

	.wrapper {
		max-height: 60vh;
	}

	//Swiper Adjustments
	.swiper-container.swiper-container-horizontal.swiper-container-autoheight {
		padding: 1% 30px;
	}

	.swiper-button-prev,
	.swiper-button-next {
		top: 40%;
	}


	//Open Transition
	.open-enter {
		max-height: 0px;
		opacity: 0;
	}

	.open-enter-active {
		@include open-transition;
	}

	.open-enter-to {
		max-height: 60vh;
		opacity: 1;
	}

	.open-leave {
		max-height: 60vh;
		opacity: 1;
	}

	.open-leave-active {
		@include close-transition;
	}

	.open-leave-to {
		max-height: 0;
		opacity: 0;
	}
</style>
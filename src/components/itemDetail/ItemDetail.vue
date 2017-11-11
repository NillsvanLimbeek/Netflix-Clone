<template lang="html">
	<div class="info-wrapper">
		
		<div class="close">
			<i class="fa fa-times" @click="closeDetail"></i>
			<div class="radial"></div>
		</div>

		<div class="info">
			<p class="title">{{ showTitle }}</p>
			<p class="overview">{{ showOverview }}</p>
			
			<div class="buttons">
				<p class="red"><i class="fa fa-play" aria-hidden="true"></i>Play</p>
				<p class="white"><i class="fa fa-plus" aria-hidden="true"></i>My List</p>
			</div>

			<div class="rate">
				<div class="thumbs-up">
					<i class="fa fa-thumbs-o-up thumbs-icon" aria-hidden="true"></i>
					<i class="fa fa-circle-thin circle-icon" aria-hidden="true"></i>
				</div>

				<div class="thumbs-down">
					<i class="fa fa-thumbs-o-down thumbs-icon" aria-hidden="true"></i>
					<i class="fa fa-circle-thin circle-icon" aria-hidden="true"></i>
				</div>
				<p>Rate this title</p>
			</div>
		</div>


		<div class="background">
			<div class="fade"></div>
			<img :src="baseUrl + showBackdrop" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: "https://image.tmdb.org/t/p/original/",
				tvUrl: "https://www.themoviedb.org/tv",
				movieUrl: "https://www.themoviedb.org/movie"
			}
		},
		methods: {
			closeDetail() {
				this.$store.state.netflix.itemDetail = false;
				this.$store.state.action.itemDetail = false;
				this.$store.state.drama.itemDetail = false;
				this.$store.state.comedy.itemDetail = false;
				this.$store.state.fantasy.itemDetail = false;


			},
		},
		computed: {
			showTitle() {
				return this.$store.getters.showTitle;
			},
			showBackdrop() {
				return this.$store.getters.showBackdrop;
			},
			showOverview() {
				return this.$store.getters.showOverview;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/_reset.scss";
	@import "../../scss/_variables.scss";
	@import "../../scss/_elements.scss";

	.info-wrapper {
		position: relative;
		height: 60vh;
		width: 100%;
		overflow: hidden;
	}

	.close {
		display: flex;
		justify-content: flex-end;
		position: absolute;
		width: 100%;
		z-index: 2;
		
		.radial {
			width: 100px;
			background: radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 75%);
		}

		i {
			color: white;
			font-size: 45px;
			margin: 25px;
			transform: translateX(92px);
			cursor: pointer;
		}
	}


	.info {
		@include flex-center;
		flex-direction: column;
		position: absolute;
		height: 100%;
		width: 40%;

		.title {
			@include open-sans;
			z-index: 2;
			font-size: 60px;
			color: white;
			margin-left: 25px;
		}

		.overview {
			@include open-sans;
			z-index: 2;
			color: white;
			margin: 30px 0 30px 25px;
		}
	}


	.buttons {
		display: flex;
		z-index: 2;
		margin-left: 25px;

		.red {
			@include flex-center-align;
			@include red-button;
			
		}

		.white {
			@include flex-center-align;
			@include white-button;
			transition: all 1s ease;

			&:hover {
				background-color: rgba(82, 82, 82, 0.4);
			}
		}

		p {
			color: white;

			&:hover i {
				margin-right: 20px;
			}
		}

		i {
			margin-right: 10px;
			transition: all .5s ease;
		}

	}

	.rate {
		@include flex-align;
		z-index: 2;
		margin: 35px 0 0 25px;

		.thumbs-up,
		.thumbs-down {
			@include flex-center-align;
			position: relative;
			width: 50px;
			color: rgba(255, 255, 255, 0.5);
			margin: 10px;
			transition: all .3s ease;
			backface-visibility: hidden;
			cursor: pointer;

			.thumbs-icon {
				position: absolute;
				font-size: 25px;
				backface-visibility: hidden;
			}

			.circle-icon {
				position: absolute;
				font-size: 60px;
			}

			&:hover {
				transform: scale(1.25);
				color: white;
			}
		}

		p {
			@include open-sans;
			color: white;
			margin-left: 25px;
			font-size: 20px;
			text-transform: uppercase;
		}

	}

	.background {
		@include flex-align;
		height: 100%;
		width: 100%;

		.fade {
			position: absolute;
			left: 0;
			z-index: 1;
			height: 60vh;
			width: 50%;
			background: (linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 50%,rgba(125,185,232,0) 100%));
		}

		img {
			position: absolute;
			top: 0;
			right: 0;
			width: 75%;
		}
	}

</style>
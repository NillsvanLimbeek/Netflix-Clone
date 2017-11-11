<template lang="html">
	<div class="dropdown-wrapper">
		<i class="fa fa-play arrow" aria-hidden="true"></i>
		<div class="dropdown">
			<div class="left">
				<ul>
					<li v-for="menu in menus">{{ menu }}</li>
				</ul>
			</div>

			<div class="right">
				<ul>
					<li v-for="genre in genres">{{ genre }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["genres", "menus"]
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/reset.scss";
	@import "../../scss/variables.scss";

	.arrow {
		color: white;
		transform: rotate(-90deg) translateY(25px) translateX(-18px) scaleX(.5);
	}

	.dropdown-wrapper {
		@include open-sans;
		top: 35px;
		position: absolute;
	}

	.dropdown {
		display: flex;
		margin-top: 10px;
		background-color: rgba(0, 0, 0, 0.95);
		border-top: 2px solid white;

		li {
			list-style: none;
			color: white;
			margin: 5px;
		}

		.left {
			border: 1px solid #6b6b6b;

			ul {
				padding: 10px;
			}

			li {
				font-size: 14px;
				font-weight: 700;

				&:hover {
					text-decoration: underline;
				}
			}
		}

		.right {
			display: flex;
			border: 1px solid #6b6b6b;
			height: 190px;
			width: 475px;

			ul {
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				padding: 10px 10px 10px 25px;
			}

			li {
				margin: 3px 25px 3px 0;
				font-size: 14px;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
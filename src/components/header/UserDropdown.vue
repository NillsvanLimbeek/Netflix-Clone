<template lang="html">
	<div class="user-wrapper">
		<i class="fa fa-play arrow" aria-hidden="true"></i>
		<div class="dropdown">
			<div class="dropdown-border">
				<ul>
					<li v-for="user in users" @click="changeUser(user)">
						<i class="fa fa-square user-icon" :style="{ color: user.color }"></i>
						<p>{{ user.name }}</p>
					</li>
				</ul>
				<div class="user-settings">
					<ul>
						<li v-for="setting in settings">{{ setting }}</li>
					</ul>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				settings: ["Account", "Helpcenter", "Log Off"]
			}
		},
		props: ["users"],
		methods: {
			//Push correct user & color
			changeUser(user) {
				this.$store.state.selectedUser = user.name;
				this.$store.state.selectedColor = user.color;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/reset.scss";
	@import "../../scss/variables.scss";

	.user-wrapper {
		@include open-sans;
		position: absolute;
		top: 20px;
		right: -2px;
	}

	.arrow {
		color: white;
		transform: rotate(-90deg) scaleX(.5) translateX(-16px) translateY(80px);
	}

	.dropdown-border {
		border: 1px solid #6b6b6b;
	}

	.dropdown {
		border-top: 2px solid white;
		width: 150px;
		height: 100px;

		ul {
			display: flex;
			flex-direction: column;
			padding: 15px;
			list-style: none;
			background-color: rgba(0, 0, 0, 0.9);
		}

		li {
			@include flex-align;
			padding: 3px;
			font-size: 14px;

			&:hover p {
				text-decoration: underline;
			}

			i {
				font-size: 20px;
				margin-right: 10px;
			}
		}
	}

	.user-settings {
		border-top: 1px solid #6b6b6b;

		ul {
			background-color: rgba(0, 0, 0, 0.9);
		}

		li {
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
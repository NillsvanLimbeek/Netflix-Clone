<template lang="html">
	<div class="poster">
			<div class="click-area">
				<div class="play-button" @click="clickPlay">
					<i class="fa fa-play play-icon"></i>
					<i class="fa fa-circle-thin circle-icon"></i>
				</div>
				<div class="bottom-arrow" @click="clickArrow">
					<i class="fa fa-angle-down arrow-icon"></i>
				</div>
			</div>
			<slot name="image"></slot>
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: this.genre	
			}
		},
		methods: {
			clickArrow() {
				//Emit Index Number
				this.$emit("showIndex");

				//Push the correct object in the selectedItem Array
				switch (this.genre) {
					case "action":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.action.arr[this.$store.state.selectedIndex]);
						this.closeAll();
						this.$store.state.action.itemDetail = true;
						break;
					case "drama":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.drama.arr[this.$store.state.selectedIndex]);
						this.closeAll();
						this.$store.state.drama.itemDetail = true;
						break;
					case "comedy":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.comedy.arr[this.$store.state.selectedIndex]);
						this.closeAll();
						this.$store.state.comedy.itemDetail = true;
						break;
					case "fantasy":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.fantasy.arr[this.$store.state.selectedIndex]);
						this.closeAll();
						this.$store.state.fantasy.itemDetail = true;
						break;
				}
			},
			clickPlay() {
				//Emit Index Number
				this.$emit("showIndex");

				//Push the correct object in the selectedItem Array
				switch (this.genre) {
					case "action":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.action.arr[this.$store.state.selectedIndex]);
						this.closeAll();						
						break;
					case "drama":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.drama.arr[this.$store.state.selectedIndex]);
						this.closeAll();						
						break;
					case "comedy":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.comedy.arr[this.$store.state.selectedIndex]);
						this.closeAll();						
						break;
					case "fantasy":
						this.$store.state.selectedItem.length = 0;
						this.$store.state.selectedItem.push(this.$store.state.fantasy.arr[this.$store.state.selectedIndex]);
						this.closeAll();						
						break;
				}
				this.show();
			},
			closeAll() {
				this.$store.state.netflix.itemDetail = false;
				this.$store.state.action.itemDetail = false;
				this.$store.state.drama.itemDetail = false;
				this.$store.state.comedy.itemDetail = false;
				this.$store.state.fantasy.itemDetail = false;
			},
			show() {
				this.$modal.show('item-detail');
			},
			hide() {
				this.$modal.hide('item-detail');
			}
		},
		props: ["genre"]
	}
</script>

<style lang="scss" scoped>
	@import "../../../scss/_reset.scss";
	@import "../../../scss/_variables.scss";
	@import "../../../scss/_elements.scss";

	.poster {
		@include flex-center-align;
		@include poster(90%);
		flex-direction: column;
		position: relative;
	}

	.selected {
		border: 3px solid white;

	}

	.selectedarrow {
		color: white;
		transform: rotate(90deg) scaleX(.5) translateX(-10px);
	}

	.click-area {
		@include flex-center-align;
		@include click-area(97%, 87%);
		flex-direction: column;
		position: absolute;
	}

	.play-button {
		@include flex-center-align;
		@include play-button(50%, 75%);
	}

	.play-icon {
		@include play-icon(40px);
	}

	.circle-icon {
		@include circle-icon(75px);
	}

	.bottom-arrow {
		@include flex-center;
		@include bottom-arrow-div(100%, 15%);

		.arrow-icon {
			@include arrow-icon(40px);
		}
	}

	.backdrop-text {
		color: white;
		text-align: center;

		p {
		backface-visibility: hidden;
		}
	}

	.backdrop-img {
		backface-visibility: hidden;
		width: 100%;
	}
</style>
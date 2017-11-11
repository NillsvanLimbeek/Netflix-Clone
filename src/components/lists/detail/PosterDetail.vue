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
	</div>
</template>

<script>
	export default {
		methods: {
			clickPlay() {
				this.$emit("showIndex");
				this.$store.state.selectedItem.length = 0;
				this.$store.state.selectedItem.push(this.$store.state.netflix.arr[this.$store.state.selectedIndex]);
				this.closeAll();
				this.show();
			},
			clickArrow() {
				this.$emit("showIndex");
				this.$store.state.selectedItem.length = 0;
				this.$store.state.selectedItem.push(this.$store.state.netflix.arr[this.$store.state.selectedIndex]);
				this.closeAll();
				this.$store.state.netflix.itemDetail = true;
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
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../scss/_reset.scss";
	@import "../../../scss/_variables.scss";
	@import "../../../scss/_elements.scss";

	.poster {
		@include flex-center-align;
		@include poster(90%);
	}

	.click-area {
		@include flex-align;
		@include click-area(100%, 100%);
	}

	.play-button {
		@include flex-center-align;
		@include play-button(50%, 80%);
	}

	.play-icon {
		@include play-icon(65px);
	}

	.circle-icon {
		@include circle-icon(120px);
	}

	.bottom-arrow {
		@include flex-center;
		@include bottom-arrow-div(100%, 15%);

		.arrow-icon {
			@include arrow-icon(50px);
		}
	}
</style>
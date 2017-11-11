<template lang="html">
    <div class="detail-wrapper">
        <div class="click-area">
            <div class="play-button" @click="clickedPlay">
                <i class="fa fa-play play-icon"></i>
                <i class="fa fa-circle-thin circle-icon"></i>
            </div>
        </div>
        <slot name="image"></slot>
        <slot name="text"></slot>
    </div>
</template>

<script>
    export default {
		methods: {
			clickedPlay() {
				this.$emit("showIndex");
				this.$store.state.selectedItem.length = 0;
				this.$store.state.selectedItem.push(this.$store.state.search[this.$store.state.selectedIndex]);
				this.show();
				console.log(this.$store.state.selectedItem);
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
	@import "../../scss/_reset.scss";
	@import "../../scss/_variables.scss";
	@import "../../scss/_elements.scss";

	.detail-wrapper {
		@include flex-center-align;
		@include poster(20%);
		flex-direction: column;
		position: relative;
		height: 100%;
        margin: 15px;

	}

	.click-area {
		@include flex-center-align;
		flex-direction: column;
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.play-button {
		@include flex-center-align;
		@include play-button(50%, 50%);
		margin-top: -15px;
	}

	.play-icon {
		@include play-icon(50px);
	}

	.circle-icon {
		@include circle-icon(90px);
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

		p {
		backface-visibility: hidden;
		}
	}

	.backdrop-img {
        backface-visibility: hidden;
        width: 100%;
	}
</style>
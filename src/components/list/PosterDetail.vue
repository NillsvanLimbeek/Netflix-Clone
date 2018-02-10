<template>
    <div class="poster-detail"
         :class="{ poster: posterClass, backdrop: backdropClass }">
        <div class="poster-detail__click-area">
            <div class="poster-detail__box poster-detail__box--top">
                <div class="poster-detail__play-btn" @click="emitPlay">
                    <i class="poster-detail__play far fa-play-circle"></i>
                </div>
            </div>

            <div class="poster-detail__box poster-detail__box--bottom">
                <div class="poster-detail__arrow-btn" @click="emitArrow">
                    <i class="poster-detail__arrow fas fa-angle-down"></i>
                </div>
            </div>
        </div>
        <slot class="poster-detail__img" name="image"></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posterClass: false,
                backdropClass: false
            }
        },
        methods: {
            emitArrow() {
                this.$emit("clickedArrow");
            },
            emitPlay() {
                this.$emit("clickedPlay");
            }
        },
        props: ["type"],
        created() {
            if(this.type === "Poster") {
                this.posterClass = true;
            } else {
                this.backdropClass = true;
            }
        }
    }
</script>

<style>

</style>

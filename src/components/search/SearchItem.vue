<template>
    <div class="search-item">
        <div class="search-item__click-area">
            <div class="search-item__play-btn" @click="clickedPlay">
                <i class="search-item__play far fa-play-circle"></i>
            </div>
        </div>
        <slot class="search-item__img" name="image"></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            clickedPlay() {
                this.$emit("clickedPlay");
            }
        }
    }
</script>

<style>

</style>

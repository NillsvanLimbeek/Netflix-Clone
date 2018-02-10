<template>
    <div class="modal"
         :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${getSelectedItem.backdrop_path})` }">

        <div class="item-detail__content">
            <h1 class="heading-primary">{{ getSelectedItem.title || getSelectedItem.name }}</h1>
            <p class="text-regular">{{ getSelectedItem.overview }}</p>

            <div class="hero__buttons">
                <button class="btn"><i class="fas fa-play margin-right-small"></i> Play</button>
                <button class="btn"><i class="fas fa-plus margin-right-small"></i> My List</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                "getSelectedItem"
            ])
        }
    }
</script>

<style>

</style>

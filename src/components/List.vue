<template>
    <div class="list">
        <app-poster-list
            v-for="(item, index) in sectionList"
            :key="item.index" 
            :input="sectionList[index]"></app-poster-list>
    </div>
</template>

<script>
    import PosterList from "./list/PosterList.vue";

    export default {
        data() {
            return {
                posterPath : "https://image.tmdb.org/t/p/original",
                sectionList: []
            }
        },
        components: {
            appPosterList: PosterList
        },
        created() {
            //Fill List Array
            for(let i = 0; i < this.$store.state.list.length; i++) {
                this.sectionList.push(this.$store.state.list[i])
            };
        }
    }
</script>

<style>

</style>

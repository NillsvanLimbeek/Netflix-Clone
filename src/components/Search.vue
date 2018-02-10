<template>
    <div class="search">
        <ul class="search__list">
            <li class="search__item"
                v-for="(item, index) in getSearchResults"
                :key="item.index">
                <app-search-item @clickedPlay="openModal(index)">
                    <img :src="`${imgUrl}${item.backdrop_path}`" slot="image">
                </app-search-item>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    import SearchItem from "./search/SearchItem.vue";

    export default {
        data() {
            return {
                imgUrl : "https://image.tmdb.org/t/p/w500"
            }
        },
        methods: {
            openModal(index) {
                //Open Modal
                this.show();
                //Show Selection
                this.$store.commit("changeSelectedItem", this.$store.state.searchResults[index]);
            },
            show() {
				this.$modal.show('item-detail');
			},
			hide() {
				this.$modal.hide('item-detail');
			}
        },
        computed: {
            ...mapGetters([
                "getSearchResults"
            ])
        },
        components: {
            appSearchItem: SearchItem
        }
    }
</script>

<style>

</style>

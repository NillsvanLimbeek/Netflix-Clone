<template>
    <div class="header__search">
        <label for="input"><i class="icon header__search-icon fas fa-search"></i></label>
        <input class="header__input"
               :class="{ 'search-focus': searchFocus }"
               id="input"
               type="text"
               placeholder="Search"
               v-model="search"
               @input="showSearch">
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                search: "",
                results: [],
                searchFocus: false
            }
        },
        methods: {
            showSearch() {
                this.results = [];
                axios.get(`https://api.themoviedb.org/3/search/multi?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&include_adult=false&query=${this.search}`)
                    .then(response => {
                        const data = response.data.results;
                        //Push data in Array
                        if(data.media_type === "movie" || "tv" ) {
                            for(let key in data) {
                                this.results.push(data[key])
                            }
                            this.$store.commit("changeSearchResults", this.results);
                            console.log(this.$store.state.searchResults);
                        }
                    })
                    .catch(error => console.log(error))
            }
        },
        watch: {
            search: function() {
                if(this.search.length > 0) {
                    this.searchFocus = true;
                    this.$store.commit("changeMainSection", false);
                } else {
                    this.searchFocus = false;
                    this.$store.commit("changeMainSection", true);
                }
            }
        }
    }
</script>

<style>

</style>

<template>
    <div class="explore-menu">
        <i class="icon explore-menu__icon fas fa-caret-down"></i>
        <div class="explore-menu__menu">
            <ul class="explore-menu__list">
                <li v-for="(item, index) in menu" 
                    :key="item.index"
                    class="explore-menu__item"><a class="explore-menu__link text-regular text-regular--thick">{{ item }}</a></li>
            </ul>
        </div>

        <div class="explore-menu__genre">
            <ul class="explore-menu__list explore-menu__list--wrap">
                <li v-for="(genre, index) in genres" 
                    :key="genre.index"
                    class="explore-menu__item"><a href="" class="explore-menu__link text-regular--small">{{ genre }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //Genres Items
				genres: ["Series", "Action", "Anime", "Comedy", "Documentaries", "Drama", "Horror", "International", "War",
					"Romance", "Sci-Fi & Fantasy", "Stand Up", "Thriller", "Family"
				],
                //Menu Items
				menu: ["Homepage", "My List", "Originals", "New", "Audio & Subtitles", "How can you watch Netflix?"]
            }
        }
    }
</script>

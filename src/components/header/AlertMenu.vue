<template>
    <div class="alert">
        <i class="icon alert__icon fas fa-caret-down"></i>
        <ul class="alert__list">
            <li class="alert__item"
                v-for="(item, index) in list"
                :key="item.index">
                    <div class="alert__box">
                        <div class="alert__picture">
                            <img :src="item.img" alt="" class="alert__img">
                        </div>

                        <div class="alert__text">
                            <p class="text-regular text-regular--tiny margin-bottom-tiny">{{item.heading}}</p>
                            <p class="text-regular margin-bottom-tiny">{{item.title}}</p>
                            <p class="text-regular text-regular--tiny">{{item.date}}</p>
                        </div>
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        heading: "Watch Now",
                        title: "Black Sails",
                        img: "https://image.tmdb.org/t/p/w500/5dMcDvKxqPgzSitf4cz6ug1P4Pv.jpg",
                        date: "2 days ago"
                    },
                    {
                        heading: "Newcomer",
                        title: "The End of the F***ing World",
                        img: "https://image.tmdb.org/t/p/w500/up1HuhhJnzrJ8El0ZJqpKNf0piL.jpg",
                        date: "1 week ago"
                    },
                    {
                        heading: "Watch Now",
                        title: "Black Mirror",
                        img: "https://image.tmdb.org/t/p/w500/zSaEw7H0KpAFXQp8LzoBfoTUhwh.jpg",
                        date: "1 month ago"
                    }
                ]
            }
        }
    }
</script>

<style>

</style>

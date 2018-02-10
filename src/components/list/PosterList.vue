<template>
    <div class="poster">
        <p class="heading-secondary margin-left-medium">{{input.title}}</p>

        <div class="poster-list">
			<swiper :options="swiperOption">
				<swiper-slide class="slide" v-for="(item, index) in input.list" :key="item.index">
                    <app-poster-detail v-if="showPoster"
                                       @clickedPlay="openModal(index)"
                                       @clickedArrow="openItem(index)">
                        <img class="poster-list__img" slot="image" :src="`${imgUrl}${item.poster_path}`">
                    </app-poster-detail>

                    <app-poster-detail v-if="showBackdrop"
                                       @clickedPlay="openModal(index)"
                                       @clickedArrow="openItem(index)">
                        <img class="backdrop-list__img" slot="image" :src="`${imgUrl}${item.backdrop_path}`">
                    </app-poster-detail>
                </swiper-slide>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
		</div>

        <transition name="open">
            <div class="wrapper" v-if="this.input.showItem">
                <app-item-detail @close="closeItem()"></app-item-detail>
            </div>
        </transition>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import axios from "axios";
    
    import PosterDetail from "./PosterDetail.vue";
    import ItemDetail from "./ItemDetail.vue";

    export default {
        data() {
            return {
                showPoster: false,
                showBackdrop: false,
                imgUrl : "https://image.tmdb.org/t/p/w500",
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    speed: 750,
                    spaceBetween: 30
                }
            }
        },
        methods: {
            openItem(index, input) {
                //Close All Items 
                this.$store.commit("closeItems");
                //Open Current Item
                this.$store.commit("openItem", this.input.index);
                //Show Selection
                this.$store.commit("changeSelectedItem", this.input.list[index]);
            },
            openModal(index) {
                //Open Modal
                this.show();
                //Show Selection
                this.$store.commit("changeSelectedItem", this.input.list[index]);
            },
            closeItem() {
                this.input.showItem = false;
            },
            show() {
				this.$modal.show('item-detail');
			},
			hide() {
				this.$modal.hide('item-detail');
			}
        },
        props: ["input"],
        components: {
            swiper,
            swiperSlide,
            appPosterDetail: PosterDetail,
            appItemDetail: ItemDetail
        },
        created() {
            //Set Input Type
            if(this.input.type === "Poster") {
                this.showPoster = true;
            } else {
                this.showBackdrop = true;
            }

            // HTTP Request
            axios.get(this.input.url)
                .then(response => {
                    //Push data in Store
                    const data = response.data.results
                    for(let key in data) {
                        this.input.list.push(data[key]);
                    }
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style>

    .open-enter,
    .open-leave-to {
		max-height: 0px;
		opacity: 0;
	}

    .open-enter-active,
    .open-leave-active {
        transition: max-height 1s ease-in-out,
                    opacity 1s ease-in-out .5s;
	}

    .open-enter-to,
    .open-leave {
		max-height: 60vh;
		opacity: 1;
    }
    
</style>

<template lang="html">
  <div class="list">
    <p class="title-text">{{ input.title }}<span><i class="fa fa-chevron-right arrow"></i></span></p>

    <div class="poster-list">
      <swiper :options="swiperOption">
        <swiper-slide 
          v-for="(movie, index) in input.arr" 
          :key="movie.id">
          
          <app-poster-detail 
            @showInfo="showExtraInfo = $event" 
            @showIndex="showIndex(index)">
            
            <img slot="image" :src="baseUrl + movie.poster_path" alt="">
          </app-poster-detail>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

    <transition name="open">
      <div class="wrapper" v-if="showItemDetail">
        <app-item-detail></app-item-detail>
      </div>
    </transition>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import PosterDetail from "./detail/PosterDetail.vue"
  import ItemDetail from "../itemDetail/ItemDetail.vue"

  export default {
    data() {
      return {
        baseUrl: "https://image.tmdb.org/t/p/w500/",
        swiperOption: {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 5,
          slidesPerGroup: 5,
          speed: 750,
          autoHeight: true
        },
        showExtraInfo: false,
        selectedIndex: ""
      }
    },
    props: ["input"],
    components: {
      swiper,
      swiperSlide,
      appPosterDetail: PosterDetail,
      appItemDetail: ItemDetail
    },
    //HTTP Request
    methods: {
      getData() {
        this.$http.get(this.input.url)
          .then(response => {
            return response.json();
          })
          .then(data => {
              for (let key in data.results) {
                this.input.arr.push(data.results[key]);
              }
          })
      },
      //Push index number to selectedIndex
      showIndex(index) {
        this.$store.state.selectedIndex = index;
      }
    },
    computed: {
			showItemDetail() {
        return this.$store.state.netflix.itemDetail;
      }
    },
    //Excexute on start up
    mounted: function() {
      this.getData();
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/_reset.scss";
  @import "../../scss/_variables.scss";
  @import "../../scss/_elements.scss";
  @import "../../../node_modules/swiper/dist/css/swiper.css";

  .list {
    @include open-sans;
    width: 99vw;

    .title-text {
      @include title-text;

      .arrow {
        opacity: 0;
      }

      i {
        margin-left: 7px;
        transition: all .4s ease-in-out;
      }

      &:hover .arrow {
        opacity: 1;
        margin-left: 15px;
      }
    }
  }

  .poster-list {
    @include flex-center-align;
    overflow-x: hidden;

    img {
      width: 100%;
    }
  }

  .wrapper {
    max-height: 60vh;
  }

  //Swiper Adjustments
  .swiper-container.swiper-container-horizontal.swiper-container-autoheight {
		padding: 2% 15px;
	}

	.swiper-button-prev,
	.swiper-button-next {
		top: 40%;
	}

  //Open Transition
  .open-enter {
    max-height: 0px;
    opacity: 0;
  }

  .open-enter-active {
    @include open-transition;
  }

  .open-enter-to {
    max-height: 60vh;
    opacity: 1;
  }

  .open-leave {
    max-height: 60vh;
    opacity: 1;
  }

  .open-leave-active {
    @include close-transition;
  }

  .open-leave-to {
    max-height: 0;
    opacity: 0;
  }
</style>

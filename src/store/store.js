import Vue from "vue";
import VueX from "vuex";
import _ from "lodash";

Vue.use(VueX);
Vue.use(_);

export const store = new VueX.Store({
  state: {
    // Users
    selectedUser: "Nills",
    selectedColor: "#4ada4a",
    
    //Selected Movie or TV Show
    selectedItem: [],

    //Selected Index Number
    selectedIndex: "",

    //Search Results
    search: [],

    //Show or Hide MainSection
    mainSection: true,

    //List Objects
    netflix: { title: "Netflix Originals", genre: "netflix", arr: [], itemDetail: false, url: "https://api.themoviedb.org/3/discover/tv?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=true" },
    action: { title: "Action", genre: "action", arr: [], itemDetail: false, url: "https://api.themoviedb.org/3/discover/movie?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&sort_by=popularity.desc&page=1&with_genres=28&year=0" },
    drama: { title: "Drama", genre: "drama", arr: [], itemDetail: false, url: "https://api.themoviedb.org/3/discover/tv?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&sort_by=popularity.desc&page=1&with_genres=18&with_original_language=en" },
    comedy: { title: "Comedy", genre: "comedy", arr: [], itemDetail: false, url: "https://api.themoviedb.org/3/discover/movie?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&sort_by=popularity.desc&page=1&with_genres=35" },
    fantasy: { title: "Sci-Fi & Fantasy", genre: "fantasy", arr: [], itemDetail: false, url: "https://api.themoviedb.org/3/discover/tv?api_key=9ea839ec7891591994ec0f540b4b199f&language=en-US&sort_by=popularity.desc&page=1&with_genres=10765&without_genres=16&with_original_language=en" },
  },
  getters: {
    showTitle: state => {
      return state.selectedItem[0].title || state.selectedItem[0].name;
    },
    showBackdrop: state => {
      return state.selectedItem[0].backdrop_path;
    },
    showOverview: state => {
      return state.selectedItem[0].overview;
    },
    tvShow: state => {
      state.selectedItem[0].name;
    },
    movie: state => {
      state.selectedItem[0].title;
    },
    searchTitle: state => {
      return state.search.title || state.search.name;
    }
  }
})

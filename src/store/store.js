import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        //Current User
        currentUser: {
            name: "Nills",
            color: "#4ada4a"
        },
        //List of Sections
        list: [
            { 
                title: "Netflix Originals",
                type: "Poster",
                index: 0,
                showItem: false,
                url: "https://api.themoviedb.org/3/discover/tv?api_key=9ea839ec7891591994ec0f540b4b199f&sort_by=popularity.desc&with_networks=213",
                list: []
            }, 
            {
                title: "Action",
                type: "Backdrop",
                index: 1,
                showItem: false,
                url: "https://api.themoviedb.org/3/discover/movie?api_key=9ea839ec7891591994ec0f540b4b199f&sort_by=popularity.desc&with_genres=28",
                list: [] 
            },
            {
                title: "Sci-Fi & Fantasy",
                type: "Backdrop",
                index: 2,
                showItem: false,
                url: "https://api.themoviedb.org/3/discover/tv?api_key=9ea839ec7891591994ec0f540b4b199f&sort_by=popularity.desc&with_genres=10765",
                list: []
            }
        ],
        //Current Selected Item
        selectedItem: {},
        //Search Results
        searchResults: [],
        //Show Main Section
        showMainSection: true
    },
    getters: {
        getUser: state => {
            return state.currentUser;
        },
        getSelectedItem: state => {
            return state.selectedItem;
        },
        getSearchResults: state => {
            return state.searchResults;
        }
    },
    mutations: {
        changeUser: (state, input) => {
            state.currentUser = input;
        },
        changeSelectedItem: (state, input) => {
            state.selectedItem = input;
        },
        closeItems: state => {
            const list = state.list;
            list.forEach(item => item.showItem = false);
        },
        openItem: (state, index) => {            
            state.list[index].showItem = true;
        },
        changeSearchResults: (state, input) => {
            state.searchResults = input;
        },
        changeMainSection: (state, input) => {
            state.showMainSection = input;
        }
    }
})
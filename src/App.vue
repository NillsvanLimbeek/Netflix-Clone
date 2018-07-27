<template>
    <div class="app">
        <app-header></app-header>

        <transition-group name="fade">
            <app-hero v-if="showMainSection" key="hero"></app-hero>
            <app-list v-if="showMainSection" key="list"></app-list>
        </transition-group>

        <transition name="fade">
            <app-search v-if="!showMainSection"></app-search>
        </transition>

        <app-footer></app-footer>

        <modal	name="item-detail"
				width="80%"
				height="50%"
				transition="ease-in-out">
			<app-modal></app-modal>
		</modal>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Hero from "./components/Hero.vue";
    import List from "./components/List.vue";
    import Search from "./components/Search.vue";
    import Footer from "./components/Footer.vue";
    import Modal from "./components/list/Modal.vue";

    export default {
        name: 'app',
        data () {
            return {

            }
        },
        computed: {
            showMainSection() {
                return this.$store.state.showMainSection;
            }
        },
        components: {
            appHeader: Header,
            appHero: Hero,
            appList: List,
            appModal: Modal,
            appSearch: Search,
            appFooter: Footer
        }
    }
</script>

<style lang="scss">

    @import "./scss/main.scss";

</style>

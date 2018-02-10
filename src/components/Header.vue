<template>
    <div class="header">
        <!-- <img src="../assets/logo.png" alt="Logo" class="header__logo"> -->
        <img src="logo.png" alt="Logo" class="header__logo">

        <div class="header__menu">
            <div class="header__left"
                 @mouseover="showExplore = true"
                 @mouseleave="showExplore = false">
                <p class="text-regular text-regular--red">Explore</p>
                <i class="icon icon--red fas fa-caret-down"></i>

                <transition name="fade">
                    <app-explore-menu v-if="showExplore"></app-explore-menu>
                </transition>
            </div>

            <div class="header__right">
                <app-searchbar></app-searchbar>


                <div class="header__alert"
                     @mouseover="showAlert = true"
                     @mouseleave="showAlert = false">
                    <i class="icon icon--big fas fa-bell"></i>

                    <transition name="fade">
                        <app-alert-menu v-if="showAlert"></app-alert-menu>
                    </transition>
                </div>

                <div class="header__users"
                     @mouseover="showUsers = true"
                     @mouseleave="showUsers = false">
                    <div class="header__square" :style="{ background: getUser.color }"></div>
                    <p class="text-regular">{{ getUser.name }}</p>
                    <i class="icon fas fa-caret-down"></i>

                    <transition name="fade">
                        <app-user-menu v-if="showUsers"></app-user-menu>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ExploreMenu from "./header/ExploreMenu.vue";
    import AlertMenu from "./header/AlertMenu.vue";
    import UserMenu from "./header/UserMenu.vue";
    import Searchbar from "./header/Searchbar.vue";

    import { mapGetters } from "vuex";

    export default {
        data() {
            return {
                showExplore: false,
                showAlert: false,
                showUsers: false
            }
        },
        computed: {
            ...mapGetters([
                "getUser"
            ])
        },
        components: {
            appExploreMenu: ExploreMenu,
            appAlertMenu: AlertMenu,
            appUserMenu: UserMenu,
            appSearchbar: Searchbar
        }
    }
</script>

<style>

    /* Fade Animation */
    .fade-enter-active, 
    .fade-leave-active {
        transition: opacity .3s ease-in-out;
    }

    .fade-enter, 
    .fade-leave-to {
        opacity: 0;
    }

</style>
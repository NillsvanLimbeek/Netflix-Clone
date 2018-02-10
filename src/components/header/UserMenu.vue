<template>
    <div class="user">
        <i class="icon user__icon fas fa-caret-down"></i>
        <div class="user__box">
            <div class="user__names">
                <ul class="user__list">
                    <li class="user__item"
                        v-for="(user, index) in users"
                        :key="user.index">
                        <i class="icon fas fa-square"
                           :style="{ color: user.color }"></i>
                        <a class="text-regular user__link"
                           @click="getUser(index)">{{ user.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="user__account-links">
                <ul class="user__list">
                    <li class="user__item"
                        v-for="(link, index) in links"
                        :key="link.index">
                        <a class="user__link text-regular">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: [
                    {
                        name: "Nills",
                        color: "#4ada4a"
                    },
                    {
                        name: "Marissa",
                        color: "#e2e259"
                    },
                    {
                        name: "Charlie",
                        color: "#cc993c"
                    }
                ],
                links: ["Account", "Helpcenter", "Log Off"]
            } 
        },
        methods: {
            getUser(index) {
                const user = this.users[index];
                this.$store.commit("changeUser", user);
            }
        }
    }
</script>

<style>

</style>

<template>
<nav>
    <div class="header">
        <div class="logo">
            <img src="@/assets/logoipsum-250.png" alt="Logo">
        </div>

        <div class="links">
            <div class="not-logged-in" v-if="!user">
                <router-link class="button light-blue" to="/login">Login</router-link>
                <router-link class="" to="/register">Register</router-link>
            </div>
            <div class="logged-in" v-if="user">
                <a href="javascript:void(0)" @click="handleLogout" class="button light-blue">Logout</a>
            </div>

        </div>
    </div>
</nav>
</template>


<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'Nav',
        methods: {
            handleLogout() {
                localStorage.removeItem('token');
                this.$store.dispatch('user', null);
                this.$router.push('/');
            }
        },
        computed: {
            ...mapGetters(['user'])
        }
    }
</script>
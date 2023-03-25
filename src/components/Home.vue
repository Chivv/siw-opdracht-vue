<template>
    <div>
        <h1 v-if="user" :key="user">Hello {{ user.name }}!</h1>
        <h1 v-if="!user">You are not logged in</h1>
    </div>  
</template>


<script>
import { mapGetters } from 'vuex';


    export default{
        name: 'Home',
        computed: {
            ...mapGetters(['user'])
        }
        
    }
</script>
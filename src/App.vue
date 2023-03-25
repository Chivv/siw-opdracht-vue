<template>
<Nav/>
<router-view/>
</template>

<script>
import Nav from './components/Nav.vue'
import axios from 'axios';


export default {
  name: 'App',
  components: {
    Nav,
  },
  data () {
    return {
      user:null
    }
  },
  async created(){
      const response = await axios.get('user');

      this.$store.dispatch('user', response.data)

  }
}
</script>

<style>

</style>

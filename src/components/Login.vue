<template>


    <div class="login-wrapper">
        <!-- .prevent is for preventing refresh on submit -->
        <form @submit.prevent="handleSubmit">
            <h1>Login</h1>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" placeholder="john@doe.com">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password" placeholder="*****">
            </div>
            <button type="submit" class="button light-blue">Login</button>
        </form>
    </div>
  


</template>

<script>
import axios from 'axios';
export default{
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('auth/login', {
                    email: this.email,
                    password: this.password
                });

                // Store API token
                localStorage.setItem('token', response.data.token);

                // If logged in
                if (response.status == '200'){
                    // Store user in vuex 
                    this.$store.dispatch('user', response.data.user);
                    this.$router.push('/');
                

                }
             
                
            }
        }
    }
</script>
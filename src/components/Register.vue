<template>


    <div class="login-wrapper">
        <form  @submit.prevent="handleSubmit">
            <h1>Register</h1>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="name" placeholder="John Doe">
            </div>
            <div class="form-group">
                <label for="name">Email</label>
                <input type="email" name="email" id="email" v-model="email" placeholder="john@doe.com">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password" placeholder="********">
            </div>
            <button type="submit" class="button light-blue">Register</button>
            <button @click="showAlert">Hello world</button>
        </form>
    </div>
  


</template>

<script>
import axios from 'axios'

export default{
        name: 'Register',
        data() {
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods: {
            async handleSubmit(){

                const response = await axios.post('auth/register',  {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                console.log(response);
                if (response.status == '200'){
                    this.$router.push('/login');
                } else{
                    this.$swal('Hello Vue world!!!');
                }
            },
        }
    }
</script>
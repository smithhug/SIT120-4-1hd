<template>
    <div class="login-page">
      <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
      <form @submit.prevent="isLogin ? login : register">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" :v-model="isLogin ? loginData.username : registrationData.username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" :v-model="isLogin ? loginData.password : registrationData.password" required />
        </div>
        <button @click="handleSubmit" type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
        <button class="togglebutton" @click="toggleForm">{{ isLogin ? 'No Account?' : 'Login instead' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLogin: true,
        loginData: {
          username: '',
          password: '',
        },
        registrationData: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      toggleForm() {
        this.isLogin = !this.isLogin;
      },
      handleSubmit() {
        if (this.isLogin) {
          this.login();
        } else {
          this.register();
        }
      },
      login() {
        const storedData = JSON.parse(localStorage.getItem('userCredentials')) || [];
        const user = storedData.find(
          (item) =>
            item.username === this.loginData.username && item.password === this.loginData.password
        );
  
        if (user) {
          alert('Login successful!');
          this.$sharedState.isLoggedIn = true;
        } else {
          alert('Invalid credentials. Please try again.');
        }
      },
      register() {
        const storedData = JSON.parse(localStorage.getItem('userCredentials')) || [];
        storedData.push({
          username: this.registrationData.username,
          password: this.registrationData.password,
        });
        localStorage.setItem('userCredentials', JSON.stringify(storedData));
        alert('Registration successful!');
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: 7% auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: black;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .togglebutton {
    margin-top: 10px;
    display: flex;
  }

  </style>
  
<template>
  <div class="login-form">
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label class="label" for="email">Email</label>
        <input
          class="input"
          type="email"
          id="email"
          name="email"
          v-model="email"
          required
        />
        <label class="label" for="password">Password</label>
        <input
          class="input"
          type="password"
          id="password"
          name="password"
          v-model="password"
          required
        />
        <button class="LoginBtn" @click.prevent="login()">Login</button>
      </div>

      <p class="create-account">
        Don't have an account yet?
        <router-link to="/SignupForm">Create Account</router-link>
      </p>
      <p class="create-account"><a href="/forgot-password">Forgot your password?</a></p>
      <div class="fg"><FacebookBtn /> <GoogleBtn /></div>
    </form>
  </div>
</template>

<script>
import FacebookBtn from "../components/FacebookBtn.vue";
import GoogleBtn from "../components/GoogleBtn.vue";

export default {
  name: "LoginForm",
  components: {
    FacebookBtn,
    GoogleBtn,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
    },

    loginWithFacebook() {
      // Handle Facebook login logic
    },
    loginWithGoogle() {
      // Handle Google login logic
    },
    login() {
      // Handle login logic
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 20%;
  margin: 5em auto;
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
h1 {
  text-align: center;
  margin-bottom: 1em;
}
.login-form form {
  display: block;
  text-align: center;
}

.form-group {
  text-align: center;
}

.label {
  display: block;
  text-align: left;
  margin: 1em 0em 0.5em 0em;
}

.input,
.LoginBtn {
  display: block;
  text-align: center;
  width: 100%; /* Adjust the width as needed */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  padding: 0.5em 0em;
}
.LoginBtn {
  margin-top: 1em;
  background-color: #614700ef;
  color: white;
  padding: 0.5em 0em;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: large;
}
button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
.create-account {
  text-align: center;
}

.create-account a {
  text-decoration: none;
}

.create-account a:hover {
  text-decoration: underline;
}
.fg {
  text-align: center;
}
</style>

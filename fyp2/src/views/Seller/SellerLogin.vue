<template>
  <div class="login-form">
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          required
        />
        <button class="LoginBtn">Login</button>
      </div>

      <p class="create-account">
        Don't have an account yet?
        <router-link to="/SellerSignup">Create Account</router-link>
      </p>
      <p class="create-account"><a href="/forgot-password">Forgot your password?</a></p>
      <div class="fg"><FacebookBtn /> <GoogleBtn /></div>
    </form>
  </div>
</template>

<script>
import FacebookBtn from "../../components/FacebookBtn.vue";
import GoogleBtn from "../../components/GoogleBtn.vue";

export default {
  name: "SellerLogin",
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

.form-group {
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
}

label {
  display: block;
  text-align: left;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
}

input[type="email"],
input[type="password"] {
  width: 95%;
  padding: 0.2em;
  margin-bottom: 0.5em;
  font-size: 1.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.LoginBtn {
  font-size: 1.5em;
  margin-top: 1em;
  padding: 0.4em;
  width: 98%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #614700ef;
  color: white;
  cursor: pointer;
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

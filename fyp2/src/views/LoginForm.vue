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
      </div>
      <LoginBtn />
      <p class="create-account">
        Don't have an account yet? <a href="/create-account">Create Account</a>
      </p>
      <p class="create-account"><a href="/forgot-password">Forgot your password?</a></p>
      <div class="fg"><FacebookBtn /> <GoogleBtn /></div>
    </form>
  </div>
</template>

<script>
import LoginBtn from "../components/LoginBtn";
import FacebookBtn from "../components/FacebookBtn.vue";
import GoogleBtn from "../components/GoogleBtn.vue";

export default {
  name: "LoginForm",
  components: {
    LoginBtn,
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
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
}

.form-group {
  margin: 10px 0;
  width: 97%;
}

label {
  display: block;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button.facebook {
  background-color: #3b5998;
}

button.google {
  background-color: #db4a39;
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
button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
</style>

<template>
  <form>
    <h1>Sign Up</h1>
    <input
      type="text"
      placeholder="Full Name"
      id="fullname"
      v-model="fullName"
      required
    />
    <input type="email" placeholder="Email Address" id="email" v-model="email" required />

    <input
      type="password"
      placeholder="Password"
      id="password"
      v-model="password"
      required
    />

    <input type="text" placeholder="Address" id="address" v-model="address" required />

    <div class="side-side">
      <div class="input-group">
        <input type="text" placeholder="City" id="city" v-model="city" required />
        <input type="text" placeholder="State" id="state" v-model="state" required />
      </div>
      <div class="input-group">
        <input type="text" placeholder="ZIP-code" id="zip" v-model="zip" required />
        <input
          type="tel"
          placeholder="Contact Number"
          id="contact"
          v-model="contact"
          required
        />
      </div>
    </div>

    <div class="radio-buttons">
      <label>Gender:</label>
      <label>
        <input type="radio" name="gender" value="male" v-model="gender" required />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" v-model="gender" required />
        Female
      </label>
    </div>
    <SignupBtn />
    <p class="Log-in">Already have an account? <a href="/create-account">Log in</a></p>

    <div class="fg"><FacebookBtn /> <GoogleBtn /></div>
  </form>
</template>

<script>
import SignupBtn from "../components/SignupBtn.vue";
import FacebookBtn from "../components/FacebookBtn.vue";
import GoogleBtn from "../components/GoogleBtn.vue";
export default {
  name: "SignupForm",
  components: {
    FacebookBtn,
    GoogleBtn,
    SignupBtn,
  },

  data() {
    return {
      fullName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      contact: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
    },
  },
};
</script>
<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
h1 {
  text-align: center;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  border: 1px solid #ccc;
  margin: 10px 10px 0px 10px;
}
input,
.input-group {
  display: block;
  width: 95%;
  padding: 5px;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: dodgerblue;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: dodgerblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
.side-side {
  display: flex;
  justify-content: space-between;
}

.input-group {
  width: 45%;
}

.input-group input {
  width: 90%;
  box-sizing: border-box;
}
.radio-buttons {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  color: gray;
}
.radio-buttons label {
  display: flex;
  align-items: center;
}
.radio-buttons input[type="radio"] {
  margin: 0px 10px;
}
.fg {
  text-align: center;
}
.Log-in {
  text-align: center;
}

.Log-in a {
  text-decoration: none;
}

.Log-in a:hover {
  text-decoration: underline;
}
</style>

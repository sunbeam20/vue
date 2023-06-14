<template>
  <form v-on:submit.prevent="submitForm">
    <h1>Sign Up</h1>
    <input
      type="text"
      placeholder="Full Name"
      id="fullname"
      v-model="fullname"
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
    <input
      type="text"
      placeholder="IC/Passport No."
      id="IdentityNo"
      v-model="identityNo"
      required
    />
    <input type="text" placeholder="Shop Name" id="SopName" v-model="shopName" required />

    <input
      type="text"
      placeholder="Shop Address"
      id="address"
      v-model="shopAddress"
      required
    />

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

    <!-- <SignupBtn /> -->
    <div><button class="signupBtn">Signup</button></div>
    <p class="Log-in">
      Already have an account?<router-link to="/SellerLogin">Log in</router-link>
    </p>

    <div class="fg"><FacebookBtn /> <GoogleBtn /></div>
  </form>
</template>

<script>
// import SignupBtn from "../components/SignupBtn.vue";
import FacebookBtn from "../../components/FacebookBtn.vue";
import GoogleBtn from "../../components/GoogleBtn.vue";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export default {
  name: "SellerSignup",
  components: {
    FacebookBtn,
    GoogleBtn,
    // SignupBtn,
  },

  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      identityNo: "",
      shopName: "",
      shopAddress: "",
      city: "",
      zip: "",
      state: "",
      contact: "",
    };
  },
  methods: {
    submitForm() {
      instance
        .post("customer/store", {
          seller: {
            name: this.fullname,
            email: this.email,
            password: this.password,
            identityNo: this.identityNo,
            shopName: this.shopName,
            shopAddress: this.shopAddress,
            city: this.city,
            zip: this.zip,
            state: this.state,
            contact: this.contact,
          },
        })
        .then((response) => {
          if (response.status == 201) {
            this.name == "";
            this.email == "";
            this.password == "";
            this.address == "";
            this.city == "";
            this.zip == "";
            this.state == "";
            this.contact == "";
            this.gender == "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
form {
  text-align: center;
  max-width: 25%;
  margin: 4em auto;
  padding: 1em 2em 2em 2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
h1 {
  text-align: center;
  margin-bottom: 1.5em;
}
label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
}
input {
  border: 1px solid #ccc;
  margin: 1em 1em 0em 1em;
}
input,
.input-group {
  display: block;
  margin: 1em 1em 0em 1em auto;
  width: 90%;
  padding: 5px;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: dodgerblue;
}
.side-side {
  display: flex;
  justify-content: center;
}

.input-group {
  text-align: center;
  width: 45%;
}

.input-group input {
  width: 90%;
  box-sizing: border-box;
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
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 90%;
  padding: 0.4em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.signupBtn {
  margin-top: 1em;
  background-color: #614700ef;
  border: none;
  color: white;
  padding: 1em 0em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  width: 90%;
}

div {
  text-align: center;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
</style>

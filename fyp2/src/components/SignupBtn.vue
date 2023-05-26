<template>
  <div>
    <button class="SignupBtn" @click.prevent="signup()">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export default {
  name: "SignupBtn",
  data: function () {
    return {
      customer: {
        name: "",
        email: "",
        password: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        contact: "",
        gender: "",
      },
    };
  },
  methods: {
    signup() {
      instance
        .post("customer/store", {
          customer: this.customer,
        })
        .then((response) => {
          if (response.status == 201) {
            this.customer.name == "";
            this.customer.email == "";
            this.customer.password == "";
            this.customer.address == "";
            this.customer.city == "";
            this.customer.zip == "";
            this.customer.state == "";
            this.customer.contact == "";
            this.customer.gender == "";
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
.SignupBtn {
  background-color: #614700ef;
  border: none;
  color: white;
  padding: 0.7em 0em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5em;
  margin: 0.5em 0.08em 0.1em 0.08em;
  cursor: pointer;
  border-radius: 1em;
  width: 100%;
  font-weight: bold;
}

div {
  text-align: center;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
</style>

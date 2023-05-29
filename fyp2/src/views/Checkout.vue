<template>
  <h1>Checkout Your Items</h1>
  <form action="">
    <div class="checkout-page">
      <div>
        <div class="shipping-address">
          <h2>Shipping Address</h2>

          <input type="text" placeholder="Full Name" v-model="fullName" class="field" />
          <input type="text" placeholder="Address" v-model="addressLine1" class="field" />
          <input type="text" placeholder="City" v-model="city" class="field" />
          <input type="text" placeholder="State" v-model="state" class="field" />
          <input
            type="text"
            placeholder="Postal/Zip-code"
            v-model="postalCode"
            class="field"
          />
        </div>
        <div class="product-list">
          <h2>Product List</h2>
          <!-- Display your product list here -->
          <!-- Example: -->
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
      </div>

      <div class="checkout-summary">
        <h2>Order Summary</h2>
        <div class="item-cost">
          <span>Item Cost:</span>
          <span>$99.99</span>
        </div>
        <div class="shipping-cost">
          <span>Shipping Cost:</span>
          <span>$9.99</span>
        </div>
        <hr />
        <div class="total-cost">
          <span>Total Cost:</span>
          <span>$109.98</span>
        </div>

        <div class="payment-method">
          <h2>Payment Method</h2>
          <!-- Display your payment method options here -->
          <!-- Example: -->

          <button type="button" class="payemt-btn">
            <img src="../assets/cash-on-delivery.png" />
          </button>
          <button type="button" class="payemt-btn">
            <img src="../assets/visa.png" />
          </button>
          <button type="button" class="payemt-btn">
            <img src="../assets/paypal.png" />
          </button>
          <button type="button" class="payemt-btn">
            <img src="../assets/google-pay.png" />
          </button>
          <button type="button" class="payemt-btn">
            <img src="../assets/apple-pay.png" />
          </button>
        </div>
        <button class="place-order-button" @click="placeOrder">Place Order</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      fullName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    };
  },
  methods: {
    placeOrder() {
      // Handle the place order functionality here
    },
  },
};
</script>

<style scoped>
img {
  width: 4em;
  height: 3em;
}
.payemt-btn {
  margin: 1em;
  cursor: pointer;
}
h1 {
  text-align: center;
  margin-top: 2em;
}
form {
  padding: 2em 10em 0em 10em;
  background-color: beige;
  border-radius: 2em;
}
.checkout-page {
  display: flex;
  justify-content: space-between;
}

.product-list,
.checkout-summary {
  flex-basis: 45%;
}

.place-order-button {
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.item-cost,
.shipping-cost,
.total-cost {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.payment-method label {
  display: block;
  margin-bottom: 0.5rem;
}
.shipping-address {
  width: 20em;
  display: flex;
  flex-direction: column;
}
.field {
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 0.5em;
  border-color: grey;
}
</style>

<template>
  <div class="content">
    <div class="nav-btn">
      <button @click="selectedLink = 'to-ship'">To Ship</button>
      <button @click="selectedLink = 'shipping'">Shipping</button>
      <button @click="selectedLink = 'completed'">Completed</button>
    </div>
    <div
      v-if="
        selectedLink == 'to-ship' ||
        selectedLink == 'shipping' ||
        selectedLink == 'completed'
      "
    >
      <div class="order-container">
        <span>Order ID</span>
        <input class="search-input" type="text" placeholder="Enter Order ID" />
        <img src="../../assets/search.png" />
        <button class="search-button" type="submit">Search</button>
        <button class="reset-button" type="submit">Reset</button>
      </div>
      <div class="Order-list">
        <table class="cart-table">
          <thead class="tableHead">
            <tr>
              <th>Item(s)</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Delivery channels</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index">
              <td>
                <input type="checkbox" v-model="item.selected" class="cart-checkbox" />
              </td>
              <td class="img">
                <div class="image-container">
                  <img :src="item.image" :alt="item.name" class="hover-effect" />
                  <span class="item-name hover-effect">{{ item.name }}</span>
                </div>
              </td>
              <td>{{ item.price }}</td>
              <td><Counter /></td>
              <td>{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cart-total">Total: {{ cartTotal }}</div>
    </div>
  </div>
</template>
<script>
const cartItems = [];
import { eventBus } from "../../event.js";
import Counter from "@/components/Counter.vue";
export default {
  name: "MyShipment",
  components: { Counter },
  data() {
    return {
      selectedLink: null,
      selectAll: false,
      cartItems,
    };
  },
  created() {
    // Listen for the "add-to-cart" event on the event bus

    console.log("Inside Created");
    if (eventBus) {
      console.log("Inside if");
      eventBus.on("add-to-cart", (product) => {
        // Assign the received product prop to a data property

        console.log("Inside on");
        this.cartItems.push(product);
        // Do something with the productData
        console.log("Product received in OtherComponent:", this.cartItems);
      });
    } else {
      console.error("Event bus not defined");
    }
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    allItemsSelected() {
      return this.cartItems.every((item) => item.selected);
    },
  },
  watch: {
    selectAll(value) {
      this.cartItems.forEach((item) => {
        item.selected = value;
      });
    },
  },
  methods: {
    selectAllItems() {
      this.selectAll = this.allItemsSelected;
    },
  },
};
</script>

<style scoped>
.content {
  display: block;
  width: 100vw;
  margin-right: 1em;
}

.nav-btn {
  display: block;
  margin-top: 1.5em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  text-align: center;
}
.order-container {
  display: block;
  margin-top: 1.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  font-size: 1.5em;
}
.Order-list {
  display: block;
  margin-top: 1.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: rgb(212, 208, 208);
  font-size: 1.5em;
}

.search-input {
  border: none;
  margin-left: 2em;
  background-color: transparent;
  font-size: 0.8em;
  width: 60%;
}

.Order-list span {
  padding: 0.5em 3em 0.5em 3em;
}

.search-input:focus {
  outline: none;
  border-color: transparent;
}

.search-button {
  background-color: rgb(222, 179, 51);
  border: none;
  cursor: pointer;
  margin-left: 1em;
  font-size: 1em;
  color: white;
}
.reset-button {
  background-color: rgb(209, 118, 20);
  border: none;
  cursor: pointer;
  margin-left: 1em;
  font-size: 1em;
  color: white;
}

.search-button:hover {
  transform: scale(1.1);
}

.nav-btn button {
  padding: 0.5em;
  margin-right: 0.5em;
  font-size: 1.5em;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

.nav-btn button:hover {
  background-color: #d7d2b0;
}
/* Orderlist Style */
.cart-table {
  border-collapse: collapse;
  width: 100%;
}
th {
  font-size: inherit;
  font-weight: lighter;
}
.cart-table td {
  padding: 0.6em;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.img img {
  width: 8em;
  height: auto;
}
.image-container {
  position: relative;
}
.item-name {
  font-weight: bold;
  position: absolute;
  color: #000000;
  font-size: 1rem;
  padding: 0.5rem;
}
.cart-total {
  font-size: 1.25em;
  font-weight: bold;
  margin-top: 1.25em;
  text-align: right;
}
.cart-empty {
  font-size: 1.125em;
  color: #999;
  text-align: center;
}
</style>

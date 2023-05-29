<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div v-if="products.length === 0" class="cart-empty">Your cart is empty</div>
    <div v-else>
      <table class="cart-table">
        <thead class="tableHead">
          <tr>
            <th>
              <input
                type="checkbox"
                v-model="selectAll"
                @change="selectAllItems"
                class="cart-checkbox all-checkbox"
              />All
            </th>

            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="index">
            <td>
              <input type="checkbox" v-model="item.selected" class="cart-checkbox" />
            </td>
            <td class="img">
              <div class="image-container">
                <img :src="item.image" :alt="item.name" />
                <span class="item-name">{{ item.name }}</span>
              </div>
            </td>
            <td>{{ item.price }}</td>
            <td><Counter /></td>
            <td>{{ item.price * item.quantity }}</td>
          </tr>
        </tbody>
      </table>
      <div class="cart-total">Total: {{ cartTotal }}</div>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import { products } from "@/views/Home";
export default {
  name: "CartPage",
  components: { Counter },
  data() {
    return {
      products: products,
      selectAll: false,
    };
  },
  computed: {
    cartTotal() {
      return this.products.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    allItemsSelected() {
      return this.products.every((item) => item.selected);
    },
  },
  watch: {
    selectAll(value) {
      this.products.forEach((item) => {
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
.cart {
  padding: 1em;
  background-color: #f5f5f5;
  margin: 2em 3em 3em 3em;
}

.img img {
  width: 10em;
  height: auto;
}
.image-container {
  position: relative;
}
.item-name {
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 7;

  color: #000000;
  font-size: 1rem;
  padding: 0.5rem;
}
.cart-checkbox {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
  vertical-align: middle;
}
.cart h2 {
  font-size: 1.5em;
  margin-bottom: 1.25px;
}

.cart-empty {
  font-size: 1.125em;
  color: #999;
  text-align: center;
}

.cart-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1.25em;
}

.cart-table th,
.cart-table td {
  padding: 0.6em;
  text-align: left;
}

.cart-table th {
  background-color: #ccc;
  font-weight: bold;
}

.cart-table td {
  border-bottom: 1px solid #ddd;
}

.cart-total {
  font-size: 1.25em;
  font-weight: bold;
  margin-top: 1.25em;
  text-align: right;
}
.tableHead {
  font-size: 1.5em;
}
.all-checkbox {
  width: 2em;
  height: 2em;
  margin-right: 1em;
  vertical-align: middle;
}
</style>

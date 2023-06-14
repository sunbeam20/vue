<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li class="head-lists" @click="toggleLists('Shipment')">
          <span>
            <img src="../../assets/shipment.png" />
            Shipment
            <img
              v-show="!isActive['Shipment']"
              src="../../assets/left.png"
              class="sideimg"
            />
            <img
              v-show="isActive['Shipment']"
              src="../../assets/down.png"
              class="sideimg"
            />
          </span>
          <ul v-show="isActive['Shipment']">
            <li class="lists" @click.stop>My Shipment</li>
            <li class="lists" @click.stop>Mass Shipping</li>
            <li class="lists" @click.stop>Shipping Settings</li>
          </ul>
        </li>
        <li class="head-lists" @click="toggleLists('Orders')">
          <span>
            <img src="../../assets/order.png" />
            Orders
            <img
              v-show="!isActive['Orders']"
              src="../../assets/left.png"
              class="sideimg"
            />
            <img
              v-show="isActive['Orders']"
              src="../../assets/down.png"
              class="sideimg"
            />
          </span>
          <ul v-show="isActive['Orders']">
            <li class="lists" @click.stop>My Orders</li>
            <li class="lists" @click.stop>Return/Refund</li>
            <li class="lists" @click.stop>Cancellation</li>
          </ul>
        </li>
        <li class="head-lists" @click="toggleLists('Product')">
          <span>
            <img src="../../assets/product.png" />
            Product
            <img
              v-show="!isActive['Product']"
              src="../../assets/left.png"
              class="sideimg"
            />
            <img
              v-show="isActive['Product']"
              src="../../assets/down.png"
              class="sideimg"
            />
          </span>
          <ul v-show="isActive['Product']">
            <li class="lists" @click.stop>My Products</li>
            <li @click="selectedLink = 'Add-product'" class="lists" @click.stop>
              Add New Products
            </li>
            <li class="lists" @click.stop>Products Settings</li>
          </ul>
        </li>
        <li class="head-lists" @click="toggleLists('Customer')">
          <span>
            <img src="../../assets/customer-service.png" />
            Customer Service
            <img
              v-show="!isActive['Customer']"
              src="../../assets/left.png"
              class="sideimg"
            />
            <img
              v-show="isActive['Customer']"
              src="../../assets/down.png"
              class="sideimg"
            />
          </span>
          <ul v-show="isActive['Customer']">
            <li class="lists" @click.stop>Chat Assistant</li>
            <li class="lists" @click.stop>FAQ Assistant</li>
          </ul>
        </li>
        <li class="head-lists" @click="toggleLists('Shop')">
          <span
            ><img src="../../assets/shop.png" /> Shop
            <img v-show="!isActive['Shop']" src="../../assets/left.png" class="sideimg" />
            <img v-show="isActive['Shop']" src="../../assets/down.png" class="sideimg"
          /></span>
          <ul v-show="isActive['Shop']">
            <li class="lists" @click.stop>Shop Profile</li>
            <li class="lists" @click.stop>Shop Rating</li>
            <li class="lists" @click.stop>Shop Categories</li>
          </ul>
        </li>
        <li class="head-lists">
          <span><img src="../../assets/settings.png" /> Settings</span>
        </li>
      </ul>
    </div>
    <AddProduct v-if="selectedLink == 'Add-product'" />
    <Dashboard v-else />
  </div>
</template>

<script>
import AddProduct from "@/components/Seller/AddProduct.vue";
import Dashboard from "@/components/Seller/Dashboard.vue";
export default {
  name: "SellerHome",
  components: {
    AddProduct,
    Dashboard,
  },
  data() {
    return {
      selectedLink: null,
      isActive: {
        Shipment: false,
        Orders: false,
        Product: false,
        Customer: false,
        Shop: false,
      },
    };
  },
  methods: {
    toggleLists(key) {
      this.isActive[key] = !this.isActive[key];
    },
  },
  created() {
    this.selectedLink = null;
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.sidebar {
  background-color: #f5f5f5;
  /* Set your desired background color */
  margin: 1.25em;
  /* Converted margin value */
  min-height: 88vh;
  max-height: 88vh;
  /* Set the maximum height for scrolling */
  overflow-y: auto;
  /* Enable vertical scrolling if content overflows */
  border-radius: 5px;
  /* Converted border-radius value */
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.5);
  /* Converted box-shadow value */
  width: 20vw;
  /* Set the desired width in pixels or em units */
}

li .sideimg {
  width: 0.5em;
  height: auto;
  align-items: center;
  float: right;
  margin: 0.25em 3em 0em 0em;
}

img {
  width: 1em;
  /* Converted width value */
  height: auto;
  margin-right: 0.1em;
  /* Converted margin-right value */
  vertical-align: middle;
}

span {
  font-size: 1.5em;
}

/* Style for the links and list items */
.sidebar ul {
  list-style-type: none;
  padding: 0em;
  margin-top: 1em;
}

li {
  margin: 1em 0em 0.5em 2em;
  /* Converted padding value */
  font-size: 1.1em;
}

.head-lists {
  margin-bottom: 2em;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  /* Set the color for the links */
}

.sidebar .lists:hover {
  color: rgb(141, 114, 35);
  /* Set the color when links are hovered */
  cursor: pointer;
  text-decoration: underline;
}

.head-lists:hover {
  cursor: pointer;
}
</style>

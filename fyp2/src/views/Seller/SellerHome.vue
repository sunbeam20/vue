<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li>
          <span><img src="../../assets/shipment.png" />Shipment</span>

          <ul>
            <li>My Shipment</li>
            <li>Mass Shipping</li>
            <li>Shipping Settings</li>
          </ul>
        </li>
        <li>
          <span><img src="../../assets/order.png" /> Orders</span>

          <ul>
            <li>My Orders</li>
            <li>Return/Refund</li>
            <li>Cancellation</li>
          </ul>
        </li>
        <li>
          <span><img src="../../assets/product.png" />Product</span>

          <ul>
            <li>My Products</li>
            <li @click="selectedLink = 'Add-product'">Add New Products</li>
            <li>Products Settings</li>
          </ul>
        </li>
        <li>
          <span><img src="../../assets/customer-service.png" />Customer Service</span>

          <ul>
            <li>Chat Assistant</li>
            <li>FAQ Assistant</li>
          </ul>
        </li>
        <li>
          <span><img src="../../assets/shop.png" />Shop</span>

          <ul>
            <li>Shop Profile</li>
            <li>Shop Rating</li>
            <li>Shop Categories</li>
          </ul>
        </li>
        <li>
          <span><img src="../../assets/settings.png" />Settings</span>
        </li>
      </ul>
    </div>
    <AddProduct v-if="selectedLink == 'Add-product'" />
  </div>
</template>

<script>
import AddProduct from "@/components/Seller/AddProduct.vue";
export default {
  name: "SellerHome",
  components: {
    AddProduct,
  },
  data() {
    return {
      selectedLink: null,
    };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f5f5f5; /* Set your desired background color */
  margin: 1.25em; /* Converted margin value */
  max-height: 80vh; /* Set the maximum height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  border-radius: 0.625em; /* Converted border-radius value */
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1); /* Converted box-shadow value */
  width: 20%; /* Set the desired width in pixels or em units */
}
.container {
  display: flex;
}
img {
  width: 1em; /* Converted width value */
  height: auto;
  margin-right: 0.1em; /* Converted margin-right value */
  vertical-align: middle;
}
span {
  font-size: 1.5em;
}

/* Style for the links and list items */
.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin-top: 0.5em;
}

.sidebar li {
  padding: 0em 0em 1em 1.5em; /* Converted padding value */
  font-size: 1.2em;
}

.sidebar a {
  text-decoration: none;
  color: #333; /* Set the color for the links */
}

.sidebar li:hover {
  color: #a32727; /* Set the color when links are hovered */
  cursor: pointer;
}
</style>

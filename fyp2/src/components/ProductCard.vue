<template>
  <div class="product-card">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" title="View" class="hover-effect" />
      </div>
    </router-link>

    <div class="product-details">
      <div class="product-name">
        {{ truncatedProductName }}
      </div>
      <div class="product-price">
        <p id="sold">1k Sold</p>
        <p>{{ product.price }}</p>
        <AddToCart
          :imgStyleProp="myStyles"
          :styleProp="btnStyles"
          :hoverClass="'hover-effect'"
          :image="require('@/assets/add-to-cart.png')"
          :key="product.id"
          :product="product"
        />
        <!-- ^ -->
      </div>
    </div>
  </div>
</template>

<script>
import AddToCart from "./AddToCart.vue";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    AddToCart,
  },
  data() {
    return {
      myStyles: {
        width: "auto",
        height: "20px",
      },
      btnStyles: {
        border: "none",
        borderRadius: "20%",
      },
    };
  },
  // computed method is used to limit the Product name output to 20 characters
  computed: {
    truncatedProductName() {
      const maxLength = 20;
      return this.product.name.length > maxLength
        ? `${this.product.name.slice(0, maxLength)}...`
        : this.product.name;
    },
  },
};
</script>

<style scoped>
.product-card {
  flex-direction: column;
  align-items: center;
  width: 12em;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.product-image:hover {
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 50%;
  object-fit: contain;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1em;
  background-color: white;
}

.product-name {
  font-size: 1em;
  margin-bottom: 0.7em;
}

.product-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: normal;
  color: #000000;
}

.product-price p {
  margin: 0px;
  margin-right: 0.3em;
  text-align: center;
  font-weight: bold;
}

#sold {
  font-size: small;
  color: #585858;
}
</style>

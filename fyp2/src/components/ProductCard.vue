<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" title="View" />
    </div>
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
        />
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
.hover-effect:hover {
  background-color: bisque;
  color: white;
}
.product-card {
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: auto;
  max-height: 230px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
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
  padding: 10px;
  background-color: white;
}

.product-name {
  font-size: 12px;
  margin-bottom: 5px;
}
.product-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: normal;
  color: #000000;
}
.product-price p {
  margin: 0;
  margin-right: 5px;
  text-align: center;
  font-weight: bold;
}
#sold {
  font-size: small;
  color: #585858;
}
</style>

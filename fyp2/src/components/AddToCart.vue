<!-- 
  some styles/values/class are passed as props
  eg.. hover effect, border, padding, img & img styles, text
-->
<template>
  <button @click="addToCart" class="add-to-cart" :style="styleProp" :class="hoverClass">
    <img :src="image" :style="imgStyleProp" class="hover-effect" />{{ textProp }}
  </button>
</template>

<script>
import { eventBus } from "../event.js"; //event bus
export default {
  name: "AddToCart",
  props: {
    textProp: String,
    image: String,
    hoverClass: String,
    product: {
      type: Object,
      required: true,
    },
    styleProp: {
      type: Object,
      required: true,
    },
    imgStyleProp: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      // Do something when the button is clicked, like adding the product to the cart
      // You can access the product data via props
      eventBus.emit("add-to-cart", this.product); //transferering event bus to App.vue
    },
  },
};
</script>

<style scoped>
.add-to-cart {
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  font-size: 0.75em;
  font-weight: bold;
}
</style>

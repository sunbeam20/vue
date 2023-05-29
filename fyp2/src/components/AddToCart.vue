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
export default {
  name: "AddToCart",
  props: {
    textProp: String,
    image: String,
    hoverClass: String,
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
      this.$emit("add-to-cart");
    },
  },
};
</script>

<style scoped>
.add-to-cart {
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
}
</style>

<template>
  <form class="add-product" v-on:submit.prevent="submitForm">
    <h2>Add New Products</h2>
    <div>
      <label for="product-images">Product images</label>
      <input
        type="file"
        name="images"
        multiple
        accept="image/*"
        @change="handleImageUpload"
      />
    </div>
    <div>
      <label for="product-category">Product Category</label>
      <input type="text" v-model="productCategory" />
    </div>
    <div>
      <label for="product-name">Product name</label>
      <input type="text" v-model="name" />
    </div>
    <div class="details">
      <label for="product-details">Product details</label>
      <textarea v-model="details" rows="5"></textarea>
    </div>
    <div>
      <label for="product-quantity">Product Quantity</label>
      <input
        type="number"
        name="quantity"
        min="1"
        max="100"
        step="1"
        v-model="quantity"
      />
    </div>
    <div>
      <label for="original-price">Original Price</label>
      <input type="number" step="0.01" min="0" name="price" v-model="price" />
    </div>
    <div>
      <label for="selling-price">Selling Price</label>
      <input type="number" step="0.01" min="0" name="price" v-model="sell_price" />
    </div>
    <div>
      <label for="sizes">sizes</label>
      <input type="text" v-model="sizes" />
    </div>
    <div>
      <label for="available-sizes">Available sizes</label>
      <input type="text" v-model="available_sizes" />
    </div>
    <div>
      <label for="colors">colors</label>
      <input type="text" v-model="colors" />
    </div>
    <div>
      <label for="available-colors">Available colors</label>
      <input type="text" v-model="available_colors" />
    </div>
    <div>
      <label for="weight">weight</label>
      <input type="text" v-model="weight" />
    </div>
    <div>
      <label for="product-keywords">Product keywords</label>
      <input type="text" v-model="keywords" />
    </div>
    <button class="cancel">Cancel</button>
    <button class="upload" type="submit">Upload</button>
  </form>
</template>

<script>
import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export default {
  name: "AddProduct",
  data() {
    return {
      images: null,
      productCategory: "",
      name: "",
      details: "",
      quantity: 1,
      price: null,
      sell_price: null,
      sizes: "",
      available_sizes: "",
      colors: "",
      available_colors: "",
      weight: "",
      keywords: "",
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.images = reader.result;
      };
    },
    submitForm() {
      instance
        .post("product/store", {
          product: {
            name: this.name,
            images: this.images,
            details: this.details,
            quantity: this.quantity,
            price: this.price,
            sell_price: this.sell_price,
            sizes: this.sizes,
            available_sizes: this.available_sizes,
            colors: this.colors,
            available_colors: this.available_colors,
            weight: this.weight,
            keywords: this.keywords,
          },
        })
        .then((response) => {
          if (response.status == 201) {
            this.images = "";
            this.productCategory = "";
            this.name = "";
            this.details = "";
            this.quantity = "";
            this.price = "";
            this.sell_price = "";
            this.sizes = "";
            this.available_sizes = "";
            this.colors = "";
            this.available_colors = "";
            this.weight = "";
            this.keywords = "";
          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          console.log(this.images);
          console.log(this.productCategory);
          console.log(this.name);
          console.log(this.details);
          console.log(this.quantity);
          console.log(this.price);
          console.log(this.sell_price);
          console.log(this.sizes);
          console.log(this.available_sizes);
          console.log(this.colors);
        });
    },
  },
};
</script>

<style scoped>
.add-product {
  width: 45%;
  height: 80%;
  margin: 1em 5em 5em 10em;
  padding: 2em 3em 3em 0em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  text-align: right;
}

h2 {
  text-align: left;
  margin-left: 3em;
}

.details {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

.details textarea {
  resize: vertical;
}

.add-product input,
.add-product textarea {
  width: 60%;
  margin-left: 5em;
  margin-top: 1em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-product input:focus,
.add-product textarea:focus {
  outline: none;
  border-color: #5b9dd9;
  box-shadow: 0 0 0 3px rgba(91, 157, 217, 0.2);
}

button {
  padding: 0.5em;
  margin: 2em 0em 0em 0.5em;
  border-radius: 5px;
  border: 0.5px solid grey;
  font-weight: bold;
  font-size: large;
  color: white;
}

.upload {
  background-color: rgb(222, 179, 51);
}

.cancel {
  background-color: #483912e3;
}

button:hover {
  cursor: pointer;
}

.upload:hover {
  background-color: rgb(243, 196, 56);
  color: black;
}

.cancel:hover {
  background-color: #c49f4be3;
  color: black;
}
</style>

<template>
  <div class="add-product">
    <h2>Add New Products</h2>
    <div>
      <label for="">Product images</label>
      <input type="file" multiple accept="image/*" />
    </div>
    <div>
      <label for=""> Product Category</label>
      <input type="text" />
    </div>
    <div>
      <label for=""> Product name </label>
      <input type="text" />
    </div>
    <div class="details">
      <label for="">Product details</label>
      <textarea name="" id="" rows="5"></textarea>
    </div>
    <div>
      <label for="">Product Quantity</label
      ><input type="number" name="quantity" min="1" max="100" step="1" value="1" />
    </div>
    <div>
      <label for="">Original Price</label
      ><input type="number" step="0.01" min="0" name="price" />
    </div>
    <div>
      <label for="">Selling Price</label>
      <input type="number" step="0.01" min="0" name="price" />
    </div>
    <div>
      <label for="">Size </label>
      <input type="text" />
    </div>
    <div>
      <label for="">Available Size </label>
      <input type="text" />
    </div>
    <div>
      <label for="">Color </label>
      <input type="text" />
    </div>
    <div>
      <label for="">Available Color</label>
      <input type="text" />
    </div>
    <div>
      <label for="">Weight</label>
      <input type="text" />
    </div>
    <div>
      <label for="">Product keywords</label>
      <input type="text" />
    </div>
    <button class="cancel">Cancel</button>
    <button class="upload">Upload</button>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
};
</script>

<style scoped>
.add-product {
  width: 45%;
  height: auto;
  margin: 1em 5em 5em 10em;
  padding: 2em 3em 3em 0em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  text-align: right;
}
h2 {
  text-align: left;
  margin-left: 5em;
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
  background-color: rgb(223, 174, 28);
}
.cancel {
  background-color: #483912e3;
}
button:hover {
  cursor: pointer;
}
</style>

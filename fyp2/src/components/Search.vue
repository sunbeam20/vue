<template>
  <div>
    <form class="search-form">
      <input class="search-input" type="text" placeholder="Search..." />
      <button class="search-button" type="submit">
        <img src="../assets/search.png" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
button img {
  width: auto;
  height: 20px;
  cursor: pointer;
}

.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 20px;
}

.search-input {
  width: 200px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  flex: 1;
}
.search-input:focus {
  outline: none;
  border-color: transparent;
}

.search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}

.search-button:hover {
  transform: scale(1.1);
}
</style>

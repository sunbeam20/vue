<template>
  <div class="dropdown">
    <button
      @click="toggleDropdown"
      class="dropdown-toggle"
      :class="{ active: dropdownOpen }"
    >
      Categories
    </button>
    <div v-if="dropdownOpen" class="dropdown-menu">
      <a class="dropdown-item" href="#">Category 1</a>
      <a class="dropdown-item" href="#">Category 2</a>
      <a class="dropdown-item" href="#">Category 3</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      console.log("1");
    },
    hideDropdown(event) {
      if (!event.target.closest(".dropdown")) {
        this.dropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.hideDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideDropdown);
  },
};
</script>

<style scoped>
button {
  width: auto;
  height: 50px;
  background-color: #46330000;
  font-size: 18px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
}

.dropdown-toggle.active {
  background-color: #eaac0050;
}

.dropdown-menu {
  position: absolute;
  z-index: 1;

  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: #f5f5f5;
}
</style>

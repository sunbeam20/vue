<template>
  <div class="dropdown">
    <button
      @mouseover="toggleDropdown(true)"
      @mouseout="toggleDropdown(false, $event)"
      class="dropdown-toggle"
      :class="{ active: dropdownOpen }"
    >
      Categories
    </button>
    <div
      v-if="dropdownOpen"
      class="dropdown-menu"
      @mouseover="toggleDropdown(true)"
      @mouseout="toggleDropdown(false, $event)"
    >
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
    toggleDropdown(hovering, event) {
      if (
        !event ||
        !event.relatedTarget ||
        !event.relatedTarget.closest(".dropdown-menu")
      ) {
        this.dropdownOpen = hovering;
      }
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
  height: 3em;
  background-color: #46330000;
  font-size: 1.5em;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  color: white;
  border: none;
  padding: 0.75em 1.75em;
  cursor: pointer;
  outline: none;
}

.dropdown-toggle.active {
  background-color: #eaac0050;
}

.dropdown-menu {
  position: absolute;
  z-index: 1;
  border-top: 0.1em solid rgb(88, 88, 88);
  background-color: #fff;
  box-shadow: 0em 0.5em 1em 0em rgba(0, 0, 0, 0.2);
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  display: block;
  padding: 1em 2em;
  color: #333;
  text-decoration: none;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: #f5f5f5;
}
</style>

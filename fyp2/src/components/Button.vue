<template>
  <header>
    <div class="dropdown">
      <button
        @mouseover="toggleDropdown(true)"
        @mouseout="toggleDropdown(false, $event)"
        class="dropdown-toggle"
        :class="{ active: dropdownOpen }"
      >
        <img :src="image" />{{ text }}
      </button>
      <div
        v-if="dropdownOpen"
        class="dropdown-menu"
        @mouseover="toggleDropdown(true)"
        @mouseout="toggleDropdown(false, $event)"
      >
        <router-link to="/LoginForm">
          <p class="dropdown-item separate">Login</p>
        </router-link>
        <router-link to="/SignupForm">
          <p class="dropdown-item">SignUp</p>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    image: String,
  },
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
  color: white;
  width: auto;
  height: 3em;
  background-color: #46330000;
  font-size: 1.5em;
  border: none;
}
img {
  border-radius: 1em;
  width: auto;
  height: 1.7em;
  cursor: pointer;
}

.dropdown-toggle {
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
}

.dropdown-menu {
  right: 2%;
  margin-top: 0.05em;
  position: absolute;
  z-index: 1;
  border: 0.1em solid rgb(88, 88, 88);
  background-color: #fff;
  box-shadow: 0em 0.5em 1em 0em rgba(0, 0, 0, 0.2);
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  display: inline-block;
  padding: 1em;
  margin: 0em 0.5em;
  color: #333;
  text-decoration: none;
}
.separate {
  padding-right: 2em;
  border-right: 1px solid rgb(110, 110, 110);
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>

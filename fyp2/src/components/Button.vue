<template>
  <header>
    <div class="dropdown">
      <button
        @mouseover="toggleDropdown(true)"
        @mouseout="toggleDropdown(false, $event)"
        class="dropdown-toggle"
        :class="{ active: dropdownOpen }"
      >
        <img :src="image" class="hover-effect" />{{ text }}
      </button>
      <div
        v-if="dropdownOpen"
        class="dropdown-menu"
        @mouseover="toggleDropdown(true)"
        @mouseout="toggleDropdown(false, $event)"
      >
        <router-link to="/LoginForm" exact class="link">
          <p class="dropdown-item">Login</p>
        </router-link>
        <router-link to="/SignupForm" exact class="link">
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
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0em 0.5em 1em 0em rgba(0, 0, 0, 0.2);
}

.dropdown-menu.show {
  display: block;
}
.link {
  text-decoration: none;
  font-weight: bold;
}
.dropdown-item {
  display: block;
  padding: 1em 2em;
  margin: 0.5em 0.5em;
  color: #333;
  text-decoration: none;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: #ebebeb;
  cursor: pointer;
  border-radius: 5px;
}
</style>

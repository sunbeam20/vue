<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />

    <!-- Scroll to top button -->
    <button class="scroll-top-button" @click="scrollToTop" v-show="showScrollTopButton">
      <img src="./assets/up.png" alt="" class="hover-effect" />
    </button>

    <!-- Scroll to bottom button 
    <button
      class="scroll-bottom-button"
      @click="scrollToBottom"
      v-show="showScrollBottomButton"
    >
      Scroll to Bottom
    </button>
    -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showScrollTopButton: false,
      // showScrollBottomButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // const scrollHeight = document.documentElement.scrollHeight;
      // const clientHeight = document.documentElement.clientHeight;

      // Show/hide scroll to top button
      this.showScrollTopButton = scrollTop > 0;

      /* Show/hide scroll to bottom button
      this.showScrollBottomButton = scrollTop + clientHeight < scrollHeight;*/
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    // scrollToBottom() {
    //   const scrollHeight = document.documentElement.scrollHeight;
    //   window.scrollTo({
    //     top: scrollHeight,
    //     behavior: "smooth",
    //   });
    // },
  },
};
</script>

<style>
.app {
  font-family: Arial, Helvetica, sans-serif;
  border: 0px;
}
img.hover-effect {
  transition: transform 0.3s ease;
}

img.hover-effect:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.hover-effect:hover {
  cursor: pointer;
}
.scroll-top-button {
  position: fixed;
  top: 70px;
  right: 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.scroll-top-button:hover {
  opacity: 1;
}
img {
  width: 2.5em;
}
</style>

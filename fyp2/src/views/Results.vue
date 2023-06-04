<template>
  <div class="results">
    <div class="filters">
      <h3>Filters</h3>
      <div class="filter-option">
        <label>Category</label>
        <div>
          <label v-for="category in categories" :key="category.id">
            <input type="checkbox" v-model="selectedCategories" :value="category.id" />
            {{ category.name }}
          </label>
        </div>
      </div>
      <div
        v-for="(filterOptions, filterLabel) in filterConfig"
        :key="filterLabel"
        class="filter-option"
      >
        <label>{{ filterLabel }}:</label>
        <div>
          <label v-for="option in filterOptions" :key="option">
            <input
              type="checkbox"
              :value="option"
              v-model="selectedFilters[filterLabel]"
            />
            {{ option }}
          </label>
        </div>
      </div>
    </div>
    <div class="main-content">
      <h2>Search Results</h2>
      <div class="sortbar">
        <label for="">Sort By</label>
        <button>Latest</button>
        <button>Top Sales</button>
      </div>
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <div v-if="filteredProducts.length > 0" class="product-container">
          <ProductCard
            class="product-card"
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
        <div v-else>
          <p>No results found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products, categories } from "@/views/Home";
import ProductCard from "../components/ProductCard";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: products,
      isLoading: true,
      categories: categories,
      selectedCategories: [],
      filterConfig: {
        "Price Range": ["Low", "Medium", "High"],
        Ratings: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
        Brands: ["Brand 1", "Brand 2", "Brand 3"],
        "Shipping Options": ["Standard", "Express"],
      },
      selectedFilters: {
        "Price Range": [],
        Ratings: [],
        Brands: [],
        "Shipping Options": [],
      },
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = this.products;

      if (this.selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          this.selectedCategories.includes(product.category)
        );
      }

      for (const filterLabel in this.selectedFilters) {
        const selectedOptions = this.selectedFilters[filterLabel];
        if (selectedOptions.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            selectedOptions.includes(product[filterLabel.toLowerCase()])
          );
        }
      }

      return filteredProducts;
    },
  },
  mounted() {
    // Simulate API call to fetch products based on search or selected category
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // Simulated API call
      setTimeout(() => {
        this.isLoading = false;
      }, 200);
    },
    truncatedProductName(name) {
      const maxLength = 20;
      return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
    },
  },
};
</script>
<style scoped>
.results {
  display: flex;
  padding-right: 1em;
  margin: 1.25em 0.25em 1.25em 0.25em;
  background-color: rgb(235, 235, 235);
}

.filters {
  flex: 0 0 12.5em;
  padding-left: 2%;
  border-radius: 1em;
}

.filter-option {
  margin-bottom: 0.625em;
}

.filter-option label {
  display: block;
  margin-bottom: 0.3125em;
}

.filter-option input[type="checkbox"] {
  margin-right: 0.3125em;
}

.main-content {
  flex: 1;
  margin: 0em 0em 0em 1.25em;
}
.sortbar {
  display: block;
  background-color: aliceblue;
  margin-bottom: 0.3125em;
  border: 1px solid rgb(212, 212, 212);
  padding-left: 1em;
}
.sortbar button {
  padding: 1.5em;
  border-radius: 0.5em;
  border: none;
  background-color: aliceblue;
  justify-content: space-between;
  margin-left: 1em;
}
.sortbar button:hover {
  cursor: pointer;
}
.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
  margin-left: 1.5em;
  padding: 2em 0em 2em 0em;
  justify-content: flex-start;
}
</style>

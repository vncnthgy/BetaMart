<template>
  <div class="list-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
    <div class="title-section">
      <h2 class="text-center">PRODUCT LIST</h2>
    </div><br>
    <p v-if="successMessage" class="list-product-message alert alert-success mt-3 text-center">{{ successMessage }}</p>

    <div class="row" v-if="products.length">
      <div class="col-md-3 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <div class="card-body">
            <img src="@/assets/product.jpg" alt="Jane" style="width:100%">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text"><strong>₱{{ product.price }}</strong></p>
            <div class="btn-group-vertical w-100" role="group">
              <button @click="editProduct(product)" class="btn btn-primary btn-block">
                <span v-if="product.isSaving" class="spinner-border spinner-border-sm" role="status"
                  aria-hidden="true"></span>
                Edit
              </button>
              <button @click="deleteProduct(product)" class="btn btn-danger btn-block">
                <span v-if="product.isDeleting" class="spinner-border spinner-border-sm" role="status"
                  aria-hidden="true"></span>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="alert alert-warning mt-3 text-center">No product available!</p>
    </div>

    <router-link to="/addproduct">
      <button class="btn btn-dark rounded-circle position-fixed d-flex align-items-center justify-content-center"
        style="bottom: 25px; right: 25px; width: 70px; height: 70px; font-size: 2rem; padding-top: 1px;">
        {{ text }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successMessage: '',
      text: '+'
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    editProduct(product) {
      this.$router.push({ name: 'EditProduct', params: { id: product.id } });
    },
    deleteProduct(product) {
      this.$router.push({ name: 'DeleteProduct', params: { id: product.id } });
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 70%;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.rounded {
  border-radius: 5px;
}

.list-product-message {
  max-width: 100%;
}

.title-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  border: none;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.position-fixed {
  position: fixed;
}
</style>

<template>
  <div class="add-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
    <div class="title-section">
      <h2 class="text-center">ADD PRODUCT</h2>
    </div><br>
    <p v-if="successMessage" class="add-product-message alert alert-success mt-3 text-center">{{ successMessage }}</p>
    <form @submit.prevent="addProduct" class="add-product-form">
      <div class="form-group mb-3">
        <label for="name"><b>Product Name:</b></label>
        <input type="text" id="name" v-model="name" class="form-control" placeholder="Enter Product Name" required>
      </div>
      <div class="form-group mb-3">
        <label for="description"><b>Description:</b></label>
        <textarea id="description" v-model="description" class="form-control" rows="3" placeholder="Enter Product Description" required></textarea>
      </div>
      <div class="form-group mb-3">
        <label for="price"><b>Price:</b></label>
        <input type="number" id="price" v-model.number="price" class="form-control" placeholder="Enter Product Price" min="0" required>
      </div>
      <div class="d-grid gap-2 col-5 mx-auto">
        <div class="btn-group-vertical" role="group">
          <button type="submit" class="btn btn-success btn-block">
            <span v-if="isAdding" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ADD</button>
          <button type="button" class="btn btn-danger btn-block" @click="goBack">
            BACK</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdding: false,
      name: '',
      description: '',
      price: '',
      successMessage: ''
    };
  },
  methods: {
    goBack() {
      this.$router.push('/products');
    },
    addProduct() {
      if (!confirm("Are you sure you want to add this product?")) {
        return;
      }
      this.isAdding = true;
      setTimeout(() => {
        this.isAdding = false;
        const product = {
          name: this.name,
          description: this.description,
          price: this.price
        };
        this.$store.dispatch('addProduct', product);
        this.name = '';
        this.description = '';
        this.price = '';
        this.successMessage = 'Product successfully added!';
        setTimeout(() => {
          this.successMessage = '';
          this.$router.push('/products');
        }, 3000);
      }, 1500);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 30%;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.rounded {
  border-radius: 5px;
}

.add-product-message {
  max-width: 100%;
}

.text-center {
  text-align: center;
}

.title-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}
</style>

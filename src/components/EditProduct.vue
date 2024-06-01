<template>
    <div class="edit-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
        <div class="title-section">
            <h2 class="text-center">EDIT PRODUCT</h2>
        </div><br>
        <p v-if="successMessage" class="edit-product-message alert alert-success mt-3 text-center">{{ successMessage }}</p>
        <form @submit.prevent="editProduct" class="edit-product-form">
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
                        <span v-if="isEditing" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        EDIT</button>
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
            isEditing: false,
            name: '',
            description: '',
            price: '',
            successMessage: ''
        };
    },
    created() {
        this.getProduct();
    },
    methods: {
        goBack() {
            this.$router.push('/products');
        },
        getProduct() {
            const id = Number(this.$route.params.id);
            const product = this.$store.state.products.find(product => product.id === id);
            if (product) {
                this.name = product.name;
                this.description = product.description;
                this.price = product.price;
            }
        },
        editProduct() {
            if (!confirm("Are you sure you want to edit this product?")) {
                return;
            }
            this.isEditing = true;
            setTimeout(() => {
                this.isEditing = false;
                const id = Number(this.$route.params.id);
                const updatedProduct = {
                    id: id,
                    name: this.name,
                    description: this.description,
                    price: this.price
                };
                this.$store.commit('editProduct', updatedProduct);
                this.name = '';
                this.description = '';
                this.price = '';
                this.successMessage = 'Product successfully edited!';
                setTimeout(() => {
                    this.successMessage = '';
                    this.$router.push('/products');
                }, 3000);
            }, 1500);
        }
    },
};
</script>

<style scoped>
.container {
    max-width: 40%;
}

.shadow {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.rounded {
    border-radius: 5px;
}

.edit-product-message {
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

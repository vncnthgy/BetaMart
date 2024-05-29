<template>
    <div class="delete-product-container container mt-4 shadow p-3 mb-5 bg-white rounded">
        <h2 class="text-center">DELETE PRODUCT</h2>
        <p v-if="successMessage" class="delete-product-message alert alert-success mt-3 text-center">{{ successMessage
            }}</p>
        <form @submit.prevent="deleteProduct" class="delete-product-form">
            <div class="form-group mb-3">
                <label for="name">Product Name:</label>
                <input type="text" id="name" v-model="name" class="form-control" placeholder="Enter Product Name"
                    readonly>
            </div>
            <div class="form-group mb-3">
                <label for="description">Description:</label>
                <input type="text" id="description" v-model="description" class="form-control"
                    placeholder="Enter Product Description" readonly>
            </div>
            <div class="form-group mb-3">
                <label for="price">Price:</label>
                <input type="number" id="price" v-model.number="price" class="form-control"
                    placeholder="Enter Product Price" min="0" readonly>
            </div>
            <div class="d-grid gap-2 col-5 mx-auto">
                <div class="btn-group-vertical" role="group">
                    <button type="submit" class="btn btn-success btn-block">
                        <span v-if="isDeleting" class="spinner-border spinner-border-sm" role="status"
                            aria-hidden="true"></span>
                        DELETE</button>
                    <button type="button" class="btn btn-danger btn-block" @click="goHome">
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
            isDeleting: false,
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
        goHome() {
            this.$router.push('/');
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
        deleteProduct() {
            if (!confirm("Are you sure you want to delete this product?")) {
                return;
            }
            this.isDeleting = true;
            setTimeout(() => {
                this.isDeleting = false;
                const id = Number(this.$route.params.id);
                const index = this.$store.state.products.findIndex(p => p.id === id);
                if (index !== -1) {
                    this.$store.state.products.splice(index, 1);
                }
                this.name = '';
                this.description = '';
                this.price = '';
                this.successMessage = 'Product successfully deleted!';
                setTimeout(() => {
                    this.successMessage = '';
                    this.$router.push('/');
                }, 3000);
            }, 1500);
        }
    }
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

.delete-product-message {
    max-width: 100%;
}

.text-center {
    text-align: center;
}
</style>

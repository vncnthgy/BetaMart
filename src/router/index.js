import { createRouter, createWebHistory } from 'vue-router'
import ViewProduct from '../components/ViewProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
import DeleteProduct from '../components/DeleteProduct.vue'

const routes = [
  {
    path: '/',
    name: 'ViewProduct',
    component: ViewProduct
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/editproduct/:id',
    name: 'EditProduct',
    component: EditProduct,
    props: true
  },
  {
    path: '/deleteproduct/:id',
    name: 'DeleteProduct',
    component: DeleteProduct,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

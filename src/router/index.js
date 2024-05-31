import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ViewProduct from '../components/ViewProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
import DeleteProduct from '../components/DeleteProduct.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/products',
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
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

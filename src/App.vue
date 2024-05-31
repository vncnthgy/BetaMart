<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/brand.jpg" width="35" height="35" class="d-inline-block align-top" alt="">
        BetaMart
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link mx-2">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link mx-2">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link mx-2">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link mx-2">Login</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

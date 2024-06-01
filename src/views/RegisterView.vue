<template>
    <div class="register-user-container container mt-4 shadow p-3 mb-5 bg-white rounded">
      <div class="title-section">
        <h2 class="text-center">REGISTER</h2>
      </div><br>
      <p v-if="successMessage" class="user-register-message alert alert-success mt-3 text-center">{{ successMessage }}</p>
      <form @submit.prevent="registerUser" class="register-user-form">
        <div class="form-group mb-3">
          <label for="name"><b>Name:</b></label>
          <input type="name" id="name" v-model="name" class="form-control" placeholder="Enter Name" required>
        </div>
        <div class="form-group mb-3">
          <label for="email"><b>Email:</b></label>
          <input type="email" id="email" v-model="email" class="form-control" placeholder="Enter Email" required>
        </div>
        <div class="form-group mb-3">
          <label for="password"><b>Password:</b></label>
          <input type="password" id="password" v-model.number="password" class="form-control" placeholder="Enter Password" required>
        </div>
        <div class="d-grid gap-2 col-5 mx-auto">
          <div class="btn-group-vertical" role="group">
            <button type="submit" class="btn btn-success btn-block">
              <span v-if="isRegister" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              REGISTER</button>
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
      isRegister: false,
      email: '',
      password: '',
      successMessage: ''
    };
  },
  methods: {
    goBack() {
      this.$router.push('/login');
    },
  }
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

.user-register-message {
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

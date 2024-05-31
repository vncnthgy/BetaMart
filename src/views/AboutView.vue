<template>
  <div class="about-container container mt-4 shadow p-3 mb-5 bg-white rounded">
    <div class="title-section">
      <h2>ABOUT US</h2>
    </div><br>
    <h2 style="text-align:center">Group 6 Members:</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <img src="@/assets/profile.jpg" alt="Jane" style="width:100%">
          <div class="container">
            <h2>Vincent M. Higoy</h2>
            <p class="title">2000338</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src="@/assets/profile.jpg" alt="Mike" style="width:100%">
          <div class="container">
            <h2>Al Vincent S. Ichon</h2>
            <p class="title">2000637</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src="@/assets/profile.jpg" alt="John" style="width:100%">
          <div class="container">
            <h2>Miguel Angelo T. Jacob</h2>
            <p class="title">2000909</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src="@/assets/profile.jpg" alt="John" style="width:100%">
          <div class="container">
            <h2>Arnel O. Jaen</h2>
            <p class="title">1700261</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src="@/assets/profile.jpg" alt="John" style="width:100%">
          <div class="container">
            <h2>Alberto M. Jain III</h2>
            <p class="title">2000309</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
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

.title-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
  text-align: center;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}
</style>

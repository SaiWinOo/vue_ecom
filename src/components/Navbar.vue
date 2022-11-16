<template lang="">
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand fs-3" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav_link" :to="{name: 'home'}">Home</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: "Navbar",
}
</script>
<style scoped>
    .nav_link{
     text-decoration: none;
     padding: 0 10px;
     font-size: 1.2rem;
    }
    
</style>
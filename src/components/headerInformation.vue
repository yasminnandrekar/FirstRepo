<template>
<div>
<nav class="navbar navbar is-primary navbar is-fixed-top" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
  <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
  </a>
  <!-- <a role="button" class="navbar-burger burger" aria-label="menu" @click="burgerClick" aria-expanded="false" data-target="navbarBasicExample">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a> -->
</div>
<div id="navbarBasicExample" class="navbar-menu">
  <div class="navbar-start">
    <a class="navbar-item">
      <span class="icon"><i class="fas fa-home"></i></span>
      <router-link to="/studentDetails" class="has-text-black">student</router-link>
    </a>
  </div>
    <a class="navbar-item">
      <span class="icon"><i class="fas fa-home"></i></span>
      <router-link to="/user" class="has-text-black">user</router-link>
    </a>
    <a class="navbar-item">
      <span class="icon"><i class="fas fa-home"></i></span>
      <router-link to="/nodeExample" class="has-text-black">nodeExample</router-link>
    </a>



</div>
</nav>
</div>
</template>
<script type="text/javascript">
export default{
 name:'headerInformation',
 data(){
   return{

   }
   }
   }

</script>

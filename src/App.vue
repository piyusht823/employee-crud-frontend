<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import Controller from './components/controller.vue';
// import Employeebyid from './components/employeebyid.vue';
</script>

<template>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div style="background-color: rgb(229, 239, 97);">
    <router-link :to="{name:'home'}">Home</router-link> | 
    <router-link :to="{name:'controller'}">Get All</router-link> | 
    <router-link :to="{name:'insertdata'}">Insert</router-link> | 
    <router-link :to="{name:'delete'}">Delete by ID</router-link> |
    <router-link :to="{name:'getbyid'}">Get by ID</router-link> 
  </div>

  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

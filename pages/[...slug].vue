<template>
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <NuxtLink to="/">Go Back Home</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
console.log('Attempted to access:', route.path);
</script>

<style scoped>
.container {
  text-align: center;
  margin: 2rem auto;
}
</style>
